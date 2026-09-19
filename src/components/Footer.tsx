import { site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t hairline bg-ink-deep py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="brand-mark text-sm text-limestone">Go&nbsp;Below</p>
            <p className="mt-4 max-w-reading text-sm leading-relaxed text-limestone/50">
              Bespoke underground construction across the United Kingdom.
            </p>
          </div>

          <div className="space-y-2 text-sm text-limestone/55 sm:text-right">
            {site.phone && (
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-limestone">
                  {site.phone}
                </a>
              </p>
            )}
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-limestone">
                  {site.email}
                </a>
              </p>
            )}
            <p>
              <a href="#enquiry" className="hover:text-limestone">
                Discuss a project
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t hairline pt-8 text-xs text-limestone/35 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.registeredName ?? 'Go Below'}
            {site.companyNumber && ` · Registered in England & Wales no. ${site.companyNumber}`}
          </p>
          <p>Enquiries treated in confidence.</p>
        </div>
      </div>
    </footer>
  )
}
