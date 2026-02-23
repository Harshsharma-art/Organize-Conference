'use client'

import { useState, useEffect } from 'react'
import { upcomingEvent } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Clock } from 'lucide-react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(upcomingEvent.date).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 md:p-4 min-w-16 md:min-w-20">
        <p className="text-2xl md:text-4xl font-bold text-primary">
          {String(value).padStart(2, '0')}
        </p>
      </div>
      <p className="text-xs md:text-sm font-medium text-foreground/60 mt-2 uppercase tracking-wider">{label}</p>
    </div>
  )

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Countdown */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Clock size={16} />
              <span>Event Countdown</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-balance">
                Get Ready for Our Next Big Event
              </span>
            </h2>

            <p className="text-foreground/60 text-lg">
              Join us in just {timeLeft.days} days for three days of inspiring talks, workshops, and networking opportunities with industry leaders.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="#register">
                Secure Your Seat
              </Link>
            </Button>
          </div>

          {/* Right side - Timer */}
          <div className="flex justify-center md:justify-end">
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
