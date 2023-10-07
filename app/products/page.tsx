'use client'

import dynamic from "next/dynamic";

const DynamicProductsSwiper = dynamic(() => import("@/app/_components/ProductsSwiper"), {
    ssr: false,
    loading: () => <p className="text-3xl text-center">...Loading</p>
})

export default function Products() {
    return (
        <>
            <div className='gradient-bg h-screen flex flex-col items-center justify-start'>
                <h2 className="text-4xl font-bold text-yellow-100 py-20">
                    Cake Toppers
                </h2>
                <DynamicProductsSwiper />
            </div>
        </>
    );
}
