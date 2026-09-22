# Go Below — image generation prompts (v2)

Two images are in. **This version is rewritten around what actually worked in
them**, not around what the first set of prompts asked for.

| Slot | Status |
|---|---|
| `hero-living-lightwell` | ✅ in |
| `descent-corridor` | ✅ in |
| the other nine | below |

## What the two successes taught us

**1. The exposed edge of the ground is the strongest cue we have.**
Nothing in the hero prompt asked for it. The generator put the cut edge of the
earth at the rim of the light well — soil strata, roots, turf — and that single
detail does more to say *underground* than any amount of darkness. It is now in
every daylight prompt below.

**2. Rock face behind glass is the second strongest.**
From the corridor image. Living rock, uplit, seen through full-height glazing.
It reads as "we cut into the ground and made it beautiful".

**3. The palette is already right — lock it.**
Both images measure +36 and +37 on red-minus-blue. That is a warm, consistent
signature, and it matches the site's tokens. Every prompt below says *warm*
explicitly so the set does not drift cool halfway through.

**4. Perfect symmetry reads as AI.**
The corridor's dead-centre one-point perspective is its one weakness. Every
prompt below asks for a slightly off-axis camera.

## Shared style suffix — append to every prompt

> architectural photography, 24mm tilt-shift lens, camera slightly off-axis
> rather than dead-centre, warm neutral colour grade, natural light where
> daylight is present, editorial interiors quality, calm and still, no people,
> no text, no logos, photorealistic, high dynamic range

## Shared negative prompt

> fisheye, wide-angle distortion, HDR halos, teal and orange grade, blue
> cinematic tint, cool grey concrete, neon, sci-fi, video game render,
> cluttered, busy, cartoon, illustration, people, faces, text, watermark,
> military, tactical, survivalist, apocalyptic, grimy, damp, mouldy,
> perfectly symmetrical composition

---

# PRIORITY 1 — the six category cards

These six sit together in one grid on the homepage's first scroll. **Generate
them as a set in one session** so they share a house style; a grid of six that
each look like a different photographer is worse than six weaker but coherent
images.

### 1. `living-bedroom-skylight` — daylight

> A calm underground principal bedroom directly beneath a large rectangular
> skylight. Morning daylight falls through the opening onto linen bedding and a
> wide oak headboard. **At the rim of the opening the cut edge of the ground is
> visible — soil strata, roots and turf — so you can see how far below grade the
> room sits.** Planting spills over the edge above. Walls are warm limestone and
> board-marked concrete, unusually thick, with a deep reveal around the opening.
> No windows in any wall. Residential and restful, not a hotel.

### 2. `wellness-pool-spa` — daylight

> An underground swimming pool and spa. Still, clear water reflecting a run of
> linear roof lights far overhead. **The cut edge of the ground is visible at
> the roof light opening, soil strata exposed above warm travertine walls.** A
> cedar sauna with a glazed front set into living rock behind full-height glass,
> uplit. Steam catching the shafts of daylight. Planting at the water's edge
> beneath the openings. Massive concrete structure visible in the deep ceiling
> coffers. Resort quality, private.

### 3. `entertainment-cinema` — deep *(this one should be dark)*

> A private underground cinema. Tiered rows of deep leather recliners facing a
> large screen. Warm low-level light concealed in the step nosings and a bronze
> reveal around the screen wall. Acoustic timber slat walls in dark oak, heavy
> wool carpet. Genuinely dark because that is the room's purpose — but warm and
> precise, rich materials and sharp edges, never black on black. Thick concrete
> structure visible where the ceiling meets the wall.

### 4. `automotive-vehicle-vault` — warm

> A private underground vehicle vault beneath a country house. Three or four
> classic and modern cars on a mirror-polished resin floor, arranged with space
> around them like sculpture. Board-marked concrete columns with sharp shutter
> lines, warm linear lighting raking across the paintwork, a glass-walled
> workshop bay at the rear with living rock visible behind it, uplit.
> **Absolutely not a public car park: no bay numbers, no painted line markings,
> no signage, no ramps, no barriers.** Private, collected, expensive.

### 5. `protection-blast-door` — deep

> A heavy engineered security door, closed, at the end of a *finished
> architectural corridor* — not a military installation. Brushed stainless and
> bronze, precision wheel mechanism, visible heavy hinges, framed by a deep
> board-marked concrete reveal. The corridor approaching it has warm oak
> panelling, a limestone floor and concealed linear lighting. The contrast is
> the whole point: domestic luxury leading to serious protection. No signage, no
> hazard stripes, no weapons, no khaki, no rust.

**Aspect: 4:5 portrait.** The others are 4:3.

### 6. `specialist-wine-room` — warm

> An underground wine room. Full-height oak and blackened-steel racking, a solid
> oak tasting table lit from above, cool limestone walls and floor. Low warm
> pooled lighting with deep shadow between the racks. One narrow slot of
> daylight entering high at the far end, just enough to say this is below ground
> rather than a windowless box. Cellar-cool atmosphere, precise joinery, no
> clutter.

---

# PRIORITY 2 — completing the descent

The corridor is already in and sits between these two. **Match its warmth and
its material palette** so the three read as one journey.

### 7. `descent-concealed-entrance` — daylight

> An immaculate English country garden on a still, overcast morning. Clipped
> lawn, yew hedging, gravel, a low stone wall. Set flush into the lawn is a
> single frameless glass-and-bronze panel, almost invisible — the only hint of
> anything beneath. No doors, no railings, no signage, no hatch, nothing that
> reads as a bunker entrance. The whole point is that you would walk past it.
> Quiet, expensive, unmistakably English.

**Aspect: 16:10.** The only image in the set shot above ground — it must feel
ordinary, so the descent has somewhere to travel from.

### 8. `descent-arrival` — daylight

> The view as the space opens out at the foot of the descent. A tall
> double-height underground hall beneath a huge roof light. **The cut edge of
> the ground is visible at the opening — soil strata and roots above
> board-marked concrete — with planting cascading down one wall.** Water running
> in a narrow channel across a limestone floor. Oak and bronze. Volume and
> daylight far below ground level. This is the "I cannot believe that is
> underground" frame; it should be the second most spectacular image after the
> hero.

**Aspect: 16:10.**

---

# PRIORITY 3 — engineering credibility

### 9. `engineering-structure` — deep

> A large residential underground excavation during construction, seen from
> ground level looking down. Sheet-piled and propped retaining walls, a dense
> mat of reinforcement steel across the base slab, timber shuttering to the wall
> kickers, a crane hook descending. Real scale — deep enough that human-sized
> details read as small. Grey British daylight, wet ground, honest construction.
> Serious civil engineering beneath a domestic setting. No people in frame.

**Aspect: 3:2.**

**This is the one image worth sourcing rather than generating.** A real
photograph from a basement contractor's site — or an hour on one with a
camera — will beat anything generated, because authenticity shows most in
construction imagery and least in finished interiors. Ask a groundworks
contractor; most are happy to be credited.

---

## Technical

- Generate at the largest size your tool allows, supply at **2560px wide**
- Save as `public/images/<id>.webp` (or `.jpg`)
- Set `src: '/images/<id>.webp'` on that slot in `src/lib/images.ts`
- `next.config.mjs` handles AVIF conversion and responsive sizing — the hero
  went 325 KB in, 86 KB out

## The balance to protect

Six of the nine below are daylight or warm; three are deep. Added to the two
already in, the finished site lands at **8 daylight/warm against 3 deep**.

That ratio is the whole correction the brief asked for. If a batch comes back
darker than these prompts ask, regenerate rather than accept — a site that
drifts dark stops being luxury architecture and becomes a bunker again.
