'use client'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ImageCard } from '@components'

import { data } from '../_data/data'
import './products.css'

export default function ProductsSwiper() {
  return (
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
  )
}
