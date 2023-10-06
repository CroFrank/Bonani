'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './products.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ImageCard from '@/components/ImageCard';

export default function Products() {
    return (
        <>
            <div className='gradient-bg h-screen flex flex-col items-center justify-start'>
                <h2 className="text-4xl font-bold text-yellow-100 py-20">
                    Cake Toppers
                </h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ImageCard src='/3D1.jpg' price={15} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/basic1.jpg' price={7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/special1.jpeg' price={15} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/3D2.jpg' price={10} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/3D3.jpg' price={10} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/a.jpg' price={13} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/b.jpg' price={7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/c.jpg' price={11} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/g.jpg' price={8} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageCard src='/h.jpg' price={8} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
