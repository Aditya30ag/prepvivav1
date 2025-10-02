import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { PRICING, STATS } from '@/lib/constants'
import { generateMetaTags, formatCurrency } from '@/lib/utils'

export const metadata: Metadata = generateMetaTags(
  'Pricing - Affordable UK Interview Preparation',
  'Pay per mock interview from £22. No subscriptions. 85% cheaper than human coaching.',
  ['Interview prep pricing UK', 'Affordable mock interviews', 'Student interview coaching cost']
)

export default function PricingPage() {
  const comparisonData = [
    { feature: 'Cost per session', prepviva: 'From £22', human: '£150-200' },
    { feature: 'Availability', prepviva: '24/7 instant access', human: 'Limited slots' },
    { feature: 'Feedback speed', prepviva: 'Instant detailed report', human: '24-48 hours' },
    { feature: 'Retakes', prepviva: 'Unlimited', human: 'Pay per session' },
    { feature: 'Question bank', prepviva: '500+ scenarios', human: 'Varies by coach' },
    { feature: 'UK standards aligned', prepviva: '✓ GMC, NHS, UCAS', human: 'Depends on coach' },
  ]

  const faqs = [
  {
    q: 'Why is PrepViva so much cheaper than human coaching?',
    a: 'AI technology allows us to deliver the same structured practice at scale. We eliminate scheduling, travel, and hourly billing — passing savings directly to you.',
  },
  {
    q: "Can I get a refund if I'm not satisfied?",
    a: "Yes, we offer a full refund within 7 days if you're not satisfied with your first mock interview. For bundle purchases, we offer pro-rated refunds.",
  },
  {
    q: 'Do prices include VAT?',
    a: 'Yes, all prices shown include VAT. No hidden fees or surprises at checkout.',
  },
  {
    q: 'Are there discounts for students on benefits?',
    a: 'Yes, we offer 30% discount for students receiving means-tested benefits. Email hello@prepviva.co.uk with proof of eligibility.',
  },
  {
    q: 'Can I share my account with friends?',
    a: 'Each account is personal to ensure accurate progress tracking. We offer group discounts for 3+ students booking together.',
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/10 to-white">
      {/* Hero */}
      <section className="py-20 relative">
        <Container size="lg">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="success">Save 85% vs Human Coaching</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              No subscriptions, no hidden fees. Pay per mock interview or save with bundles.
              Every purchase includes unlimited retakes and instant AI feedback.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {/* Single Mock */}
            <Card hover className="relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Single Mock</h3>
                <p className="text-neutral-600 mb-4">Try our platform risk-free</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{formatCurrency(PRICING.single.price)}</span>
                  <span className="text-neutral-500 block text-sm mt-1">per mock interview</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Full 45-minute interview</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>AI feedback report</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Unlimited retakes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <Button fullWidth size="lg" data-track="pricing_single">
                  Purchase Single Mock
                </Button>
              </div>
            </Card>

            {/* 3-Pack */}
            <Card className="relative scale-105 border-2 border-primary-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="success">Most Popular</Badge>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">3-Mock Pack</h3>
                <p className="text-neutral-600 mb-4">Comprehensive preparation</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-primary-600">{formatCurrency(PRICING.triple.price)}</span>
                  <span className="text-neutral-500 block text-sm mt-1">£{PRICING.triple.perMock} per mock</span>
                </div>
                <Badge variant="success" size="sm">Save {formatCurrency(PRICING.triple.savings)}</Badge>
                <ul className="text-left space-y-3 mb-8 mt-6">
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>3 full mock interviews</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Detailed AI feedback</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span className="font-semibold">Certificate of completion</span>
                  </li>
                </ul>
                <Button fullWidth size="lg" variant="primary" data-track="pricing_triple">
                  Purchase 3-Pack
                </Button>
              </div>
            </Card>

            {/* 10-Pack */}
            <Card hover>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">10-Mock Pack</h3>
                <p className="text-neutral-600 mb-4">Complete interview mastery</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{formatCurrency(PRICING.ten.price)}</span>
                  <span className="text-neutral-500 block text-sm mt-1">£{PRICING.ten.perMock} per mock</span>
                </div>
                <Badge variant="success" size="sm">Save {formatCurrency(PRICING.ten.savings)}</Badge>
                <ul className="text-left space-y-3 mb-8 mt-6">
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>10 full mock interviews</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Comprehensive analytics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>All scenario types</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>Personal success coach</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span className="font-semibold">Money-back guarantee</span>
                  </li>
                </ul>
                <Button fullWidth size="lg" data-track="pricing_ten">
                  Purchase 10-Pack
                </Button>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              PrepViva vs Traditional Coaching
            </h2>
            <Card padding="lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-4 px-4">Feature</th>
                      <th className="text-center py-4 px-4">
                        <div className="font-bold text-primary-600">PrepViva AI</div>
                      </th>
                      <th className="text-center py-4 px-4">
                        <div className="font-bold text-neutral-600">Human Coaching</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className="border-b border-neutral-100">
                        <td className="py-4 px-4 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-accent-green font-semibold">{row.prepviva}</span>
                        </td>
                        <td className="py-4 px-4 text-center text-neutral-600">{row.human}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-4 bg-accent-green/10 rounded-lg">
                <p className="text-center text-accent-green font-semibold">
                  Average saving per candidate: {formatCurrency(500)} | ROI: 10x your investment
                </p>
              </div>
            </Card>
          </div>

          {/* Institution Pricing */}
          <div className="mb-20 text-center">
            <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-white">
              <h2 className="text-3xl font-bold mb-4">Institution & Cohort Pricing</h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Universities and NHS Trusts can deploy PrepViva across entire cohorts with 
                volume discounts, analytics dashboards, and LMS integration.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl mb-2">🏫</div>
                  <h3 className="font-bold mb-2">University Package</h3>
                  <p className="text-neutral-600 text-sm">From £500/cohort</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🏥</div>
                  <h3 className="font-bold mb-2">NHS Trust Package</h3>
                  <p className="text-neutral-600 text-sm">From £1,000/department</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎓</div>
                  <h3 className="font-bold mb-2">School Package</h3>
                  <p className="text-neutral-600 text-sm">From £300/year group</p>
                </div>
              </div>
              <Button size="lg" variant="primary" data-track="pricing_institution">
                Request Institution Quote
              </Button>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} padding="md">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card padding="lg" className="text-center mb-20">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-xl italic mb-4 text-neutral-700">
              "I spent £450 on three human coaching sessions last year and failed. 
              This year I used PrepViva's 10-pack for £220 and got offers from Oxford and Cambridge. 
              The AI feedback was more detailed than any human coach I'd used."
            </p>
            <p className="font-bold">Emily Richardson</p>
            <p className="text-sm text-neutral-600">Medicine Offer Holder, Oxford & Cambridge</p>
          </Card>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Interview Journey
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Join {STATS.studentsHelped} students succeeding with PrepViva
            </p>
            <Button size="lg" variant="primary" data-track="pricing_bottom_cta">
              Begin Practice — From £22
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

