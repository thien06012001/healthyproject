import React from 'react'
import people1 from '../public/assets/people1.png'
import people2 from '../public/assets/people2.png'
import people3 from '../public/assets/people3.png'
type Props = {}

function PeopleSay({}: Props) {
  return (
    <div className='flex flex-row ml-[200px]'>
      <div>
        <div className='w-[415px] h-[128px]'>
          <p className='text-[48px] text-[#333333]'>What Are People <br /> 
          Saying <span className='text-[#FB9333] text-[48px]'>About Us</span></p> 
        </div>
        <div className='w-[400px] h-[72px] '>
          <p className='text-[16px] text-[#727272]'>We are very happy if you are satisfied with our service and products, 
            let's read pure reviews from customers who bought our products.</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleSay