'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

export default function Carousel() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isSmallScreen) {
        return (
            <div className='flex justify-center'>
                <ProductCard src='/basic1.jpg' title='Basic Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' />
                <ProductCard src='/3D1.jpg' title='3D Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' />
                <ProductCard src='/special1.jpeg' title='Special Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' />
            </div>
        );
    }
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide><div className='flex justify-center'><ProductCard src='/basic1.jpg' title='Basic Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>
            <SwiperSlide><div className='flex justify-center'><ProductCard src='/3D1.jpg' title='3D Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>
            <SwiperSlide><div className='flex justify-center'><ProductCard src='/special1.jpeg' title='Special Toppers' content='Don&apos;t let name basic tricks you, they send warm message and make every cake special.' /></div></SwiperSlide>

        </Swiper>
    )
};
