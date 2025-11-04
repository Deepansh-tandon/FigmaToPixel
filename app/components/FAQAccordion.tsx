'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does it take to launch my MVP with LaunchPad Labs?",
    answer: "We specialize in speed. Most MVPs are launched in as little as 2-4 weeks, depending on complexity."
  },
  {
    question: "What exactly is included in the MVP package?",
    answer: "Our MVP package includes core features needed to validate your idea, including design, development, basic testing, and deployment assistance."
  },
  {
    question: "Do I need to have all my ideas finalized before starting?",
    answer: "Not at all! We work with you to refine your ideas during the development process. Having a clear vision helps, but we can help you shape it."
  },
  {
    question: "How involved will I be during the development process?",
    answer: "You'll be involved through regular check-ins and updates. We keep you in the loop at every stage while handling the technical heavy lifting."
  },
  {
    question: "Can I scale my MVP into a full product later?",
    answer: "Absolutely! Our MVPs are built with scalability in mind. We can help you expand your MVP into a full-featured product as your business grows."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm transition-all"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <h3
              className="flex-1 text-gray-900"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0%',
                color:'rgba(64, 64, 64, 1)'
              }}
            >
              {item.question}
            </h3>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="#3B9DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="#3B9DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </button>
          
          {openIndex === index && (
            <div className="mt-4">
              <p
                className="text-gray-600 p-4 rounded-lg"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  color:'rgba(71, 69, 69, 1)',
                  border: '0.5px dashed rgba(71, 69, 69, 1)'
                }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


