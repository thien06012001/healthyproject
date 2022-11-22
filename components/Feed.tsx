import React from 'react'

type Props = {}

function Feed({}: Props) {
  return (
    <div className='flex flex-row py-10 items-center justify-center ml-32'>
        <div className='text-5xl uppercase font-semibold mx-auto'>
            <div className='text-gray-600'>
                Why choose us
            </div>
            <div className='pt-7 text-orange-400'>
                <span className='text-gray-600'>for</span> your healthy meal
            </div>
        </div>
        <div className='w-[50%] text-2xl pl-40 mx-auto text-gray-500'>
            We continue to consistently choose and maintain <br /> the quality of the food served, so that it remains <br /> fresh and nutritious when you eat it
        </div>
    </div>
  )
}

export default Feed