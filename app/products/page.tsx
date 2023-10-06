'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import ImageCard from '@/components/ImageCard';

export default function Products() {
    return (
        <div className='gradient-bg h-screen flex flex-col items-center justify-start'>
            <h2 className="text-4xl font-bold text-yellow-100 py-20">
                Cake Toppers
            </h2>
            <div className='border-2 border-black w-3/4'>
                <Swiper
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    className="border-2 border-black"
                    navigation
                >
                    <SwiperSlide className="border-2 border-black p-5 rounded-2xl"><ImageCard src='/3D1.jpg' /></SwiperSlide>
                    <SwiperSlide><ImageCard src='/basic1.jpg' /></SwiperSlide>
                    <SwiperSlide><ImageCard src='/special1.jpeg' /></SwiperSlide>
                    <SwiperSlide><ImageCard src='/3D1.jpg' /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};