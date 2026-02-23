'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { previousConferences } from '@/lib/constants'
import { Users, Zap } from 'lucide-react'

export default function PreviousConferences() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              Celebrating Our Success
            </span>
          </h2>
          <p className="text-lg text-foreground/60 text-balance">
            Explore highlights from our previous conferences and see what attendees loved most.
          </p>
        </div>

        {/* Conference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {previousConferences.map((conference, index) => (
            <Card
              key={conference.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={conference.image}
                  alt={conference.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Year Badge */}
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  {conference.year}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground">
                  {conference.name}
                </h3>

                {/* Theme */}
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold">Theme:</span> {conference.theme}
                </p>

                {/* Location */}
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold">Location:</span> {conference.location}
                </p>

                {/* Attendees */}
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Users size={16} className="text-primary" />
                  <span>{conference.attendees.toLocaleString()} Attendees</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                    Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {conference.highlights.map((highlight, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs bg-accent/5 border-accent/20 text-accent hover:bg-accent/10"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-foreground/60 mb-4">
            Want to see more highlights and photos from previous years?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View Previous Editions Archive
            <Zap size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
