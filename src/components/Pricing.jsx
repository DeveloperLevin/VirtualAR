import React from 'react'
import { pricingOptions } from '../constants/index.jsx'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-center text-3xl sm:text-5xl lg:text-6xl my-8'>Pricing</h2>
        <div className='flex flex-wrap mt-12 justify-center'>
            { pricingOptions.map((price, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl mb-8'>
                        <h5 className='text-4xl mb-8'>{price.title}{" "}<span className='text-sm text-orange-600'>{ price.title === "Pro" ? "(Most Popular)" : ""  }</span></h5>
                        <p className='text-4xl'>{ price.price } <span className='text-sm text-neutral-500'>/Month</span></p>

                        <div className='flex flex-col mt-5 justify-center space-y-2 mb-8'>
                            { price.features.map((feature, index) => (
                                <div key={index} className='flex'>
                                    <div className='text-white-400 bg-neutral-900 h-10 w-10 justify-center items-center rounded-full'>
                                        <CheckCircle2 />
                                    </div>
                                    <div>
                                        <p className='mt-2 text-md text-neutral-500'>{ feature }</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                        
                        <a href="" className='block w-full border px-12 py-2 border-orange-900 rounded-lg hover:bg-orange-900 text-center text-white tracking-tight'>Subscribe</a>

                    </div>                    
                </div>
            )) }
        </div>
    </div>
  )
}

export default Pricing