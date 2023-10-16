'use client'

import dynamic from 'next/dynamic'

import { Button } from '@components'

const DynamicProductsSwiper = dynamic(
  () => import('@/app/[locale]/products/ProductsSwiper'),
  {
    ssr: false,
    loading: () => <p className="text-center text-3xl">...Loading</p>,
  }
)

export default function Products() {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <h2 className="py-20 text-4xl font-bold text-yellow-100">
          Cake Toppers
        </h2>
        <DynamicProductsSwiper />
        <div className="mt-20 py-10 px-3">
          <Button href="/contact" content="Get your Topper now!" />
        </div>
      </div>
    </>
  )
}
