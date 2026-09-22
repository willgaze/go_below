/**
 * Search-engine indexing switch.
 *
 * Closed by default, on purpose. The site went live on a public .vercel.app
 * URL while nine of eleven image slots were still placeholders and the
 * enquiry form could not deliver — exactly the version of this brand that
 * should not be the first thing anyone finds in a search result. Getting
 * indexed is fast; getting de-indexed is not.
 *
 * To open it at launch, set NEXT_PUBLIC_ALLOW_INDEXING=true in the Vercel
 * project's environment variables and redeploy.
 *
 * NEXT_PUBLIC_ prefix is required: robots.ts and the layout metadata are both
 * evaluated at build time, and this has to be inlined into that build.
 */
export const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
