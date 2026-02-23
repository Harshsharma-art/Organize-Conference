import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/sections/HeroBanner'
import CountdownTimer from '@/components/sections/CountdownTimer'
import PreviousConferences from '@/components/sections/PreviousConferences'
import Topics from '@/components/sections/Topics'
import FeaturedSpeakers from '@/components/sections/FeaturedSpeakers'
import Sponsors from '@/components/sections/Sponsors'
import EarlyBirdOffer from '@/components/sections/EarlyBirdOffer'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <CountdownTimer />
        <PreviousConferences />
        <Topics />
        <FeaturedSpeakers />
        <Sponsors />
        <EarlyBirdOffer />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
