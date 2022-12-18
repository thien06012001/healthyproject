import { GetStaticProps } from 'next'
import React from 'react'
import Navbar from '../../../components/Navbar'
import ProductFeed from '../../../components/Obese/ProductFeed'
import { sanityClient } from '../../../sanity'
import {Obese} from '../../../typings'
import category from '../../../public/assets/category.png'
import Image from 'next/image'
import NavForProduct from '../../../components/NavForProduct'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Icon from '../../../public/assets/Logo.png'
type Props = {
    obeses: Obese[]
}

function Category({obeses}: Props) {
    const router = useRouter()
  return (
    <div className='h-full bg-lime-50 flex flex-col '>
         <Head>
          <title>All Obese Products</title>
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
                    <div onClick={() => router.push('/Category/Obese/AllCategory')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer '>All categories</p> 
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Salad')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Salad</p> 
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Meat')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Meat</p> 
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Starch')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Starch</p>
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Sauces')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Sauces</p> 
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Drinks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Drinks</p> 
                    </div>
                    <div onClick={() => router.push('/Category/Obese/Snacks')} className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Snacks</p>
                    </div>

                </div>
            </div>
            
            <div className='m-auto w-[80%]'>
                <ProductFeed obeses={obeses}/>
            </div>
            
        </main>
        
    </div>
  )
}

export default Category
export const getStaticProps: GetStaticProps<Props> = async () => {

    const query4 = `
    *[_type == "obese"] 
    `;
    const obeses: Obese[] = await sanityClient.fetch(query4)
    return {
      props: {
        obeses,
      },
      revalidate: 10,
    }
  };