'use client'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

export default function Carousel() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {
                isSmallScreen ? <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }
                    }
                >
                    <SwiperSlide><div className='flex justify-center'><ProductCard src='/basic1.jpg' title='Basic Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-center'><ProductCard src='/3D1.jpg' title='3D Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>
                    <SwiperSlide><div className='flex justify-center'><ProductCard src='/special1.jpeg' title='Special Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>
                </Swiper > :
                    <div className='flex justify-center'>
                        <ProductCard src='/basic1.jpg' title='Basic Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' />
                        <ProductCard src='/3D1.jpg' title='3D Toppers' content='This toppers are made from 2 or more layers which gives them 3D effect and fill every cake with a life energy.' />
                        <ProductCard src='/special1.jpeg' title='Special Toppers' content='As their name point out, nothig about this topper is usual, they are made for most special occasions.' />
                    </div>
            }
        </>
    )
};
