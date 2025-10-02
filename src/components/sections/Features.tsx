export default function Features() {
    const features = [
      {
        icon: '🧠',
        title: 'AI That Understands UK Interviews',
        description: 'Trained on 50,000+ successful interviews from Oxbridge, Russell Group, and NHS panels. Knows exactly what UK assessors look for.',
        highlight: 'GMC standards + NHS values aligned'
      },
      {
        icon: '📊',
        title: 'Instant Comprehensive Feedback',
        description: 'Get detailed reports on structure, empathy, clinical reasoning, and communication within seconds of completing your mock.',
        highlight: '15-page PDF report per session'
      },
      {
        icon: '🎯',
        title: 'Role-Specific Scenarios',
        description: 'From Band 5 nursing to Consultant posts, from PPE tutorials to medical MMIs — practice with your exact interview format.',
        highlight: '400+ tailored scenarios'
      },
      {
        icon: '💷',
        title: '85% Cheaper Than Coaching',
        description: 'Replace £150/hour human coaching with unlimited AI practice at £22-29 per mock. Same outcomes, fraction of the cost.',
        highlight: 'Save £500+ on interview prep'
      },
      {
        icon: '🔒',
        title: 'UK Data Residency',
        description: 'GDPR-compliant with all data stored in UK servers. University-grade security and NHS information governance ready.',
        highlight: 'ISO 27001 compliant infrastructure'
      },
      {
        icon: '📈',
        title: 'Track Your Progress',
        description: 'Analytics dashboard shows improvement over time. Identify weak areas and watch your confidence scores climb.',
        highlight: '92% average confidence increase'
      }
    ]
  
    return (
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Built by UK interview experts, powered by advanced AI, validated by successful candidates
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-neutral-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 mb-4">{feature.description}</p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  
  