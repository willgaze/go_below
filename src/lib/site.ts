/**
 * Single source of truth for anything factual about the company.
 *
 * RULE: if a value is not confirmed, it stays `null` and the UI omits the
 * thing entirely. Nothing here may be guessed.
 *
 * The previous site reportedly carried "200+ projects completed", "ISO 9001"
 * and "15+ years". None of that is substantiated, so none of it exists in
 * this codebase. An early-stage brand is better served by being obviously
 * careful than by borrowed numbers a client could check and disprove.
 */

export const site = {
  name: 'Go Below',
  tagline: 'Extraordinary spaces. Built beneath.',
  description:
    'Go Below designs and builds bespoke underground spaces across the UK — ' +
    'living rooms, wellness suites, cinemas, garages, wine rooms and secure ' +
    'shelters, engineered beneath existing homes and land.',

  // Set once a domain is live. Used for canonical URLs, sitemap and OG tags.
  url: 'https://gobelow.co.uk',

  /* ------------------------------------------------------------------ *
   * UNCONFIRMED — supply real values before launch.
   * Every consumer of these checks for null and renders nothing if unset,
   * so the site is safe to deploy with them empty.
   * ------------------------------------------------------------------ */

  /** Enquiries inbox. Until set, the form posts but cannot deliver. */
  email: null as string | null,

  /** E.164, no spaces, e.g. '447700900000'. Enables the WhatsApp CTA. */
  whatsapp: null as string | null,

  /** Display + tel: link, e.g. '+44 20 0000 0000'. */
  phone: null as string | null,

  /** Companies House registered name and number, once incorporated. */
  registeredName: null as string | null,
  companyNumber: null as string | null,

  /** Registered or correspondence address. Needed before LocalBusiness schema. */
  address: null as {
    street: string
    locality: string
    region: string
    postcode: string
  } | null,

  /**
   * Accreditations. EMPTY BY DESIGN.
   * Only add entries that can be evidenced with a certificate number.
   */
  accreditations: [] as { name: string; reference: string }[],

  /**
   * Completed projects. EMPTY BY DESIGN.
   * The site must not imply a portfolio that does not exist.
   */
  projects: [] as { title: string; location: string; year: number }[],
} as const

/** True when we can actually receive an enquiry. */
export const canReceiveEnquiries = Boolean(process.env.RESEND_API_KEY && site.email)
