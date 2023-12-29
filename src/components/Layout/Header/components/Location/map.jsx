
import { useEffect, useRef, useState } from 'react';

import 'leaflet/dist/leaflet.css'

import { MapContainer ,Marker,Polygon,Popup,TileLayer} from 'react-leaflet';


const MapComponent = () => {
    // const location = useGeolocation();
    const [position, setPosition] = useState(null);

    useEffect(() => {
        // Try to get the user's location when the component mounts
        navigator.geolocation.getCurrentPosition(
            (location) => {
                setPosition([location.coords.latitude, location.coords.longitude]);
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    }, []);
 

    const handleMapClick = (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
}
    return (
        <>
    <MapContainer style={{background:"red",border:'1px solid red',height:"400px"}}
        center={position || [41.316441, 69.294861]}
                zoom={13}
                onClick={handleMapClick}
    >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

                />
            {position && <Marker position={position}><Popup>Your location</Popup></Marker>}
        
            </MapContainer>
     </>
    )
};

export default MapComponent;



