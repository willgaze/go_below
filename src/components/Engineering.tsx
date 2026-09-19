import { Plate } from './Plate'
import { Reveal } from './Reveal'
import { images } from '@/lib/images'

const disciplines = [
  { title: 'Structure', copy: 'Retaining the ground, and everything standing on it.' },
  { title: 'Waterproofing', copy: 'Designed in layers, to BS 8102, with drained cavity and maintainable defence.' },
  { title: 'Drainage', copy: 'Gravity where possible, pumped where not, with redundancy either way.' },
  { title: 'Ventilation', copy: 'Fresh air, humidity control and heat recovery, sized to the room’s use.' },
  { title: 'Environment', copy: 'Stable temperature year-round — the quiet advantage of building below.' },
  { title: 'Power & lighting', copy: 'Engineered daylight, circadian control, and resilient supply.' },
  { title: 'Access', copy: 'Stairs, lifts and the movement of everything that has to come down.' },
  { title: 'Security', copy: 'Specified to the brief, from a discreet safe room to a certified door set.' },
]

export function Engineering() {
  return (
    <section id="engineering" className="bg-limestone py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="brand-mark text-[11px] text-timber">Luxury &amp; engineering</p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.9rem]">
              These are not basement rooms.
            </h2>
            <div className="mt-6 max-w-reading space-y-4 text-[0.98rem] leading-relaxed text-ink/70">
              <p>
                A room below ground has to hold back earth and water, breathe
                without a window, drain uphill, and stay warm, dry and quiet for
                decades. Every one of those is solvable. None of them is
                optional.
              </p>
              <p>
                That is the difference between a cellar and a space you would
                choose to spend your evening in — and it is why underground
                work belongs with people who do only this.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <Plate
              image={images.engineering}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 56vw, 100vw"
              showBrief={false}
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 70}>
              <div className="border-t border-ink/15 pt-5">
                <h3 className="text-sm font-medium tracking-wide text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{d.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
