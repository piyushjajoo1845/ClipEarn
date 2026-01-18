import React from "react"

const TestimonialCard = ({ Person }) => {
  return (
    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-indigo-700 transition duration-500">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={Person.image} 
          alt={Person.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className=" clash-display font-semibold text-white">{Person.name}</h3>
          <p className="text-sm text-zinc-500">{Person.handle}</p>
        </div>
      </div>
      
      {/* Review Text */}
      <p className="text-white mb-3">{Person.review}</p>
      
      {/* Date */}
      <p className="text-xs text-gray-400">{Person.date}</p>
    </div>
  )
}

export default TestimonialCard