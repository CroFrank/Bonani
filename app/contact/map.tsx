'use client'

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const position = { lat: 45.79139, lng: 15.93923 } as const
const options = {
  clickableIcons: false,
  streetViewControl: false,
} as const

export function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })

  if (loadError) {
    return <h1>Error loading Google Maps</h1>
  }
  if (!isLoaded) {
    return <h1>...Loading now</h1>
  }

  return (
    <div className="w-10/12 lg:w-6/12 ">
      <GoogleMap
        zoom={12}
        center={position}
        mapContainerClassName="map-container"
        options={options}
        mapContainerStyle={{
          width: '800px',
          height: '400px',
        }}
      >
        <Marker title="redsasd" position={position} icon={'test'} />
      </GoogleMap>
    </div>
  )
}
