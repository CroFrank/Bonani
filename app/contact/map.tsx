'use client'

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
    })

    const center = useMemo<google.maps.LatLngLiteral>(() => ({ lat: 45.79139, lng: 15.93923 }), [])
    const options = useMemo<google.maps.MapOptions>(() => ({
        clickableIcons: false,
        streetViewControl: false
    }), [])
    if (loadError) {
        return <h1>Error loading Google Maps</h1>;
    }
    if (!isLoaded) {
        return <h1>...Loading now</h1>
    }

    return (
        <div className="lg:w-6/12 w-10/12 ">
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName="map-container"
                options={options}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}