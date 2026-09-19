import { Plate } from './Plate'
import { Reveal } from './Reveal'
import { images } from '@/lib/images'

const categories = [
  {
    key: 'living' as const,
    title: 'Living',
    copy:
      'Bedrooms, sitting rooms, kitchens and guest accommodation. Light wells, ' +
      'courtyards and planting bring daylight down with you.',
    examples: 'Bedrooms · Living rooms · Guest suites · Studies',
  },
  {
    key: 'wellness' as const,
    title: 'Wellness',
    copy:
      'Pools, spas, saunas and gyms. Below ground is the natural home for the ' +
      'humidity, plant and acoustic isolation these rooms demand.',
    examples: 'Pools · Spas · Saunas · Gyms · Treatment rooms',
  },
  {
    key: 'entertainment' as const,
    title: 'Entertainment',
    copy:
      'Cinemas, bars, games rooms and dining. The one place in a house where ' +
      'the absence of windows is the point.',
    examples: 'Cinemas · Bars · Games rooms · Dining',
  },
  {
    key: 'automotive' as const,
    title: 'Automotive',
    copy:
      'An underground garage is the one that does not dominate the house. ' +
      'Vehicle vaults, workshops and turntables — storage and display for a ' +
      'collection, without giving the garden over to it.',
    examples: 'Vehicle vaults · Workshops · Turntables · Lifts',
  },
  {
    key: 'protection' as const,
    title: 'Protection',
    copy:
      'Secure rooms, shelters and bespoke bunkers. Designed properly, and ' +
      'indistinguishable from the rest of the house until needed.',
    examples: 'Safe rooms · Shelters · Secure storage · Concealed access',
  },
  {
    key: 'specialist' as const,
    title: 'Specialist',
    copy:
      'Wine rooms, archives, plant and anything with a brief of its own. ' +
      'Stable temperature and humidity come free below ground.',
    examples: 'Wine rooms · Archives · Vaults · Plant',
  },
]

export function Possibilities() {
  return (
    <section id="possibilities" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="brand-mark text-[11px] text-amber">What can exist below?</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight text-limestone sm:text-4xl lg:text-5xl">
            Far more than most people imagine.
          </h2>
          <p className="mt-6 max-w-reading text-base leading-relaxed text-limestone/65">
            Underground construction is not one thing. The same engineering that
            makes a shelter possible makes a pool, a cinema or a vehicle vault
            possible — and most of our work is the latter.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 lg:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.key} delay={(i % 2) * 90}>
              <article className="group">
                <Plate
                  image={images[c.key]}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  showBrief={false}
                />
                <div className="mt-6">
                  <h3 className="font-display text-2xl text-limestone sm:text-[1.7rem]">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-reading text-[0.95rem] leading-relaxed text-limestone/65">
                    {c.copy}
                  </p>
                  <p className="mt-4 text-xs tracking-wide text-concrete-light">
                    {c.examples}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
