import { GetStaticProps } from 'next'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { sanityClient } from '../../../sanity'
import { UnderWeight } from '../../../typings'
import category from '../../../public/assets/category.png'
import Image from 'next/image'
import NavForProduct from '../../../components/NavForProduct'
import ProductFeed_Starch from '../../../components/AllWeight/ProductFeed_Starch'
import { useRouter } from 'next/router'
import ProductFeed_Meat from '../../../components/UnderWeight/ProductFeed_Meat'
import Head from 'next/head'
import Icon from '../../../public/assets/Logo.png'
type Props = {
    underweights: UnderWeight[]
}

function Meat({underweights}: Props) {
    const router = useRouter()
  return (
    <div className='h-full bg-lime-50 flex flex-col '>
         <Head>
          <title> Under Weight Meat</title>
          <link rel="icon" href={Icon.src} />
        </Head>
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
                    <div onClick={() => router.push('/Category/UnderWeight/AllCategory')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer '>All categories</p> 
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Salad')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Salad</p> 
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Meat')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Meat</p> 
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Starch')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Starch</p>
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Sauces')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Sauces</p> 
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Drinks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Drinks</p> 
                    </div>
                    <div onClick={() => router.push('/Category/UnderWeight/Snacks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Snacks</p>
                    </div>

                </div>
            </div>
            
            <div className='m-auto w-[80%]'>
                <ProductFeed_Meat underweights={underweights}/>
            </div>
            
        </main>
        
    </div>
  )
}

export default Meat
export const getStaticProps: GetStaticProps<Props> = async () => {
   

    const query1 = `
    *[_type == "underweight"] 
    `;
  
   
   
    const underweights: UnderWeight[] = await sanityClient.fetch(query1)
    return {
      props: {
        underweights,
      },
      revalidate: 10,
    }
  };