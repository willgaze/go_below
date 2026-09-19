'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Enquiry() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = (await res.json()) as { ok?: boolean; error?: string }

      if (!res.ok || !body.ok) {
        setStatus('error')
        setMessage(body.error ?? 'Something went wrong. Please try again.')
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Could not reach the server. Please try again.')
    }
  }

  const field =
    'w-full border border-limestone/20 bg-transparent px-4 py-3.5 text-limestone ' +
    'placeholder:text-limestone/30 transition-colors focus:border-amber-soft focus:outline-none'

  return (
    <section id="enquiry" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="brand-mark text-[11px] text-amber">Enquiries</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-limestone sm:text-4xl lg:text-[2.9rem]">
              What would you build below?
            </h2>
            <div className="mt-6 max-w-reading space-y-4 text-[0.98rem] leading-relaxed text-limestone/65">
              <p>
                Tell us as much or as little as you like. A sketch on the back
                of something is a perfectly good place to start, and so is a
                single sentence about the room you keep imagining.
              </p>
              <p>
                Every enquiry is treated as confidential. We do not share client
                names, locations or project details — including on this website.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            {status === 'sent' ? (
              <div
                role="status"
                className="border border-amber/40 bg-amber/5 p-10 text-center"
              >
                <p className="font-display text-2xl text-limestone">Thank you.</p>
                <p className="mx-auto mt-4 max-w-reading text-sm leading-relaxed text-limestone/65">
                  Your enquiry has been received. We will come back to you
                  personally — normally within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot. Real people never fill this in. */}
                <div className="absolute left-[-9999px]" aria-hidden>
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs tracking-wide text-limestone/55">
                      Name
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs tracking-wide text-limestone/55">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs tracking-wide text-limestone/55">
                      Telephone <span className="text-limestone/30">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
                  </div>
                  <div>
                    <label htmlFor="location" className="mb-2 block text-xs tracking-wide text-limestone/55">
                      Where is the property?
                    </label>
                    <input
                      id="location"
                      name="location"
                      placeholder="County is enough"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="brief" className="mb-2 block text-xs tracking-wide text-limestone/55">
                    What are you imagining?
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={6}
                    required
                    placeholder="A pool. A cinema. Somewhere to put the cars. A shelter. Or simply that you have land and want to know what is possible."
                    className={`${field} resize-y`}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="border border-red-400/40 bg-red-400/5 px-4 py-3 text-sm text-red-200">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-limestone px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-amber-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>

                <p className="text-xs leading-relaxed text-limestone/35">
                  We use your details only to respond to this enquiry.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
