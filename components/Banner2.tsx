import React from 'react'
import AboutBanner from '../public/assets/AboutBanner.png'
import Image from 'next/image'
type Props = {}

function Banner2({}: Props) {
  return (
    <div className=''>
        <div className='bg-[#A1C94C] w-[850px] h-[130px] top-[50%] left-[25%] absolute my-auto text-center items-center justify-center m-auto'>
            <p className='text-[#FFFCF9] my-auto text-center justify-center mt-[25px]
                text-[55px] uppercase'> ABOUT MARCHELINE <span className='text-[#EC690B]'>KITCHEN</span> </p>
        </div>
        <Image src={AboutBanner}
        className="w-screen h-screen opacity-[1]"
        alt={''}/>
    </div>
  )
}

export default Banner2