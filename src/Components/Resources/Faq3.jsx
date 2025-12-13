import React, { useState } from 'react';
import { FaPlus, FaCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Making this the first true generator",
    answer: "Answer for the first true generator. You can add details about this FAQ point here.",
  },
  {
    question: "Required Documents Support",
    answer: "We provide comprehensive document support to ensure all your paperwork is handled correctly.",
  },
  {
    question: "Legal Immigration Processing",
    answer: "Our legal experts guide you through the entire immigration process to ensure compliance and success.",
  },
  {
    question: "Services from Experienced Agents",
    answer: "Our experienced agents provide top-notch services and personalized guidance for every case.",
  },
];

const Faq3 = () => {
  const [openIndex, setOpenIndex] = useState(null); // Default open the first

  const handleClick = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className='bg-blue-50'>
      <div className="max-w-6xl px-4 py-8 mx-auto">
        <h3 className=' text-3xl sm:text-4xl text-cyan-800 font-bold text-center'>QUESTIONS AND ANSWERS</h3>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 min:h-[400px]">
          {/* LEFT: Questions */}
          <div className="flex-1 flex flex-col items-start max-w-2xl h-[400px]">
            <h2 className="text-2xl font-semibold mb-4">Want To Emtploye</h2>
            <div className="flex flex-col gap-4">
              {faqData.map((faq, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => handleClick(idx)}
                    className={`flex items-center w-full text-left rounded-xl transition 
                    px-4 py-3 font-semibold text-xl
                    ${openIndex === idx
                        ? "bg-blue-500 text-white shadow"
                        : "bg-blue-50 text-black"
                      }
                  `}
                  >
                    <span className="mr-4 flex-shrink-0">
                      {openIndex === idx
                        ? <FaCircle className="text-white bg-sky-700 rounded-full w-5 h-5" />
                        : <FaPlus className="text-sky-700 bg-white rounded-full w-5 h-5" />}
                    </span>
                    {faq.question}
                  </button>
                  {/* Answer */}
                  {openIndex === idx && (
                    <div className="bg-white rounded-b-xl p-5 text-lg text-gray-800 border border-t-0 border-blue-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT: Image */}

          <img
            src="https://images.unsplash.com/photo-1713947505221-8a11da8aa744?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Counseling Promotion"
            className="rounded-xl shadow w-full h-[400px] object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default Faq3;
