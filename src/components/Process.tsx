import { Reveal } from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Consultation',
    copy: 'What you want, where it might go, and whether the site can take it. Confidential, and no obligation.',
  },
  {
    n: '02',
    title: 'Feasibility',
    copy: 'Ground investigation, survey, planning and party wall position, and an honest view of cost and programme.',
  },
  {
    n: '03',
    title: 'Design & engineering',
    copy: 'Architecture and structure developed together, with waterproofing, ventilation and services designed in from the start.',
  },
  {
    n: '04',
    title: 'Groundworks',
    copy: 'Excavation, temporary works, retention and the structural shell — the phase that decides everything after it.',
  },
  {
    n: '05',
    title: 'Construction',
    copy: 'Waterproofing, drainage, plant and first fix, carried out in the sequence the design depends on.',
  },
  {
    n: '06',
    title: 'Fit-out & commissioning',
    copy: 'Finishes, lighting, and the testing and handover of every system before you use the space.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="brand-mark text-[11px] text-amber">How a project happens</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-tight text-limestone sm:text-4xl lg:text-5xl">
            Six stages, in order.
          </h2>
          <p className="mt-6 max-w-reading text-base leading-relaxed text-limestone/65">
            Underground work is unforgiving of things done out of sequence. The
            programme is set at feasibility and everything after it follows.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80}>
              <li className="border-t hairline pt-6">
                <span className="font-display text-sm text-amber">{s.n}</span>
                <h3 className="mt-3 font-display text-xl text-limestone">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-limestone/60">{s.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
