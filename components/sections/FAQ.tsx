'use client'

import { faqs } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <HelpCircle size={16} />
            <span className="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-balance">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-foreground/60 text-balance">
            Find answers to the most common questions about our conference.
          </p>
        </div>

        {/* FAQs by Category */}
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.category}
              </h3>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full space-y-2">
                {category.questions.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`${categoryIndex}-${itemIndex}`}
                    className="border border-border/50 rounded-lg px-4 hover:border-primary/50 transition-colors data-[state=open]:border-primary/50"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/60 pt-2">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-foreground/60 mb-4">
            Our support team is here to help. Reach out with any questions about registration, schedule, or logistics.
          </p>
          <a
            href="mailto:support@organizeconferences.com"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  )
}
