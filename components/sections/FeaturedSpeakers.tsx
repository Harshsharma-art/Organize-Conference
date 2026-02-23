'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { featuredSpeakers } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function FeaturedSpeakers() {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
      <div className="absolute -top-32 right-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Industry Experts</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Featured Speakers
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 text-balance leading-relaxed">
            Learn directly from industry pioneers, thought leaders, and innovators who are shaping the future of technology and business.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {featuredSpeakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="group h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Card
                className={`overflow-hidden border-2 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 0
                    ? 'border-primary/40 hover:border-primary'
                    : index === 1
                      ? 'border-secondary/40 hover:border-secondary'
                      : index === 2
                        ? 'border-accent/40 hover:border-accent'
                        : 'border-primary/30 hover:border-primary'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 2}
                    className="object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Presentation text on hover */}
                  <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold text-center text-sm md:text-base drop-shadow-lg">
                      {speaker.presentation}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 space-y-3 flex-grow flex flex-col">
                  {/* Name */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-2">
                    {speaker.name}
                  </h3>

                  {/* Title */}
                  <p className={`text-sm font-semibold ${
                    index === 0
                      ? 'text-primary'
                      : index === 1
                        ? 'text-secondary'
                        : index === 2
                          ? 'text-accent'
                          : 'text-primary'
                  }`}>
                    {speaker.title}
                  </p>

                  {/* Company */}
                  <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                    {speaker.company}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-foreground/60 line-clamp-3 flex-grow">
                    {speaker.bio}
                  </p>

                  {/* Learn More Button */}
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="justify-start text-primary hover:text-primary font-semibold mt-2"
                  >
                    <Link href="#">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="#">
              View All Speakers
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
