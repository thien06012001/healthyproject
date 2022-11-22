import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import Banner1 from '../public/assets/banner1.png'
import Banner2 from '../public/assets/banner2.png'
import Banner3 from '../public/assets/banner3.png'
type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='relative'>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}>
            <div className=''>
                <Image loading='lazy' src={Banner1} alt="" />
            </div>
            <div>
                <Image loading='lazy' src={Banner2} alt="" />
            </div>
            <div>
                <Image loading='lazy' src={Banner3} alt="" />
            </div>
        </Carousel>
    </div>
  )
}