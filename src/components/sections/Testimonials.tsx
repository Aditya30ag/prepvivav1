export default function Testimonials() {
    const testimonials = [
      {
        name: 'Sarah Chen',
        role: 'Oxford Medicine Offer Holder',
        image: '👩‍⚕️',
        quote: "The MMI scenarios were identical to my actual Oxford interview. PrepViva's feedback on empathy and clinical reasoning gave me the confidence I needed.",
        rating: 5
      },
      {
        name: 'Dr James Thompson',
        role: 'NHS Band 7 Specialist',
        image: '👨‍⚕️',
        quote: "After three failed interviews, PrepViva helped me understand NHS values-based questions. Secured my dream role at Guy's and St Thomas'.",
        rating: 5
      },
      {
        name: 'Priya Patel',
        role: 'Cambridge Natural Sciences',
        image: '👩‍🔬',
        quote: "The supervision-style questions were spot on. Practice with PrepViva meant I wasn't surprised by anything in my actual interview.",
        rating: 5
      }
    ]
  
    return (
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Students. Real <span className="gradient-text">Success</span>.
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join thousands who've transformed their interview performance
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  