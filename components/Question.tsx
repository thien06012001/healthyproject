import React from 'react'
import { PhoneIcon} from '@heroicons/react/24/solid'
type Props = {}

const Question = (props: Props) => {
  return (
    <div className='bg-[#727272CF] opacity0-[0.81] w-[1410px] h-[390px] mx-auto mt-[150px] flex flex-col'>
        <div className='mx-auto mt-[35px]'>
            <p className='text-[50px] text-[#FB9300] font-semibold'>Have question? </p>
        </div>
        <div className='mx-auto flex flex-col text-center justify-center items-center mt-[20px]'>
            <p className='text-[#D7E2EC] text-[55px]'>Let's Discuss & Free Consultation</p>
            <div className='text-[#FFFCF9] text-[28px]  text-center justify-center items-center'>Improve your healthy is also our mission </div>
        </div> 
        <div className='w-[324px] h-[80px] bg-white mx-auto rounded-xl mt-[20px] flex flex-row'>
            <PhoneIcon className='w-[35px] h-[35px] m-auto text-black animate-pulse'/> 
            <div className='m-auto'>
                <p className='text-[#575757] text-[22px]'>+84 936 846 364</p>
            </div> 
        </div>
    </div>
  )
}

export default Question