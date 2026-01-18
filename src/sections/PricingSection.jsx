import {plans} from "../data/PlanData"
import { Check } from "lucide-react"
const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
        {/* title */}
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 clash-display">
                Choose Your <span className="text-indigo-300/70">Plan</span>
            </h2>

            <p className="text-lg text-zinc-300/80">
                Simple, transparent pricing that scales with you. No tricks, no surprises—just the tools you need at a price that makes sense
            </p>
        </div>

        {/* subscription cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* PricingTeir */}
            {
                plans.map((plan , index) => (
                    <div className="p-6 bg-black/20 ring ring-indigo-950 mx-auto w-full max-w-sm rounded-lg text-white shadow-lg hover:ring-indigo-200 transition-all duration-300">
                        <h3 className="text-xl font-bold clash-display">{plan.name}</h3>
                        <div className="my-2">
                            <span className="text-4xl font-bold">{plan.price}</span>
                        </div>

                        <p className="text-zinc-300/80 mb-6">{plan.description}</p>

                        <ul className="space-y-1.5 mb-6 text-sm text-zinc-300/80">
                            {plan.features.map((feature , idx)=> (
                                <li key={idx} className="flex items-center">
                                    {/* check img */}
                                    <Check className="w-5 h-5 text-indigo-300 mr-2"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-sm rounded-md transition-all cursor-pointer"> 
                            Buy Now
                        </button>
                    </div>

                ))
            }
        </div>
    </section>
  )
}

export default PricingSection