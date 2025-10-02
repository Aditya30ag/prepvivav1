import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact PrepViva – Support & Partnerships',
  description:
    'Get in touch with PrepViva for student support, institutional partnerships, or media enquiries. Fully GDPR-compliant with UK-based support.',
  keywords: [
    'PrepViva contact',
    'University interview support UK',
    'NHS interview preparation contact',
    'Oxbridge admissions help',
    'PrepViva partnerships',
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-white">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <Container size="lg">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="primary">We’re Here to Help</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Contact <span className="gradient-text">PrepViva</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Whether you’re a student, a university, or an NHS trust, our team is ready to support you. 
              We respond within 24 hours and ensure your data is fully protected under GDPR.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <Card padding="lg" hover>
              <h2 className="text-2xl font-bold mb-4">For Students & Applicants</h2>
              <p className="text-neutral-600 mb-6">
                Need help with your PrepViva account, reports, or interview practice? 
                Our student support team is here for you.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6">
                <li>• Technical support & troubleshooting</li>
                <li>• Questions about reports & feedback</li>
                <li>• Payment & access queries</li>
              </ul>
              <Button size="lg" variant="primary">Email Student Support</Button>
            </Card>

            <Card padding="lg" hover>
              <h2 className="text-2xl font-bold mb-4">For Universities & NHS Trusts</h2>
              <p className="text-neutral-600 mb-6">
                Explore PrepViva’s institutional solutions for entire cohorts. 
                Our partnerships team works with admissions offices and NHS recruiters.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6">
                <li>• Institutional licensing</li>
                <li>• Bulk interview practice access</li>
                <li>• Analytics & reporting dashboards</li>
              </ul>
              <Button size="lg" variant="secondary">Request a Pilot Programme</Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card padding="lg" className="mb-20">
            <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="jane.doe@email.com"
                  required
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-2">Purpose</label>
                <select
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="student">Student Support</option>
                  <option value="institution">University / NHS Partnership</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="border border-neutral-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <Button size="lg" variant="primary" type="submit">
                  Submit Message
                </Button>
              </div>
            </form>
          </Card>

          {/* Alternate Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
            <Card padding="md">
              <h3 className="font-semibold mb-2">Official Email</h3>
              <p className="text-neutral-600">support@prepviva.com</p>
            </Card>
            <Card padding="md">
              <h3 className="font-semibold mb-2">Support Hours</h3>
              <p className="text-neutral-600">Mon–Fri, 9am–6pm (UK Time)</p>
            </Card>
            <Card padding="md">
              <h3 className="font-semibold mb-2">Data Protection</h3>
              <p className="text-neutral-600">GDPR & UK Data Protection Compliant</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
            <p className="text-lg mb-8 text-primary-100">
              Whether you need student support or want to scale PrepViva across your institution, we’re ready to help.
            </p>
            <Button size="lg" variant="secondary">Start the Conversation</Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

