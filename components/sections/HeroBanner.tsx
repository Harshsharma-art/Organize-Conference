'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { upcomingEvent } from '@/lib/constants'
import { Calendar, MapPin, Zap } from 'lucide-react'

export default function HeroBanner() {
  const formattedDate = upcomingEvent.date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <section className="relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/conference-hero.jpg"
          alt="Conference background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Animated Badge */}
          <div className="inline-block group">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-md text-white font-bold text-sm border-2 border-white/20 shadow-2xl group-hover:shadow-3xl transform group-hover:scale-110 transition-all duration-300">
              <Zap size={16} className="animate-pulse" />
              June 15-17, 2025 - Limited Spots Available
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-6xl md:text-8xl font-black leading-tight text-white drop-shadow-2xl">
            <span className="text-balance">
              {upcomingEvent.name}
            </span>
          </h1>

          {/* Animated Tagline */}
          <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-balance bg-gradient-to-r from-primary/90 to-accent/90 bg-clip-text">
            {upcomingEvent.tagline}
          </p>

          {/* Event Info with Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white font-semibold">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Calendar size={24} className="text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin size={24} className="text-secondary" />
              <span>{upcomingEvent.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-balance font-medium drop-shadow-lg">
            {upcomingEvent.description}
          </p>

          {/* CTA Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20"
            >
              <Link href={upcomingEvent.registrationURL}>
                Register Now
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-7 text-lg font-bold border-3 border-white text-white hover:bg-white/10 bg-white/5 backdrop-blur-md rounded-full hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="#event-details">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-4 pt-16 border-t-2 border-white/20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transform hover:scale-110 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50+</p>
              <p className="text-sm md:text-base text-white/80 font-semibold mt-2">Expert Speakers</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transform hover:scale-110 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">100+</p>
              <p className="text-sm md:text-base text-white/80 font-semibold mt-2">Sessions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transform hover:scale-110 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">5K+</p>
              <p className="text-sm md:text-base text-white/80 font-semibold mt-2">Attendees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
