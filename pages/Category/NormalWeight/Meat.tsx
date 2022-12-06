import { GetStaticProps } from 'next'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { sanityClient } from '../../../sanity'
import { NormalWeight} from '../../../typings'
import category from '../../../public/assets/category.png'
import Image from 'next/image'
import NavForProduct from '../../../components/NavForProduct'
import { useRouter } from 'next/router'
import ProductFeed_Meat from '../../../components/NormalWeight/ProductFeed_Meat'
type Props = {
    normalweights: NormalWeight[]
}

function Meat({normalweights}: Props) {
    const router = useRouter()
  return (
    <div className='h-full bg-lime-50 flex flex-col '>
        <Navbar/>
        <div className='text-center items-center justify-center flex'>
            <h2 className='absolute m-auto text-[55px] text-[#38962F] font-bold box-'>OUR MENU FOR TODAY</h2>
            <Image src={category} className='w-screen h-screen' alt={''}/>
        </div>
        <div className='top-[10%]'>
            <NavForProduct/> 
        </div>
        <main className='flex flex-row'>
            <div className='flex flex-col mx-auto w-[20%] '>
                <h1 className='mx-auto mt-[30px] text-[20px] font-bold'>CATEGORIES</h1>
                <div className='w-[200px] h-[350px] bg-white border border-[#38962F] mx-auto mt-[30px] flex flex-col rounded-md'>
                    <div onClick={() => router.push('/Category/NormalWeight/AllCategory')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer '>All categories</p> 
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Salad')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Salad</p> 
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Meat')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Meat</p> 
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Starch')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Starch</p>
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Sauces')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Sauces</p> 
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Drinks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Drinks</p> 
                    </div>
                    <div onClick={() => router.push('/Category/NormalWeight/Snacks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Snacks</p>
                    </div>

                </div>
            </div>
            
            <div className='m-auto w-[80%]'>
                <ProductFeed_Meat normalweights={normalweights}/>
            </div>
            
        </main>
        
    </div>
  )
}

export default Meat
export const getStaticProps: GetStaticProps<Props> = async () => {
    const query1 = `
    *[_type == "normalweight"] 
    `;
    const normalweights: NormalWeight[] = await sanityClient.fetch(query1)
    return {
      props: {
        normalweights,
      },
      revalidate: 10,
    }
  };