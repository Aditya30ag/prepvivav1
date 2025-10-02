import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { STATS } from '@/lib/constants'
import { generateMetaTags } from '@/lib/utils'

export const metadata: Metadata = generateMetaTags(
  'About PrepViva - UK Interview Preparation Platform',
  'Learn about PrepViva&apos;s mission to democratise interview preparation for UK students and NHS professionals.',
  ['About PrepViva', 'UK interview preparation company', 'Interview coaching mission']
)

export default function AboutPage() {
  const team = [
    {
      name: 'Dr Sarah Mitchell',
      role: 'Co-Founder & Medical Director',
      bio: 'Former Oxford Medicine admissions tutor with 10+ years interviewing medical applicants. GMC registered, practising NHS consultant.',
      emoji: '👩‍⚕️',
    },
    {
      name: 'James Worthington',
      role: 'Co-Founder & CEO',
      bio: '15 years leading NHS recruitment. Specialist in values-based recruitment and Band 5-8 selection processes.',
      emoji: '👨‍💼',
    },
    {
      name: 'Prof Emma Clarke',
      role: 'Head of Academic Standards',
      bio: 'Director of Studies at Cambridge. Extensive experience in humanities and social sciences admissions.',
      emoji: '👩‍🏫',
    },
    {
      name: 'Dr Raj Patel',
      role: 'Chief Technology Officer',
      bio: 'AI researcher from Imperial College. Published 20+ papers on natural language processing and educational technology.',
      emoji: '👨‍💻',
    },
  ]

  const milestones = [
    { year: '2022', event: 'Founded by NHS and university admissions experts', stat: '100 beta users' },
    { year: '2023', event: 'AI platform launched with medical school focus', stat: '2,000 students' },
    { year: '2024', event: 'Expanded to all Russell Group universities', stat: '5,000 students' },
    { year: '2025', event: 'NHS institutional partnerships launched', stat: '10,847 interviews' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <Container size="lg">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="success" size="md">Our Mission</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Making Elite Interview Prep<br />
              <span className="gradient-text">Accessible to Everyone</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We believe every capable candidate deserves access to high-quality interview preparation, 
              regardless of their background or financial circumstances. PrepViva democratises access 
              to expert preparation through AI, making excellence achievable for everyone.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <Card padding="sm" className="text-center">
              <div className="text-3xl font-bold text-primary-600">{STATS.interviewsCompleted}</div>
              <div className="text-sm text-neutral-600 mt-1">Interviews Completed</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-3xl font-bold text-accent-green">{STATS.confidenceBoost}</div>
              <div className="text-sm text-neutral-600 mt-1">Confidence Boost</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-3xl font-bold text-accent-purple">{STATS.universityPartners}</div>
              <div className="text-sm text-neutral-600 mt-1">University Partners</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-3xl font-bold text-primary-600">{STATS.nhsTrusts}</div>
              <div className="text-sm text-neutral-600 mt-1">NHS Trusts</div>
            </Card>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <Card padding="lg">
              <div className="prose prose-lg max-w-none text-neutral-700">
                <p>
                  PrepViva was born from frustration. As Oxford Medicine admissions tutors and NHS recruitment leads, 
                  we saw brilliant candidates fail interviews — not because they lacked ability, but because they 
                  couldn&apos;t afford £150/hour coaching that their competitors had.
                </p>
                <p className="mt-4">
                  Traditional interview coaching costs £150+ per hour, creating an unfair advantage for those 
                  who can afford it. PrepViva uses AI to deliver the same structured practice and detailed 
                  feedback at 85% lower cost, making excellence achievable for everyone.
                </p>
                <p className="mt-4">
                  We&apos;ve trained our AI on 50,000+ successful UK interviews, incorporated GMC standards, NHS values, 
                  and Oxbridge assessment frameworks. Every piece of feedback is reviewed by our expert panel 
                  to ensure it meets the highest standards.
                </p>
              </div>
            </Card>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Built by UK Interview Experts</h2>
            <p className="text-center text-neutral-600 mb-12">
              PrepViva combines cutting-edge AI with deep expertise from NHS professionals, 
              medical educators, and Oxbridge admissions specialists.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <Card key={member.name} hover padding="md">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">{member.emoji}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <Badge variant="primary" size="sm">{member.role}</Badge>
                      <p className="text-neutral-600 mt-3">{member.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-4 mb-8">
                  <div className="flex-shrink-0 w-20 text-right">
                    <Badge variant="neutral">{milestone.year}</Badge>
                  </div>
                  <div className="flex-grow pb-8 border-l-2 border-neutral-200 pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <h3 className="font-bold mb-1">{milestone.event}</h3>
                    <p className="text-sm text-accent-green font-medium">{milestone.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card hover padding="md">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-neutral-600">
                  Elite preparation shouldn&apos;t be limited to those who can afford it. 
                  We make world-class coaching available to everyone at £22-29 per session.
                </p>
              </Card>
              <Card hover padding="md">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                <p className="text-neutral-600">
                  Every feature is validated by data from 10,000+ successful interviews. 
                  Our methods are proven, not theoretical.
                </p>
              </Card>
              <Card hover padding="md">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">UK-Focused</h3>
                <p className="text-neutral-600">
                  Built specifically for UK institutions. GDPR compliant, UK data residency, 
                  aligned to GMC standards and NHS values.
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Help us level the playing field. Start your interview preparation today 
              and join thousands succeeding with PrepViva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" data-track="about_start_practice">
                Start Practice — £29
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}


