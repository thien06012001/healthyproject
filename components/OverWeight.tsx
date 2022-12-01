import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { OverWeight} from '../typings'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid';
type Props = {
    overweight: OverWeight
}

function OverWeight({overweight}: Props) {
  const MAX_RATINGS = 5;
  const MIN_RATINGS = 1;
  const RANDOM = Math.floor(Math.random() * (MAX_RATINGS - MIN_RATINGS +1)) + MIN_RATINGS
  const [rating,setRating] = useState(RANDOM)
  return (
 
      
        <div className='relative flex flex-col m-5 w-[340px] h-[500px] rounded-xl bg-[#FFE8C8] p-10'>
          <p className='absolute text-gray-500 top-[2%] left-[3%] font-bold'>{overweight.categories}</p>
         <Image className='w-[200px] h-[200px] mx-auto' src={urlFor(overweight.image).url()} height={200} width={200} alt={''}/>
         <p className='my-3 text-base font-[Inter] font-bold mx-auto w-full h-[50px] text-center items-center justify-center'>{overweight.name}</p>
         <div className='flex flex-row'>
          <div className='w-[50%]'  >
            <p className='text-[#4D81AE] text-[14px] font-[Inter] font-bold opacity-[5] '>50+ orders</p>
          </div> 
          <div className='flex flex-row w-[50%]'>
            {Array(rating)
              .fill(rating)
              .map((_,i) => (
                  <StarIcon className='h-4 text-yellow-500' />
                  )   
              )}
          </div>
         </div>
         <p className='text-[#4D81AE] text-[14px] font-[Inter] font-bold opacity-[5] '>{overweight.calories} calories</p>
         <p className='text-[#727272] text-[14px] w-full h-[50px] overflow-y-scroll snap-y snap-mandatory z-10 scrollbar scrollbar-track-[#FFE8C8] scrollbar-thumb-[#FFE8C8] my-3'>{overweight.ingredients}</p>
         <div className='flex flex-row'>
            <div className='m-auto ml-[-1px] text-[18px] font-bold text-[#7DBB4D]'>
                ${overweight.price}
            </div>
            <div className=''>
              <button className='m-auto font-[Inter] bg-white w-[100px] h-[30px]  rounded-lg text-[16px] font-bold text-[#3E3E3E] '>Add to cart</button>
            </div>
          </div>
       </div> 

 
   
        
        
    
    
  )
}

export default OverWeight