export default function TrustStrip() {
    const logos = [
      { name: 'Oxford', display: 'OXFORD' },
      { name: 'Cambridge', display: 'CAMBRIDGE' },
      { name: 'NHS', display: 'NHS' },
      { name: 'Imperial', display: 'IMPERIAL' },
      { name: 'UCL', display: 'UCL' },
      { name: 'KCL', display: "KING'S" },
    ]
  
    return (
      <section className="bg-white border-y border-neutral-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-neutral-500 mb-8">
            Trusted by students accepted to
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div key={logo.name} className="text-neutral-400 font-bold text-xl tracking-wider">
                {logo.display}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 rounded-full">
              <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-neutral-700">
                &quot;PrepViva increased our offer rate by 34%&quot; — Cambridge Admissions Office
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
  