import { Plate } from './Plate'
import { images } from '@/lib/images'

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden">
      <div className="absolute inset-0">
        <Plate
          image={images.hero}
          aspect="h-full w-full"
          priority
          sizes="100vw"
          showBrief={false}
          className="h-full"
        />
        {/* Enough scrim to hold type, not enough to make it a night scene.
            The brief is explicit that the first attempt was too dark. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(16,14,12,0.92)_0%,rgba(16,14,12,0.45)_38%,rgba(16,14,12,0.20)_70%,rgba(16,14,12,0.45)_100%)]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="brand-mark text-[11px] text-amber-soft sm:text-xs">Go Below</p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.1rem] leading-[1.12] text-limestone sm:text-5xl lg:text-6xl">
          The most extraordinary room in your home
          <br className="hidden sm:block" /> may be the one beneath it.
        </h1>

        <p className="mt-7 max-w-reading text-base leading-relaxed text-limestone/70 sm:text-lg">
          Go Below designs and builds bespoke underground spaces across the UK —
          living rooms and wellness suites, cinemas and cellars, vehicle vaults
          and secure shelters — engineered beneath existing homes and land.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#enquiry"
            className="bg-limestone px-8 py-4 text-center text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-amber-soft"
          >
            Discuss a project
          </a>
          <a
            href="#possibilities"
            className="border border-limestone/35 px-8 py-4 text-center text-sm tracking-wide text-limestone transition-colors duration-300 hover:border-limestone hover:bg-limestone/5"
          >
            Explore what’s possible
          </a>
        </div>
      </div>
    </section>
  )
}
