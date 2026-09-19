import Image from 'next/image'
import type { ImageSlot } from '@/lib/images'

const toneWash: Record<ImageSlot['tone'], string> = {
  // Daylight falling into concrete — light at the top, mass at the bottom.
  daylight:
    'bg-[radial-gradient(120%_80%_at_50%_-10%,#F1EDE5_0%,#C9C1B4_22%,#8B857D_48%,#3A3430_78%,#1A1714_100%)]',
  // Warm interior light, timber and stone.
  warm: 'bg-[radial-gradient(110%_75%_at_50%_0%,#DDA95C_0%,#8A5E3B_26%,#5C574F_56%,#241F1B_100%)]',
  // Deep structure. Still warm, never blue-black.
  deep: 'bg-[radial-gradient(100%_70%_at_50%_0%,#5C574F_0%,#2E2823_42%,#100E0C_100%)]',
}

interface PlateProps {
  image: ImageSlot
  /** Tailwind aspect utility, e.g. 'aspect-[16/9]'. */
  aspect?: string
  className?: string
  priority?: boolean
  sizes?: string
  /** Show the shot brief over the placeholder. Off for small decorative slots. */
  showBrief?: boolean
}

/**
 * An architectural image slot.
 *
 * With a real file it is simply next/image. Without one it renders a
 * placeholder that carries the intended light and the shot brief, so the
 * page can be judged as a design and the photographer knows what to shoot.
 * It never renders a broken <img>, and never substitutes stock photography.
 */
export function Plate({
  image,
  aspect = 'aspect-[16/9]',
  className = '',
  priority = false,
  sizes = '100vw',
  showBrief = true,
}: PlateProps) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden ${aspect} ${toneWash[image.tone]} ${className}`}
      role="img"
      aria-label={`Photography pending: ${image.alt}`}
    >
      {/* Suggestion of a light well / structural opening above. */}
      <div
        aria-hidden
        className="absolute inset-x-[18%] top-0 h-[38%] bg-[linear-gradient(to_bottom,rgba(241,237,229,0.30),transparent)] blur-2xl"
      />
      {/* Structural banding — reads as shuttered concrete rather than a gradient. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] mix-blend-overlay bg-[repeating-linear-gradient(90deg,transparent_0_58px,rgba(241,237,229,0.6)_58px_59px)]"
      />
      {showBrief && (
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-5 sm:p-7 bg-[linear-gradient(to_top,rgba(16,14,12,0.86),transparent)]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-soft/90">
              Photography pending
            </p>
            <p className="mt-2 max-w-reading text-sm leading-relaxed text-limestone/75">
              {image.brief}
            </p>
            <p className="mt-2 font-mono text-[11px] text-limestone/40">
              public/images/{image.id}.jpg
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
