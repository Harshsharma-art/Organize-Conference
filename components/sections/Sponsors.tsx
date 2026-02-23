'use client'

import Image from 'next/image'
import { sponsors } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Handshake, Star } from 'lucide-react'

export default function Sponsors() {
  const SponsorTier = ({
    title,
    sponsorList,
    tierColor,
  }: {
    title: string
    sponsorList: typeof sponsors.platinum
    tierColor: string
  }) => (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-3">
        <Star className={tierColor} size={24} fill="currentColor" />
        <h3 className={`text-2xl md:text-3xl font-bold text-center ${tierColor}`}>
          {title} Partners
        </h3>
        <Star className={tierColor} size={24} fill="currentColor" />
      </div>
      <div className={`grid gap-8 ${
        title === 'Platinum'
          ? 'grid-cols-1 md:grid-cols-2'
          : title === 'Gold'
            ? 'grid-cols-1 md:grid-cols-3'
            : 'grid-cols-2 md:grid-cols-4'
      }`}>
        {sponsorList.map((sponsor) => (
          <a
            key={sponsor.id}
            href="#"
            className={`group relative h-32 md:h-40 rounded-2xl border-2 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 ${
              title === 'Platinum'
                ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40 hover:border-primary'
                : title === 'Gold'
                  ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/40 hover:border-secondary'
                  : 'bg-gradient-to-br from-accent/20 to-accent/5 border-accent/40 hover:border-accent'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-500`} />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold text-center">{sponsor.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Handshake className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Strategic Partners</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Our Amazing Partners
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 text-balance leading-relaxed">
            Proudly supported by industry leaders who share our vision of innovation and excellence. Together, we create extraordinary experiences.
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 mb-16 md:mb-24">
          <SponsorTier title="Platinum" sponsorList={sponsors.platinum} tierColor="text-primary" />
          <SponsorTier title="Gold" sponsorList={sponsors.gold} tierColor="text-secondary" />
          <SponsorTier title="Silver" sponsorList={sponsors.silver} tierColor="text-accent" />
        </div>

        {/* Sponsorship CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl border-2 border-gradient overflow-hidden shadow-2xl">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center gap-3">
                <Handshake className="text-primary" size={40} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  Join Our Partner Network
                </h3>
                <p className="text-foreground/70 text-lg">
                  Connect with industry leaders and expand your brand presence. We offer customized sponsorship packages for companies of all sizes.
                </p>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="mailto:sponsors@organizeconferences.com">
                  Become a Sponsor Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
