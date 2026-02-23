'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { pricingTiers } from '@/lib/constants'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'

export default function EarlyBirdOffer() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
            <Zap size={16} />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              Early Bird Pricing
            </span>
          </h2>
          <p className="text-lg text-foreground/60 text-balance">
            Save up to 50% when you register before May 15th. Choose the perfect ticket tier for your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
                tier.popular
                  ? 'border-primary md:scale-105 md:z-10'
                  : 'border-border/50 hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-6 md:p-8 space-y-6">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-foreground">
                  {tier.name}
                </h3>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      ${tier.earlyBirdPrice}
                    </span>
                    {tier.regularPrice > 0 && (
                      <span className="text-sm text-foreground/60 line-through">
                        ${tier.regularPrice}
                      </span>
                    )}
                  </div>
                  {tier.regularPrice > 0 && tier.earlyBirdPrice > 0 && (
                    <p className="text-sm text-accent font-semibold">
                      Save ${tier.regularPrice - tier.earlyBirdPrice}
                    </p>
                  )}
                  {tier.regularPrice === 0 && (
                    <p className="text-sm text-accent font-semibold">
                      Complimentary
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full font-semibold ${
                    tier.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-primary/20 hover:bg-primary/30 text-primary'
                  }`}
                >
                  <Link href="#register">
                    {tier.regularPrice === 0 ? 'Apply as Speaker' : 'Register Now'}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Group Discount Info */}
        <div className="max-w-2xl mx-auto bg-muted/50 border border-border/50 rounded-lg p-6 md:p-8 text-center">
          <h4 className="font-semibold text-foreground mb-2">
            Group Discounts Available
          </h4>
          <p className="text-foreground/60 mb-4">
            Register 5 or more attendees and get an additional 15% discount on any ticket tier.
          </p>
          <a
            href="mailto:sales@organizeconferences.com"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact Sales Team →
          </a>
        </div>
      </div>
    </section>
  )
}
