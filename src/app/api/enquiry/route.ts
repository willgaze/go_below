import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/lib/site'

export const runtime = 'nodejs'

/**
 * Enquiry handler.
 *
 * Deliberately fails LOUDLY and honestly when unconfigured: if there is no
 * API key or no destination inbox, it returns 503 with a message the visitor
 * can act on, rather than a cheerful "thank you" for a message that went
 * nowhere. A silent black hole on the only contact route is worse than an
 * error.
 */

const MAX = { name: 120, email: 200, phone: 40, location: 160, brief: 5000 }

function clean(value: FormDataEntryValue | undefined, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let payload: Record<string, string>
  try {
    payload = (await request.json()) as Record<string, string>
  } catch {
    return NextResponse.json({ ok: false, error: 'Malformed request.' }, { status: 400 })
  }

  // Honeypot — silently accept so a bot learns nothing, but send nothing.
  if (clean(payload.company, 100)) {
    return NextResponse.json({ ok: true })
  }

  const name = clean(payload.name, MAX.name)
  const email = clean(payload.email, MAX.email)
  const phone = clean(payload.phone, MAX.phone)
  const location = clean(payload.location, MAX.location)
  const brief = clean(payload.brief, MAX.brief)

  if (!name || !email || !brief) {
    return NextResponse.json(
      { ok: false, error: 'Please complete your name, email and a short brief.' },
      { status: 400 },
    )
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'That email address does not look right.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = site.email
  const from = process.env.ENQUIRY_FROM

  if (!apiKey || !to || !from) {
    // Configuration gap, not visitor error. Say so plainly.
    console.error(
      '[enquiry] Not configured. Missing:',
      [!apiKey && 'RESEND_API_KEY', !to && 'site.email', !from && 'ENQUIRY_FROM']
        .filter(Boolean)
        .join(', '),
    )
    return NextResponse.json(
      {
        ok: false,
        error:
          'The enquiry form is not yet connected. Please email us directly — ' +
          'we are sorry for the inconvenience.',
      },
      { status: 503 },
    )
  }

  const lines = [
    `Name:      ${name}`,
    `Email:     ${email}`,
    phone && `Telephone: ${phone}`,
    location && `Location:  ${location}`,
    '',
    brief,
  ].filter(Boolean) as string[]

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Go Below enquiry — ${name}`,
      text: lines.join('\n'),
    })
    if (error) {
      console.error('[enquiry] Resend rejected the send:', error)
      return NextResponse.json(
        { ok: false, error: 'We could not send that just now. Please try again shortly.' },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[enquiry] Unexpected failure:', err)
    return NextResponse.json(
      { ok: false, error: 'We could not send that just now. Please try again shortly.' },
      { status: 500 },
    )
  }
}
