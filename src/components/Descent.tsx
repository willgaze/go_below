import { Plate } from './Plate'
import { Reveal } from './Reveal'
import { images } from '@/lib/images'

const stages = [
  {
    key: 'descentEntrance' as const,
    depth: 'Ground level',
    title: 'Nothing to see',
    copy:
      'A lawn, a courtyard, a garden building. From above, the best underground ' +
      'work is invisible — and that is usually the client’s first requirement.',
  },
  {
    key: 'descentStair' as const,
    depth: 'The descent',
    title: 'Down through the structure',
    copy:
      'Stair or lift, with daylight following you down. The moment the walls ' +
      'thicken and the light changes is the moment the building becomes ours.',
  },
  {
    key: 'descentArrival' as const,
    depth: 'Below',
    title: 'And then it opens',
    copy:
      'Volume, daylight, planting, water. The reaction we design for is not ' +
      '“this is a nice basement”. It is “I cannot believe that is underground”.',
  },
]

export function Descent() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="brand-mark text-[11px] text-amber">The descent</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight text-limestone sm:text-4xl lg:text-5xl">
            Every project is a journey downwards.
          </h2>
        </Reveal>

        {/* A section line running through the stages — closer to an
            architectural drawing than a timeline widget. */}
        <ol className="relative mt-16 space-y-20 sm:space-y-28">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-full w-px bg-[linear-gradient(to_bottom,rgba(196,135,47,0.5),rgba(241,237,229,0.12)_35%,transparent)] sm:block"
          />
          {stages.map((s, i) => (
            <li key={s.key} className="relative sm:pl-16">
              <span
                aria-hidden
                className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border border-amber/60 bg-ink sm:block"
              />
              <Reveal>
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-concrete-light">
                      {s.depth}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-limestone sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-reading text-[0.95rem] leading-relaxed text-limestone/65">
                      {s.copy}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <Plate
                      image={images[s.key]}
                      aspect="aspect-[16/10]"
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      showBrief={false}
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
