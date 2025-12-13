import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const docData = {
  Undergraduate: [
    "Passport copy",
    "SSC/O Level Certificates",
    "HSC/A Level Certificates",
    "SSC/O Level Transcripts",
    "HSC/A Level Transcripts",
    "English Proficiency Document (IELTS, Duolingo, PTE, TOEFL)",
    "Letter of Recommendation (LOR)",
    "Statement of Purpose (SOP)",
    "Resume (optional)",
    "Extra Curricular Certificates (optional)",
  ],
  Masters: [
    "Passport copy",
    "Undergraduate Academic Certificates",
    "Undergraduate Academic Transcripts",
    "English Proficiency Document (IELTS, Duolingo, PTE, TOEFL, MOI)",
    "Letter of Recommendation (LOR)",
    "Statement of Purpose (SOP)",
    "Resume",
    "Extra Curricular Certificates (optional)",
  ],
  PhD: [
    "Passport copy",
    "Masters Academic Certificates",
    "Masters Academic Transcripts",
    "English Proficiency Document (IELTS, Duolingo, PTE, TOEFL, MOI)",
    "Letter of Recommendation (LOR)",
    "Statement of Purpose (SOP)",
    "Resume",
    "Extra Curricular Certificates (optional)",
  ],
};

const tabList = [
  { label: "Undergraduate", value: "Undergraduate" },
  { label: "Masters", value: "Masters" },
  { label: "PhD", value: "PhD" },
];

const Enroll2 = () => {
  const [activeTab, setActiveTab] = useState("Undergraduate");

  return (
    <div className=' px-4 py-16 mx-auto max-w-7xl'>
      <h3 className='text-3xl sm:text-4xl md:text-5xl text-cyan-800 text-center font-black mb-10'>2. Documentation</h3>
      <p className='px-4 text-[16px] max-w-5xl mx-auto md:text-lg font-semibold text-cyan-800 text-center '>
        Submit the required documents, including academic records and identification, to proceed with your application.
      </p>

      <div className='flex flex-col items-center justify-center'>
        <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {tabList.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={` px-10 py-3 text-lg font-bold rounded transition
              ${activeTab === tab.value
                  ? "bg-sky-700 text-white shadow"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
            `}
              style={{ minWidth: 160 }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className=''>
          {docData[activeTab].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg font-semibold text-gray-700 mb-2">
              <FaCheck className="text-green-700 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Enroll2;
