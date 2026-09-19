# Go Below — photography manifest

> **Ready-to-use generation prompts for all eleven images: [PROMPTS.md](./PROMPTS.md)**

No photography exists in this repository yet. Every image slot on the site is
declared in `src/lib/images.ts` and currently renders a designed placeholder
carrying its shot brief.

**To add a real image:**

1. Save the file here as `public/images/<id>.jpg` (or `.webp`)
2. Set `src: '/images/<id>.jpg'` on that slot in `src/lib/images.ts`

Nothing else needs to change — `<Plate />` switches from placeholder to
`next/image` automatically, with AVIF/WebP and responsive sizes already
configured.

## Required images

| id | Tone | Must show |
|---|---|---|
| `hero-living-lightwell` | daylight | Luxury underground living room, planted light well overhead, reflecting water, warm stone and timber. The hero. Must read as unmistakably underground AND unmistakably desirable. |
| `living-bedroom-skylight` | daylight | Underground bedroom with skylight and planting. Calm, warm, residential. |
| `wellness-pool-spa` | daylight | Underground pool and spa. Water, stone, engineered daylight, steam. |
| `entertainment-cinema` | deep | Private cinema. This one *should* be dark — it is what the room is for. |
| `automotive-vehicle-vault` | warm | Underground garage / vehicle vault. Polished floor, structural columns. |
| `protection-blast-door` | deep | Blast door set into a *finished architectural* corridor — not a military set. |
| `specialist-wine-room` | warm | Wine room. Timber racking, cool stone, low warm light. |
| `descent-concealed-entrance` | daylight | Ground level giving nothing away — lawn, courtyard or garden building. |
| `descent-stair` | warm | The descent. Daylight falling from above into deepening concrete. |
| `descent-arrival` | daylight | Arrival. The space opening up. The "I cannot believe that's underground" moment. |
| `engineering-structure` | deep | Excavation or structural shell under construction. Rebar, shuttering, scale. |

## Direction

The balance matters more than any single frame. Seven of the eleven are
**daylight or warm** — that is deliberate. The first attempt at this brand went
too dark and tactical, and made underground space feel oppressive rather than
desirable.

Dark imagery earns its place on the cinema, the blast door and the structural
shell, where the darkness is the subject. It should not set the tone of the
site.

Every space must still read as underground through **thick structure, deep
reveals, earth-retaining walls, limited conventional windows and engineered
light** — not through an absence of light.

## Optimisation

- Supply at 2560px wide; `next.config.mjs` generates the responsive set
- Do not pre-compress to JPEG artefacts — AVIF/WebP conversion happens at build
- The hero carries `priority`; everything else lazy-loads
