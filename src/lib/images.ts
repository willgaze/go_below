/**
 * Image registry — the single place a real photograph enters the site.
 *
 * No Go Below photography exists in this repository yet (checked: /public
 * contains no image assets). Rather than reference paths that 404, or drop in
 * Unsplash placeholders that would misrepresent the brand, every slot below
 * declares what the image must SHOW and renders as a designed plate until the
 * real file lands.
 *
 * To add a real image:
 *   1. Drop the file at `public/images/<id>.jpg` (or .webp)
 *   2. Set `src` on that slot below
 * Nothing else changes. <Plate /> switches from placeholder to next/image.
 *
 * `tone` drives the placeholder's colouring so the page already reads with
 * the intended light/dark rhythm before any photography arrives.
 */

export type Tone = 'daylight' | 'warm' | 'deep'

export interface ImageSlot {
  id: string
  /** What the photograph must show. Doubles as the shot brief and the alt text base. */
  brief: string
  alt: string
  tone: Tone
  /** Set when a real file exists in /public/images. Null renders the plate. */
  src: string | null
}

const slot = (
  id: string,
  brief: string,
  alt: string,
  tone: Tone,
  src: string | null = null,
): ImageSlot => ({ id, brief, alt, tone, src })

export const images = {
  hero: slot(
    'hero-living-lightwell',
    'Hero. Luxury underground living room beneath an open planted light well. ' +
      'Daylight, real sky, and — the thing that makes it work — the cut edge ' +
      'of the ground itself visible at the rim, so you can see how far below ' +
      'grade the room sits.',
    'An underground living room beneath an open light well, with daylight falling past ' +
      'the exposed edge of the ground onto board-marked concrete, a stone stair and ' +
      'low linen seating',
    'daylight',
    '/images/hero-living-lightwell.webp',
  ),

  // What can exist below — one per category
  living: slot(
    'living-bedroom-skylight',
    'Underground bedroom with skylight and planting. Calm, warm, residential.',
    'An underground bedroom lit from above by a skylight, with planting at the opening',
    'daylight',
    '/images/living-bedroom-skylight.webp',
  ),
  wellness: slot(
    'wellness-pool-spa',
    'Underground pool and spa. Water, stone, engineered daylight, steam.',
    'An underground pool and spa lit by engineered daylight over stone',
    'daylight',
    '/images/wellness-pool-spa.webp',
  ),
  entertainment: slot(
    'entertainment-cinema',
    'Underground cinema. Deep, controlled dark — this one SHOULD be dark, ' +
      'because that is what the room is for.',
    'A private underground cinema with tiered seating',
    'deep',
    '/images/entertainment-cinema.webp',
  ),
  automotive: slot(
    'automotive-vehicle-vault',
    'Underground garage / vehicle vault. Polished floor, structural columns, ' +
      'dramatic but clean lighting.',
    'An underground vehicle vault with polished floors and structural columns',
    'warm',
    '/images/automotive-vehicle-vault.webp',
  ),
  protection: slot(
    'protection-blast-door',
    'Blast door, closed, in a finished architectural corridor — not a military ' +
      'set. The point is that security sits inside a beautiful building.',
    'A secure blast door set into a finished underground corridor',
    'deep',
    '/images/protection-blast-door.webp',
  ),
  specialist: slot(
    'specialist-wine-room',
    'Underground wine room. Timber racking, cool stone, low warm light.',
    'An underground wine room with timber racking and stone walls',
    'warm',
    '/images/specialist-wine-room.webp',
  ),

  // The descent sequence
  descentEntrance: slot(
    'descent-concealed-entrance',
    'Concealed entrance at ground level — an ordinary lawn, courtyard or garden ' +
      'building that gives nothing away.',
    'A frameless glass rooflight set flush into a clipped lawn between yew hedges, ' +
      'the only sign of the house below',
    'daylight',
    '/images/descent-concealed-entrance.webp',
  ),
  descentStair: slot(
    'descent-corridor',
    'The descent itself. A corridor or stair running deeper into the structure, ' +
      'the walls thickening and the light becoming engineered rather than natural.',
    'A glass-walled underground corridor running between lit rock faces and planting',
    'warm',
    '/images/descent-corridor.webp',
  ),
  descentArrival: slot(
    'descent-arrival',
    'Arrival. The space opening up — the "I cannot believe that is underground" ' +
      'moment.',
    'A double-height underground hall beneath a wide rooflight, the cut edge of the ' +
      'ground visible above board-marked concrete, planting spilling down one wall',
    'daylight',
    '/images/descent-arrival.webp',
  ),

  // Engineering / process
  engineering: slot(
    'engineering-structure',
    'Excavation or structural shell under construction. Rebar, shuttering, ' +
      'waterproofing, scale. Evidence of real engineering.',
    'The structural shell of an underground build during construction',
    'deep',
  ),
} satisfies Record<string, ImageSlot>

export type ImageKey = keyof typeof images

/** Slots still awaiting real photography. Used by the build-time report. */
export const missingImages = Object.values(images).filter((i) => i.src === null)
