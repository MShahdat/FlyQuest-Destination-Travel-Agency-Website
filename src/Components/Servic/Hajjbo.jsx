import React from 'react';
import { LuNotebookPen } from "react-icons/lu";

const Hajjbo = () => {
    return (
        <div className='px-4 py-8 xl:px-40 mx-auto max-w-7xl'>
            <h2 className='py-4 text-3xl sm:text-4xl font-bold text-center text-sky-700'>
                Top Reasons to Perform Hajj or Umrah in Saudi Arabia
            </h2>
            <div className='space-y-6'>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>1. Spiritual Fulfillment</h>
                    <p className='text-md sm:text-xl mt-1'>Walking in the footsteps of the Prophet (PBUH) and fulfilling the commands of Allah offers a life-changing spiritual experience.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>2. Access to Two Holy Mosques</h>
                    <p className='text-md sm:text-xl mt-1'>Pilgrims get to visit Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah—two of the holiest sites in Islam.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>3. Modern Facilities</h>
                    <p className='text-md sm:text-xl mt-1'>Saudi Arabia has invested heavily in infrastructure, providing air-conditioned tents in Mina, fast transport, medical services, and guidance systems to ensure comfort and safety.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>4. Advanced Visa System</h>
                    <p className='text-md sm:text-xl mt-1'>Pilgrims can now apply for e-Visas for Umrah, and the Hajj quota system is efficiently managed by the Ministry of Hajj and Umrah.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>5. Support for Bangladeshi Pilgrims</h>
                    <p className='text-md sm:text-xl mt-1'>Dedicated Hajj missions from Bangladesh work alongside Saudi authorities to assist pilgrims throughout their journey.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>6. Cultural and Historical Insights</h>
                    <p className='text-md sm:text-xl mt-1'>Pilgrims can visit sacred historical sites such as Jabal al-Noor, Jabal Uhud, and Quba Mosque, deepening their understanding of Islamic history.</p>
                </div>
                <div>
                    <h className='text-lg sm:text-xl font-bold'>7. High Security and Cleanliness</h>
                    <p className='text-md sm:text-xl mt-1'>Saudi Arabia ensures the highest levels of hygiene, order, and security, allowing pilgrims to focus solely on their worship.</p>
                </div>
            </div>
            <div className='space-y-8'>
                <h3 className='mt-6 text-xl sm:text-2xl font-bold text-sky-700'>Visa Requirements for Hajj and Umrah (for Bangladeshi Citizens) For Hajj:</h3>
                <div className='space-y-1.5'>
                    <div className='flex gap-2 items-center'>
                        <LuNotebookPen className='size-6 text-green-600'/>
                        <h2 className='text-lg sm:text-xl font-bold'>For Hajj:</h2>
                    </div>
                    <p className='text-md sm:text-xl mt-4'>Must apply through approved Hajj agencies under Bangladesh’s Hajj quota</p>
                    <p className='text-md sm:text-xl'>Valid passport with 6+ months validity</p>
                    <p className='text-md sm:text-xl'>Medical certificate and vaccinations (e.g., meningitis, COVID-19, flu)</p>
                    <p className='text-md sm:text-xl'>Hajj visa form via the authorized agency</p>
                    <p className='text-md sm:text-xl'>Proof of residence and travel arrangements</p>
                </div>
                <div className='space-y-1.5'>
                    <div className='flex gap-2 items-center'>
                        <LuNotebookPen className='size-6 text-green-600'/>
                        <h2 className='text-lg sm:text-xl font-bold'>For Umrah:</h2>
                    </div>
                    <p className='text-md sm:text-xl mt-4'>Can be applied for via approved online platforms or travel agents</p>
                    <p className='text-md sm:text-xl'>E-visa or Umrah visa (valid for 90 days)</p>
                    <p className='text-md sm:text-xl'>Proof of hotel booking in Makkah and Madinah</p>
                    <p className='text-md sm:text-xl'>Confirmed return flight ticket</p>
                    <p className='text-md sm:text-xl'>Travel health insurance</p>
                </div>
            </div>
            <div className='space-y-4'>
                <h2 className='mt-8 text-xl sm:text-2xl font-bold text-sky-700'>Step-by-Step Guide to Perform Hajj or Umrah:</h2>
                <p className='text-md sm:text-xl'>Choose a Licensed Hajj/Umrah Operator – Select an agency approved by both the Saudi and Bangladeshi governments.</p>
                <p className='text-md sm:text-xl'>Submit Required Documents – Passport, photo, vaccination card, and payment.</p>
                <p className='text-md sm:text-xl'>Receive Visa & Travel Itinerary – Get your Hajj or Umrah visa and finalize flights and hotel arrangements.</p>
                <p className='text-md sm:text-xl'>Attend Orientation Session – Learn about rituals, travel tips, and safety guidelines.</p>
                <p className='text-md sm:text-xl'>Travel to Saudi Arabia – Fly to Jeddah or Madinah and proceed to your hotel.</p>
                <p className='text-md sm:text-xl'>Perform the Pilgrimage – Complete all rituals as per Islamic guidelines.</p>
            </div>
        </div>
    );
};

export default Hajjbo;