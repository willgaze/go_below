import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Possibilities } from '@/components/Possibilities'
import { Engineering } from '@/components/Engineering'
import { Protection } from '@/components/Protection'
import { Descent } from '@/components/Descent'
import { Process } from '@/components/Process'
import { Enquiry } from '@/components/Enquiry'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

/**
 * The homepage is one argument, in order:
 *   possibility → breadth → credibility → protection → experience → process → enquiry
 * Protection deliberately sits AFTER the lifestyle case, so the site reads as
 * premium construction that can also build a shelter, not a bunker company
 * with a spa attached.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Possibilities />
        <Engineering />
        <Protection />
        <Descent />
        <Process />
        <Enquiry />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
