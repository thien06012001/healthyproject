import { GetStaticProps } from 'next'
import React from 'react'
import Navbar from '../../../components/Navbar'
import ProductFeed from '../../../components/ProductFeed'
import { sanityClient } from '../../../sanity'
import { NormalWeight, Obese, OverWeight, UnderWeight } from '../../../typings'
import category from '../../../public/assets/category.png'
import Image from 'next/image'
import NavForProduct from '../../../components/NavForProduct'
type Props = {
    overweights: OverWeight[]
    normalweights: NormalWeight[]
    underweights: UnderWeight[]
    obeses: Obese[]
}

function Category({normalweights, underweights, overweights, obeses}: Props) {
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
            <div className='flex flex-col mx-auto w-[20%]'>
                <h1 className='mx-auto mt-[30px] text-[20px] font-bold'>CATEGORIES</h1>
                <div className='w-[200px] h-[350px] bg-white border border-[#38962F] mx-auto mt-[30px] flex flex-col '>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer '>All categories</p> 
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Salad</p> 
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Meat</p> 
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Starch</p>
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Sauce</p> 
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Drinks</p> 
                    </div>
                    <div className='text-center m-auto w-[175px]'>
                        <p className='border-b border-b-[#38962F] hover:border-b-[#FFE8C8] cursor-pointer'>Snacks</p>
                    </div>

                </div>
            </div>
            
            <div className='m-auto w-[80%]'>
                <ProductFeed underweights={underweights} normalweights={normalweights} overweights={overweights} obeses={obeses}/>
            </div>
            
        </main>
        
    </div>
  )
}

export default Category
export const getStaticProps: GetStaticProps<Props> = async () => {
    const query1 = `
    *[_type == "normalweight"] 
    `;
  
    const query2 = `
    *[_type == "overweight"] 
    `;
  
    const query3 = `
    *[_type == "underweight"] 
    `;
  
    const query4 = `
    *[_type == "obese"] 
    `;
    const overweights: OverWeight[] = await sanityClient.fetch(query2);
    const normalweights: NormalWeight[] = await sanityClient.fetch(query1)
    const obeses: Obese[] = await sanityClient.fetch(query4)
    const underweights: UnderWeight[] = await sanityClient.fetch(query3)
    return {
      props: {
        overweights,
        normalweights,
        underweights,
        obeses,
      },
      revalidate: 10,
    }
  };