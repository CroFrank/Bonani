'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ImageCard from '@/app/_components/ImageCard';
import { data } from '../../data/data'

import '.././products/products.css'

export default function ProductsSwiper() {
    return (
        <div className='h-20'>
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
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {data.map((product) => {
                    return (
                        <SwiperSlide key={product.name}>
                            <ImageCard src={product.name} price={product.price} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
