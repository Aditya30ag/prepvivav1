import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { NHS_VALUES, STATS } from '@/lib/constants'
import { generateMetaTags } from '@/lib/utils'

export const metadata: Metadata = generateMetaTags(
  'NHS Interview Preparation - Values-Based Practice',
  'Master NHS interviews from Band 5 to Consultant. Practice with scenarios aligned to NHS values and KSF dimensions.',
  ['NHS interview questions', 'NHS values-based interview', 'Band 5 NHS interview', 'NHS recruitment preparation']
)

export default function NHSPage() {
  const bands = [
    { level: 'Band 5', roles: 'Newly Qualified Nurses, Junior Therapists', scenarios: 45 },
    { level: 'Band 6', roles: 'Senior Nurses, Specialist Practitioners', scenarios: 52 },
    { level: 'Band 7', roles: 'Team Leaders, Advanced Practitioners', scenarios: 48 },
    { level: 'Band 8a-b', roles: 'Service Managers, Consultants', scenarios: 38 },
    { level: 'Band 8c-9', roles: 'Directors, Executive Roles', scenarios: 31 },
    { level: 'Medical', roles: 'FY1-Consultant Posts', scenarios: 67 },
  ]

  const sampleQuestions = [
    'Tell me about a time you demonstrated compassion under pressure.',
    'How would you handle a colleague not following infection control protocols?',
    'Describe a situation where you had to advocate for a patient against system constraints.',
    'Give an example of leading quality improvement in your practice.',
    'How do you balance competing priorities in a resource-limited environment?',
  ]

 const trusts = [
  "Guy's and St Thomas'",
  "Imperial College Healthcare",
  "Oxford University Hospitals",
  "Cambridge University Hospitals",
  "Manchester University",
  "Leeds Teaching Hospitals",
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent-green/5 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <Container size="lg">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="success">400+ NHS Interview Scenarios</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Ace Your NHS Interview<br />
              with <span className="gradient-text">Values-Based Practice</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              From Band 5 nursing to Consultant posts. Practice with scenarios aligned to NHS 
              values, KSF dimensions, and leadership competencies. Built with NHS professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" data-track="nhs_start_practice">
                Start NHS Practice — £29
              </Button>
              <Button size="lg" variant="secondary" data-track="nhs_explore_values">
                Explore NHS Values
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <div className="flex items-center gap-2">
              <span className="text-accent-green text-xl">✓</span>
              <span className="text-sm font-medium">NHS Values Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-green text-xl">✓</span>
              <span className="text-sm font-medium">KSF Dimensions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-green text-xl">✓</span>
              <span className="text-sm font-medium">GMC Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-green text-xl">✓</span>
              <span className="text-sm font-medium">CQC Framework</span>
            </div>
          </div>

          {/* NHS Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">
              Master the 6 NHS Values in Every Response
            </h2>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
              Our AI evaluates your responses against all six NHS values, providing specific 
              feedback on how to demonstrate each value authentically.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {NHS_VALUES.map((value) => (
                <Card key={value.name} hover padding="md">
                  <h3 className="text-xl font-bold mb-2 text-accent-green">{value.name}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Band-Specific Scenarios */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Role-Specific Interview Preparation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bands.map((band) => (
                <Card key={band.level} hover padding="md">
                  <Badge variant="primary" size="md">{band.level}</Badge>
                  <h3 className="font-bold mt-3 mb-2">{band.roles}</h3>
                  <p className="text-sm text-neutral-600">
                    {band.scenarios} tailored scenarios covering clinical, leadership, 
                    and values-based questions
                  </p>
                  <Button size="sm" variant="ghost" className="mt-4">
                    View {band.level} Scenarios →
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Sample Questions */}
          <div className="mb-20">
            <Card padding="lg" className="bg-gradient-to-br from-accent-green/5 to-white">
              <h2 className="text-2xl font-bold mb-6">Sample NHS Interview Questions</h2>
              <div className="space-y-4">
                {sampleQuestions.map((question, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-accent-green font-bold">{idx + 1}.</span>
                    <p className="text-neutral-700">{question}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral-600">
                PrepViva provides structured frameworks for answering each question type, 
                with instant AI feedback on your responses.
              </p>
            </Card>
          </div>

          {/* Trust Partnerships */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Leading NHS Trusts
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {trusts.map((trust) => (
                <div key={trust} className="text-neutral-400 font-semibold">
                  {trust}
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-neutral-600">
              + {STATS.nhsTrusts} NHS Trusts using PrepViva for recruitment preparation
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              How NHS Interview Practice Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Select Your Band</h3>
                <p className="text-sm text-neutral-600">
                  Choose your target role from Band 5 to Consultant
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Practice Scenarios</h3>
                <p className="text-sm text-neutral-600">
                  45-minute mock with values-based questions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Get AI Feedback</h3>
                <p className="text-sm text-neutral-600">
                  Instant report on NHS values demonstration
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Secure Your Role</h3>
                <p className="text-sm text-neutral-600">
                  Join thousands succeeding in NHS interviews
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <Card padding="lg" className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">👩‍⚕️</div>
                <p className="text-lg italic mb-4">
                  "After two unsuccessful Band 7 interviews, PrepViva helped me understand how to 
                  properly evidence NHS values. The AI feedback on my leadership examples was 
                  game-changing. Started my new role at UCLH last month!"
                </p>
                <p className="font-bold">Rachel Thompson</p>
                <p className="text-sm text-neutral-600">Band 7 Advanced Nurse Practitioner</p>
              </div>
              <div className="bg-accent-green/10 rounded-lg p-6">
                <h3 className="font-bold mb-4">Rachel's Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Values demonstration:</span>
                    <span className="font-bold text-accent-green">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leadership competencies:</span>
                    <span className="font-bold text-accent-green">91%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clinical scenarios:</span>
                    <span className="font-bold text-accent-green">96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overall confidence:</span>
                    <span className="font-bold text-accent-green">+85%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-accent-green rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Ace Your NHS Interview?
            </h2>
            <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
              Join thousands of NHS professionals who've secured their dream roles with PrepViva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-accent-green hover:bg-green-50"
                data-track="nhs_bottom_cta"
              >
                Start NHS Practice — £29
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white border-white hover:bg-white/10"
                data-track="nhs_institution"
              >
                NHS Trust Packages
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

