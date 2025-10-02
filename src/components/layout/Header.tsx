'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">PrepViva</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/medical" className="text-neutral-600 hover:text-primary-600 transition">Medical</Link>
            <Link href="/nhs" className="text-neutral-600 hover:text-primary-600 transition">NHS</Link>
            <Link href="/university" className="text-neutral-600 hover:text-primary-600 transition">University</Link>
            <Link href="/pricing" className="text-neutral-600 hover:text-primary-600 transition">Pricing</Link>
            <Link href="/about" className="text-neutral-600 hover:text-primary-600 transition">About</Link>
            <button className="btn-primary">Start Practice</button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/medical" className="block px-3 py-2 text-neutral-600">Medical</Link>
            <Link href="/nhs" className="block px-3 py-2 text-neutral-600">NHS</Link>
            <Link href="/university" className="block px-3 py-2 text-neutral-600">University</Link>
            <Link href="/pricing" className="block px-3 py-2 text-neutral-600">Pricing</Link>
            <Link href="/about" className="block px-3 py-2 text-neutral-600">About</Link>
            <button className="w-full btn-primary mt-4">Start Practice</button>
          </div>
        </div>
      )}
    </header>
  )
}


