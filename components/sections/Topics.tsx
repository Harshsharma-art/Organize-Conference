'use client'

import { conferenceTopics } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import * as LucideIcons from 'lucide-react'

export default function Topics() {
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as React.ComponentType<{
      size: number
      className: string
    }>
    return Icon
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              Conference Tracks
            </span>
          </h2>
          <p className="text-lg text-foreground/60 text-balance">
            Explore our diverse range of topics and choose sessions that matter most to you.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {conferenceTopics.map((topic) => {
            const Icon = getIcon(topic.icon)
            return (
              <Card
                key={topic.id}
                className="p-6 md:p-8 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {topic.name}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed">
                  {topic.description}
                </p>

                {/* Hover effect line */}
                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-primary transition-all duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-foreground/60">
            See the full schedule with parallel sessions
          </p>
        </div>
      </div>
    </section>
  )
}
