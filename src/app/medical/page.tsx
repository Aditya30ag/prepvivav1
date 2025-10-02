import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical School Interview Prep – UK MMI & Panel Practice | PrepViva',
  description:
    'PrepViva helps you master UK medical school interviews with AI-powered practice. Covering MMIs, ethical scenarios, Oxbridge panels, and real-world NHS-style questions with instant feedback.',
  keywords: [
    'UK Medical School Interview Prep',
    'MMI Practice UK',
    'Oxbridge Medicine Interview Questions',
    'Medical Ethics Scenarios',
    'PrepViva Medical Interview Practice',
  ],
  openGraph: {
    title: 'Medical School Interview Prep – UK MMI & Panel Practice | PrepViva',
    description:
      'AI-powered preparation for UK medical school interviews. Practice MMIs, panel interviews, and ethical scenarios reviewed by UK-trained doctors.',
    images: ['/images/og-default.png'],
  },
}

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50/10">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
              Built with UK Doctors & Admissions Experts
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="gradient-text">UK Medical School Interviews</span> with AI-Powered Practice
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              From Oxbridge MMIs to NHS panel interviews. Practice with 500+ scenarios reviewed by UK-trained doctors. 
              Get instant AI feedback on ethics, empathy, and clinical reasoning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 rounded-lg">
                Start Medical Practice – £29 per mock
              </button>
              <button className="btn-secondary text-lg px-8 py-4 rounded-lg">
                View Sample Questions
              </button>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              No subscription. Pay per mock. Instant feedback.
            </div>
          </div>

          {/* Medical Schools Grid */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive UK Medical School Coverage
            </h2>
            <p className="text-center max-w-2xl mx-auto text-neutral-600 mb-10">
              Our question bank mirrors real interviews at top UK medical schools. Choose your target school or practice mixed scenarios.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Oxford Medicine', desc: 'Tutorial-style scenarios' },
                { name: 'Cambridge Medicine', desc: 'Critical reasoning focus' },
                { name: 'Imperial College', desc: 'Clinical & ethical scenarios' },
                { name: 'UCL Medical School', desc: 'Panel + MMI mix' },
                { name: "King's College London", desc: 'Communication focus' },
                { name: 'Edinburgh Medicine', desc: 'Values-based selection' },
                { name: 'Manchester Medicine', desc: 'Full MMI stations' },
                { name: 'Bristol Medicine', desc: 'Role-play and ethics' },
              ].map((school) => (
                <div
                  key={school.name}
                  className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="font-bold mb-2">{school.name}</h3>
                  <p className="text-sm text-neutral-500">{school.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MMI Station Types */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              All Major MMI Station Types Covered
            </h2>
            <p className="text-center max-w-2xl mx-auto text-neutral-600 mb-10">
              Practice the exact station types you’ll face on interview day. Structured feedback for every scenario.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-3">Ethical Scenarios</h3>
                <p className="text-neutral-600 mb-4">
                  Navigate complex medical ethics with clear frameworks.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Consent & capacity</li>
                  <li>• Resource allocation</li>
                  <li>• End-of-life decisions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">🗣️</div>
                <h3 className="text-xl font-bold mb-3">Role-Play Stations</h3>
                <p className="text-neutral-600 mb-4">
                  Demonstrate empathy and communication skills.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Breaking bad news</li>
                  <li>• Angry relatives</li>
                  <li>• Team conflicts</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Data & Calculation</h3>
                <p className="text-neutral-600 mb-4">
                  Interpret clinical data and research findings.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Drug calculations</li>
                  <li>• Research analysis</li>
                  <li>• Clinical audits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials Preview */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Aspiring Doctors Across the UK
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Amira – UCL Offer',
                  quote:
                    'PrepViva made my MMI practice so real. The feedback on ethical stations was more detailed than any tutor I hired.',
                },
                {
                  name: 'James – Oxford Medicine',
                  quote:
                    'The AI kept probing until I explained my reasoning clearly. That prepared me perfectly for the real tutorial interview.',
                },
                {
                  name: 'Sofia – Manchester Medicine',
                  quote:
                    'Being able to upload my personal statement and get tailored questions was a game-changer.',
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-neutral-600 italic mb-4">“{testimonial.quote}”</p>
                  <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center bg-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure Your Medical School Place?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands who’ve succeeded with PrepViva. Practice anytime, anywhere with instant feedback.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition">
              Start Practice – £29 per mock
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


