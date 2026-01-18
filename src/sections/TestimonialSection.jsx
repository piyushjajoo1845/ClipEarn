import React from 'react'
import {ReviewsData} from '../data/TestimonialData'
import TestimonialCard from '../components/TestimonialCard'

const TestimonialSection = () => {
  return (
    <section className='container mx-auto px-4 py-24'>

        <div className=' text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4 clash-display'>What Our Customer Says</h2>
            <p className='text-zinc-500 text-lg w-full md:max-w-2xl mx-auto block'>Join thousands of creators earning real money by creating short videos for brands</p>
        </div>
        
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    ReviewsData.map((Person , index ) => (
                        <TestimonialCard key={index} Person={Person}/>
                    ))
                }
            </div>
        

    </section>
  )
}

export default TestimonialSection