'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    {
      question: "How does PrepViva compare to human interview coaching?",
      answer: "PrepViva delivers structured practice and detailed feedback at a fraction of the cost of traditional human coaching. Our AI is trained on real UK admissions and NHS interview patterns, providing instant, comprehensive reports that many students find more actionable than expensive coaching sessions."
    },
    {
      question: "Which UK universities and NHS bands does PrepViva cover?",
      answer: "We cover all Russell Group universities including Oxford and Cambridge, all UK medical schools, and NHS positions from Band 5 to Consultant level. Each mock interview is tailored to your target institution or NHS band."
    },
    {
      question: "What happens in a 45-minute mock interview?",
      answer: "You’ll experience a realistic interview with 6–8 structured questions. The AI adapts to your responses, asks follow-ups, and evaluates you on clarity, empathy, reasoning, and professionalism. A detailed feedback report is generated instantly."
    },
    {
      question: "Is PrepViva suitable for international students?",
      answer: "Yes. PrepViva helps international candidates understand UK-specific expectations, including NHS values, MMI structure, and Oxbridge academic culture."
    },
    {
      question: "How quickly can I access my feedback report?",
      answer: "Your feedback report is available immediately after your session. It includes scoring across key competencies, detailed improvement notes, and model responses."
    },
    {
      question: "Can universities or NHS trusts use PrepViva for groups?",
      answer: "Yes. PrepViva offers institutional packages with cohort dashboards, analytics, and UK data residency. We support universities, NHS trusts, and training organisations."
    },
    {
      question: "Is PrepViva recognised by UK institutions?",
      answer: "PrepViva is designed in alignment with NHS values and UK university admissions frameworks. While not officially accredited, the structure mirrors real interviews, making preparation highly relevant."
    },
    {
      question: "What are NHS Band 5 interview questions like?",
      answer: "Band 5 interviews often focus on clinical scenarios, teamwork, and NHS values. PrepViva includes hundreds of real-world Band 5 style questions with structured feedback."
    },
    {
      question: "How does PrepViva prepare me for Oxbridge interviews?",
      answer: "Oxbridge interviews test critical thinking rather than memorised knowledge. PrepViva simulates tutorial-style questioning where you must ‘think aloud’ and justify reasoning, exactly as in real interviews."
    },
    {
      question: "Does PrepViva support ethical scenario practice?",
      answer: "Yes. Ethical dilemmas are central to medical and NHS interviews. Our question bank includes structured ethical cases with model reasoning aligned to GMC/NMC guidelines."
    },
    {
      question: "Do I need a webcam and microphone?",
      answer: "We recommend using both for the best experience, but audio-only and text-only modes are available for accessibility and low-bandwidth situations."
    },
    {
      question: "How secure is my data?",
      answer: "All sessions comply with GDPR and UK data protection standards. Reports are stored securely and can be deleted by the user at any time."
    },
    {
      question: "What is the STAR method and does PrepViva support it?",
      answer: "The STAR method (Situation, Task, Action, Result) is widely used in NHS interviews. PrepViva prompts and evaluates answers according to STAR for structured clarity."
    },
    {
      question: "Can I retake interviews?",
      answer: "Yes. You can retake as many times as you like. Each attempt generates a fresh report with progress tracking."
    },
    {
      question: "How does PrepViva assess communication skills?",
      answer: "We evaluate tone, pace, vocabulary, structure, and empathy. Reports include specific notes on how you come across to an interviewer."
    },
    {
      question: "What subjects are supported for university interviews?",
      answer: "PrepViva supports Medicine, STEM, Humanities, Business, Law, and more. You can select your subject or type it manually for custom practice."
    },
    {
      question: "What is an MMI and how does PrepViva simulate it?",
      answer: "Multiple Mini Interviews (MMIs) use stations with different scenarios. PrepViva replicates this by presenting diverse question types in sequence with adaptive follow-ups."
    },
    {
      question: "Does PrepViva include NHS values-based interviews?",
      answer: "Yes. All NHS-focused sessions align with values such as Compassion, Respect, and Teamwork, which are core to recruitment frameworks."
    },
    {
      question: "Can I upload my personal statement or CV?",
      answer: "Yes. Uploading documents allows PrepViva to tailor follow-up questions to your background, creating a more realistic interview simulation."
    },
    {
      question: "How long should I prepare before an interview?",
      answer: "We recommend 2–4 weeks of practice with PrepViva, but even a single session provides valuable insights and confidence."
    },
    {
      question: "What kinds of feedback will I receive?",
      answer: "Feedback covers academic/technical knowledge, ethical reasoning, communication clarity, body language, and overall impression, with constructive advice."
    },
    {
      question: "Is there a limit to how many interviews I can practice?",
      answer: "No. PrepViva is designed for unlimited practice — you can retake until confident."
    },
    {
      question: "Does PrepViva simulate stress conditions?",
      answer: "Yes. Some scenarios deliberately apply time pressure or probing follow-ups to prepare you for real interview intensity."
    },
    {
      question: "Can I practice Oxbridge science and math questions?",
      answer: "Yes. PrepViva includes subject-specific critical thinking problems designed to simulate Oxbridge interview challenges."
    },
    {
      question: "How does PrepViva handle vague or weak answers?",
      answer: "The system automatically rephrases or probes deeper, just like a real interviewer, to test whether you can clarify and expand under pressure."
    },
    {
      question: "Can I access PrepViva on mobile?",
      answer: "Yes. The platform is fully mobile-optimised and works on smartphones, tablets, and laptops."
    },
    {
      question: "What are the most common mistakes in NHS interviews?",
      answer: "Typical mistakes include not linking answers to NHS values, lack of structure, and failure to reflect. PrepViva highlights these issues in reports."
    },
    {
      question: "Does PrepViva include non-verbal communication feedback?",
      answer: "Yes. If video is enabled, feedback includes posture, eye contact, and engagement alongside spoken content."
    },
    {
      question: "What are situational judgement questions?",
      answer: "These are scenarios testing decision-making under pressure. PrepViva includes realistic NHS-style situational questions with scoring criteria."
    },
    {
      question: "Can I choose interview length?",
      answer: "No. Sessions are fixed at 45 minutes to replicate real NHS and university interview durations."
    },
    {
      question: "Is PrepViva cheaper than private coaching?",
      answer: "Yes. Human coaching can cost £100–£150/hour. PrepViva delivers unlimited sessions at a fraction of that price."
    },
    {
      question: "Does PrepViva support overseas NHS applicants?",
      answer: "Yes. Many overseas nurses, doctors, and AHPs preparing for NHS roles use PrepViva to adapt to UK values-based frameworks."
    },
    {
      question: "What is included in the feedback report?",
      answer: "A multi-page PDF with competency scores, behavioural analysis, sample model answers, and an improvement roadmap."
    },
    {
      question: "How do I know if my answers align with NHS values?",
      answer: "PrepViva highlights where answers demonstrate Compassion, Respect, Integrity, and Teamwork, and gives examples for improvement."
    },
    {
      question: "Do I need prior interview experience?",
      answer: "No. PrepViva supports beginners with guided practice as well as experienced candidates looking for fine-tuning."
    },
    {
      question: "What are curveball questions in interviews?",
      answer: "These are unexpected, open-ended questions designed to test adaptability. PrepViva includes these to build resilience."
    },
    {
      question: "Can I share my report with mentors?",
      answer: "Yes. Reports can be downloaded as PDFs and shared with teachers, mentors, or peers."
    },
    {
      question: "Does PrepViva support law or business school interviews?",
      answer: "Yes. In addition to medicine and NHS, we support Business, Law, and other competitive UK university programmes."
    },
    {
      question: "How realistic are the mock interviews?",
      answer: "The experience mirrors real interview conditions with adaptive follow-ups, scoring, and timing, making it highly authentic."
    },
    {
      question: "Does PrepViva offer group practice?",
      answer: "Currently, PrepViva focuses on one-to-one simulation. Institutions can request group or cohort dashboards."
    },
    {
      question: "Is PrepViva only for medicine and NHS?",
      answer: "No. While optimised for medical and NHS roles, it also supports other UK university admissions interviews."
    },
    {
      question: "Can I try PrepViva for free?",
      answer: "Yes. Your first practice question and partial report are free so you can experience the platform before purchasing full sessions."
    },
    {
      question: "What is the biggest benefit of PrepViva?",
      answer: "Consistency and scale. You can practice unlimited times with realistic conditions, something not possible with human coaching alone."
    },
    {
      question: "Do you provide sample answers?",
      answer: "Yes. Each report includes model responses that demonstrate structured, high-quality answers for your role or subject."
    },
    {
      question: "Can PrepViva help reduce anxiety?",
      answer: "Yes. Repeated practice in realistic conditions improves confidence and reduces performance anxiety."
    },
    {
      question: "How do follow-up questions work?",
      answer: "If your answer is vague, PrepViva automatically asks follow-ups — exactly like a real panel interviewer would."
    },
    {
      question: "Does PrepViva replace human coaching?",
      answer: "It complements it. Many candidates use PrepViva alongside tutors for unlimited practice between sessions."
    },
    {
      question: "Do universities know if I use PrepViva?",
      answer: "No. PrepViva is a private preparation tool. Your reports and sessions are confidential to you."
    },
    {
      question: "How often should I practice?",
      answer: "We recommend 2–3 sessions per week for best results, but you can adapt to your own timeline."
    }
  ]

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 7)

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {visibleFaqs.map((faq, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-800">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-neutral-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-neutral-100">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAll(true)} 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
            >
              Load More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

