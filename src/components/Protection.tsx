import { Plate } from './Plate'
import { Reveal } from './Reveal'
import { images } from '@/lib/images'

export function Protection() {
  return (
    <section id="protection" className="relative bg-ink-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Plate
              image={images.protection}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
              showBrief={false}
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="brand-mark text-[11px] text-amber">Protection</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-limestone sm:text-4xl lg:text-[2.9rem]">
              Beautiful when you want it.
              <br />
              Protective when you need it.
            </h2>
            <div className="mt-6 max-w-reading space-y-4 text-[0.98rem] leading-relaxed text-limestone/65">
              <p>
                Some clients come to us for a cinema. Some come for a shelter.
                The structure underneath is largely the same — what changes is
                the specification of the envelope, the doors, the air handling
                and the services that have to keep running when nothing else
                does.
              </p>
              <p>
                We design secure rooms, shelters and bespoke bunkers to the
                brief in front of us, and we are straightforward about what a
                given specification does and does not protect against. That
                conversation is confidential, and it is the right place to
                start.
              </p>
            </div>

            <ul className="mt-9 grid gap-3 text-sm text-limestone/70 sm:grid-cols-2">
              {[
                'Safe rooms within existing homes',
                'Standalone shelters',
                'Certified door sets and hardware',
                'Filtered air and sealed envelopes',
                'Independent power and water',
                'Concealed and controlled access',
              ].map((item) => (
                <li key={item} className="flex gap-3 border-t hairline pt-3">
                  <span aria-hidden className="text-amber">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-9 max-w-reading text-sm leading-relaxed text-limestone/45">
              Specifications are developed per project against the client’s own
              risk assessment. We do not publish protection ratings for work we
              have not yet designed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
