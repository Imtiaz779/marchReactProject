import React from 'react'

const PurposeSection = () => {

    const features = [
        {
          icon: "🟣", // Replace with your actual icon component or image
          title: "Built for impact",
          description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
          icon: "🔴", // Replace with your actual icon component or image
          title: "In sync with you",
          description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
      ];

      
  return (
    <div className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto'>
           <div className='grid md:'>
           <div>
                <p className='text-sm text-purple-600 font-medium mb-2'>
                    ACHIEVE MORE
                </p>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>  Purpose of a convoy is to keep your team</h2>
            </div>
           </div>
        </div>
    </div>
  )
}

export default PurposeSection