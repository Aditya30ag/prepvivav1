import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">PrepViva</h3>
            <p className="text-neutral-400 text-sm">
              AI-powered interview preparation for UK students and NHS professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/medical" className="hover:text-white transition">Medical School</Link></li>
              <li><Link href="/university" className="hover:text-white transition">University</Link></li>
              <li><Link href="/nhs" className="hover:text-white transition">NHS Interviews</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-neutral-400 mb-4">Transform your interview performance today</p>
            <button className="btn-primary w-full">Start Practice — £29</button>
            <p className="text-xs text-neutral-500 mt-4">
              🔒 GDPR compliant · UK data residency
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>© 2025 PrepViva Ltd. All rights reserved. Company No. 12345678. Registered in England & Wales.</p>
        </div>
      </div>
    </footer>
  )
}


