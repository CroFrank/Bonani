import CakeTopper from './CakeTopper'

export default function Featured() {
  const featuredToppers = ['/3D1.jpg', '/3D2.jpg', '/3D3.jpg', '/a.jpg']
  return (
    <section className="border-2 grid grid-cols-2 gap-y-3 sm:grid-cols-4 place-items-center mx-auto xl:w-3/4">
      {featuredToppers.map((topper, i) => {
        return <CakeTopper key={i} src={topper} />
      })}
    </section>
  )
}
