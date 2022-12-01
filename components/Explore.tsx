import React from 'react'
import Image from 'next/image'
import AboutPic1 from '../public/assets/AboutPic1.png'
import AboutPic2 from '../public/assets/Aboutpic2.png'
import Chef from '../public/assets/Chef.png'
import Option from '../public/assets/Option.png'
import Orders from '../public/assets/Orders.png'
type Props = {}

function explore({}: Props) {
  return (
    <div className='grid grid-col bg-lime-50'>
        <div className='flex flex-row'>
          <div className='flex flex-col m-auto p-20'>
            <div className='w-[591px] h-[308px]'>
                <p className='text-[55px] font-extrabold'>Explore Nutritious <br /> and <br /> Delicious Recipes</p>
            </div>
            <Image src={AboutPic1} alt={''}/>
          </div>
          <div className='m-auto flex flex-col  '>
            <Image className='mx-auto' src={AboutPic2} alt={''}/>
            <div className='flex flex-col py-8 mt-6'>
              <p className='text-[45px] font-extrabold'>Look Healthy & Feel Healthy</p>
              <div className=' px-16 mt-10'>
                <p className='text-[24px]'> Starting sharing healthy recipes <br />
                    Improving By The Inspiring Healthy Living <br />
                    Making healthy choice to stay looking fine</p>  
              </div>
                 
            </div>
          </div>
        </div>
        <div className='flex flex-row py-10'>
          <div className='bg-[#FFD7A0] w-[406px] h-[164px] m-auto flex flex-row'>
            <Image src={Chef} className='w-[114px] h-[114px] m-auto' alt={''}/>
            <div className='m-auto'>
              <p className='text-[55px] font-bold'>10+</p>
              <p className='text-[#585858] text-[28px] '>Talented Chef</p> 
            </div>
          </div>
          <div className='bg-[#A1C94CE5] opacity-[0.9] w-[406px] h-[164px] m-auto flex flex-row'>
            <Image src={Option} className='w-[114px] h-[114px] m-auto' alt={''}/>
            <div className='m-auto'>
              <p className='text-[55px] font-bold'>100+</p>
              <p className='text-[#585858] text-[28px]'>Healthy Options</p> 
            </div>
          </div><div className='bg-[#CAD4DB] w-[406px] h-[164px] m-auto flex flex-row'>
            <Image src={Orders} className='w-[114px] h-[114px] m-auto' alt={''}/>
            <div className='m-auto'>
              <p className='text-[55px] font-bold'>200+</p>
              <p className='text-[#585858] text-[28px] '>Orders</p> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default explore