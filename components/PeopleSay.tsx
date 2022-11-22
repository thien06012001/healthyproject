import React from 'react'
import people1 from '../public/assets/people1.png'
import people2 from '../public/assets/people2.png'
import people3 from '../public/assets/people3.png'
import Image from 'next/image'
type Props = {}

function PeopleSay({}: Props) {
  return (
    <div className='flex flex-row '>
      <div className='ml-[200px] my-auto'>
        <div className='w-[415px] h-[128px]'>
          <p className='text-[48px] text-[#333333]'>What Are People <br /> 
          Saying <span className='text-[#FB9333] text-[48px]'>About Us</span></p> 
        </div>
        <div className='w-[400px] h-[72px] mt-[50px] '>
          <p className='text-[16px] text-[#727272]'>We are very happy if you are satisfied with our service and products, 
            let's read pure reviews from customers who bought our products.</p>
        </div>
      </div>
      <div className='grid grid-col mx-auto mt-[100px]'>
        <div className='w-[269px] h-[402px] bg-white rounded-xl '>
        <div className='mt-[-45px] ml-[20px]'>
          <Image src={people1}
                className='w-[90px] h-[90px] absolute'
                alt={''}/>
        </div>
          <div className='ml-[20px] w-[181px] h-[32px] mt-[150px]'>
            <p className='text-[24px] font-semibold'>Dao Nguyen </p>
          </div>
          <div className='ml-[20px] w-[181px] h-[32px] mt-[20px]'>
            <p className='text-gray-500 text-[14px]  opacity-[0.8]'>22 Years</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleSay