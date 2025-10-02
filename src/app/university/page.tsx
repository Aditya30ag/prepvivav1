import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { UNIVERSITIES, STATS } from '@/lib/constants'
import { generateMetaTags } from '@/lib/utils'

export const metadata: Metadata = generateMetaTags(
  'University Interview Prep - Oxbridge & Russell Group',
  'Excel in Oxbridge and Russell Group university interviews with AI-powered practice tailored to UK admissions.',
  [
    'Oxbridge interview preparation',
    'Russell Group interview',
    'University admissions UK',
    'Cambridge interview coaching',
    'Oxford PPE interview practice',
  ]
)

export default function UniversityPage() {
  const subjects = {
    stem: [
      'Mathematics & Computer Science',
      'Engineering (all disciplines)',
      'Natural Sciences',
      'Physics & Chemistry',
      'Biological Sciences',
    ],
    humanities: [
      'English Literature',
      'History & Ancient History',
      'Philosophy & Theology',
      'Modern Languages',
      'Classics',
    ],
    social: [
      'PPE (Philosophy, Politics, Economics)',
      'Law',
      'Psychology',
      'Geography',
      'Social & Political Sciences',
    ],
  }

  const oxbridgeFeatures = [
    {
      title: 'Oxford Tutorials',
      points: [
        'Problem-solving approaches',
        'Think aloud under pressure',
        'Intellectual flexibility',
        'Adapt to unexpected questions',
        'Critical analysis of ideas',
        'Evaluate arguments rigorously',
      ],
    },
    {
      title: 'Cambridge Supervisions',
      points: [
        'Show academic curiosity',
        'Demonstrate genuine interest',
        'Analytical reasoning strength',
        'Structure complex arguments',
        'Subject passion & depth',
        'Go beyond the curriculum',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-white">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <Container size="lg">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="primary">Oxbridge & Russell Group Specialist</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Excel in Oxbridge & Russell Group <br />
              <span className="gradient-text">University Interviews</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              From Oxford tutorials to Cambridge supervisions, practice subject-specific scenarios 
              with AI trained on thousands of successful UK admissions interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" data-track="uni_start_practice">
                Start University Interview Practice
              </Button>
              <Button size="lg" variant="secondary" data-track="uni_browse_subjects">
                Browse Subject Areas
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <Card padding="sm" className="text-center">
              <div className="text-2xl font-bold text-primary-600">87%</div>
              <div className="text-sm text-neutral-600">Oxbridge Success Rate</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-2xl font-bold text-accent-purple">All 24</div>
              <div className="text-sm text-neutral-600">Russell Group Unis</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-2xl font-bold text-accent-green">500+</div>
              <div className="text-sm text-neutral-600">Subject Scenarios</div>
            </Card>
            <Card padding="sm" className="text-center">
              <div className="text-2xl font-bold text-primary-600">{STATS.offerRateIncrease}</div>
              <div className="text-sm text-neutral-600">Offer Rate Increase</div>
            </Card>
          </div>

          {/* Russell Group Coverage */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Complete Russell Group Coverage
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...UNIVERSITIES.oxbridge, ...UNIVERSITIES.russellGroup].map((uni) => (
                <Card key={uni} padding="sm" hover className="text-center">
                  <p className="font-semibold text-sm">{uni}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Subject-Specific Preparation */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Subject-Specific Interview Preparation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card padding="md">
                <h3 className="text-xl font-bold mb-4">STEM Subjects</h3>
                <ul className="space-y-2">
                  {subjects.stem.map((subject) => (
                    <li key={subject} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-0.5">•</span>
                      <span className="text-neutral-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card padding="md">
                <h3 className="text-xl font-bold mb-4">Humanities</h3>
                <ul className="space-y-2">
                  {subjects.humanities.map((subject) => (
                    <li key={subject} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-0.5">•</span>
                      <span className="text-neutral-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card padding="md">
                <h3 className="text-xl font-bold mb-4">Social Sciences</h3>
                <ul className="space-y-2">
                  {subjects.social.map((subject) => (
                    <li key={subject} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-0.5">•</span>
                      <span className="text-neutral-700">{subject}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Oxbridge Mastery */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Oxbridge Interview Mastery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {oxbridgeFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  padding="lg"
                  className="bg-gradient-to-br from-primary-50 to-white"
                >
                  <h3 className="text-2xl font-bold mb-6 text-primary-600">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary-600">•</span>
                        <span className="text-neutral-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <Card padding="lg">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Your Path to University Success
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: 1,
                    title: 'Select University',
                    desc: 'Choose your target university and course for tailored practice.',
                  },
                  {
                    step: 2,
                    title: 'Practice Interview',
                    desc: '45-minute mock with subject-specific and motivational questions.',
                  },
                  {
                    step: 3,
                    title: 'Review Feedback',
                    desc: 'Detailed AI analysis of structure, content, and academic potential.',
                  },
                  {
                    step: 4,
                    title: 'Secure Your Place',
                    desc: 'Join thousands accepted to top UK universities with PrepViva.',
                  },
                ].map((s) => (
                  <div key={s.step}>
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                      {s.step}
                    </div>
                    <h3 className="font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-neutral-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Success Story */}
          <Card padding="lg" className="mb-20 bg-gradient-to-r from-primary-50 to-accent-purple/10">
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <p className="text-xl italic mb-6 max-w-3xl mx-auto">
                "PrepViva's Oxford PPE scenarios were identical to my actual interview. 
                The AI helped me structure my arguments and think more critically. 
                Got offers from both Oxford and LSE!"
              </p>
              <p className="font-bold">Alexander Mitchell</p>
              <p className="text-sm text-neutral-600">Offer Holder – Oxford PPE & LSE</p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center bg-primary-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure Your University Offer?
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              Join the next generation of Oxbridge and Russell Group students. Practice today, succeed tomorrow.
            </p>
            <Button size="lg" variant="light">
              Start Practice — £29 per mock
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
