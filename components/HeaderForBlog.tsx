import React from 'react'
import { PhoneIcon,MapPinIcon, EnvelopeIcon, CalendarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import BlogPic1 from '../public/assets/BlogPic1.png'
import Blog2 from '../public/assets/Blog2.png'

type Props = {
 
}
function HeaderForBlog({}: Props) {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()
  let seconds = newDate.getSeconds()
  return (
    <div className='flex flex-col bg-lime-50 h-full'>
      <div className='m-auto text-[#38962F] text-[55px] font-bold'>BLOGS</div>
      <div className='mx-auto text-[45px] font-semibold mt-[30px]'>Healthy Eating for Healthy Weight</div>
      <div className='flex flex-row mx-auto mt-[10px]'> 
        <CalendarDaysIcon className='w-7 text-[#7DBB4D]  '/>
        <p className='text-[25px]'>{month<10? month : month}/{date}/{year}</p> 
        <p className='text-[25px] ml-[10px]'>{hours}:{minutes}:{seconds}</p>
      </div>
      <Image src={BlogPic1} alt={''} className='mx-auto mt-[40px] w-[1250px] h-[650px]'/>
    </div>
  )
}

export default HeaderForBlog