'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Event',
      links: [
        { label: 'Schedule', href: '#' },
        { label: 'Speakers', href: '#' },
        { label: 'Venue & Travel', href: '#' },
        { label: 'Previous Events', href: '#' },
      ],
    },
    {
      title: 'Attend',
      links: [
        { label: 'Registration', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Group Discounts', href: '#' },
        { label: 'Call for Papers', href: '#' },
      ],
    },
    {
      title: 'Partnerships',
      links: [
        { label: 'Become a Sponsor', href: '#' },
        { label: 'Sponsor Packages', href: '#' },
        { label: 'Media Kit', href: '#' },
        { label: 'Partner With Us', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Code of Conduct', href: '#' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="w-full bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand & Contact */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">OC</span>
                </div>
                <span className="font-bold text-lg text-foreground">Organize Conf</span>
              </div>
              <p className="text-sm text-foreground/60">
                Connecting leaders and innovators through world-class conferences and networking opportunities.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            {/* Left Side - Contact Info */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground mb-2">Get in Touch</p>
              <div className="space-y-2 text-sm text-foreground/60">
                <a
                  href="mailto:info@organizeconferences.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  info@organizeconferences.com
                </a>
                <a
                  href="tel:+1-555-123-4567"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +1 (555) 123-4567
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Moscone Center, San Francisco, CA 94103</span>
                </div>
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Organize Conferences. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
