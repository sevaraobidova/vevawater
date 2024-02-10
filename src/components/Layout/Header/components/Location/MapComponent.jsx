import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import useGeolocation from "/src/hooks/useGeolocation";

import { useSaveLocationToBackend ,useGetSavedLocationsFromBackend} from "./api";

const MapComponent = () => {
    const { latitude, longitude, error } = useGeolocation();
    const [address, setAddress] = useState(null);
    const [popupContent, setPopupContent] = useState(null);
    const [data, setData] = useState({});
    const [locationSaved, setLocationSaved] = useState(false);
    const saveLocationToBackend = useSaveLocationToBackend(latitude,longitude,address);
    const markerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Replace 'YOUR_LOCATION' with the desired location
                const data = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBj-vFr7WRFR5xf025DfsU0IiNiIpzSJ2M`
                );
                const geoData = await data.json();
                console.log(geoData);
                if (geoData.results && geoData.results.length > 0) {
                    setData(geoData);

                    const formattedAddress = geoData.results[0].formatted_address;
                    setAddress(formattedAddress);
                    setPopupContent(`Address: ${formattedAddress}`);
                }
            } catch (error) {
                console.error('Error fetching geocoding data:', error);
                // Handle error state or display an error message
            }
        };

        fetchData();
    }, [latitude, longitude]);
    
    const handleMarkerDrag = async (event) => {
        const marker = event.target;
        const newPosition = marker.getLatLng();
        markerRef.current = [newPosition.lat, newPosition.lng];

        try {
            const data = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newPosition.lat},${newPosition.lng}&key=AIzaSyBj-vFr7WRFR5xf025DfsU0IiNiIpzSJ2M`
            );
            const geoData = await data.json();
            console.log(geoData.results[0].geometry.location)

            if (geoData.results && geoData.results.length > 0) {
                console.log(location);
                const addressComponents = geoData.results[0].address_components;
                const formattedAddress = addressComponents.map(component => component.long_name).join(', ');
                console.log(formattedAddress)
                setAddress(formattedAddress);
                setPopupContent(`Address: ${formattedAddress}`);
            }
        } catch (error) {
            console.error("Error fetching geocoding data:", error);
        }
    };
    useEffect(() => {
        // Check if location has been saved in local storage
        const isLocationSaved = localStorage.getItem('locationSaved');
        if (isLocationSaved === 'true') {
            setLocationSaved(true);
        }
    }, []);
    console.log(address)
    
    const handleSaveLocation = async () => {
        if (!locationSaved && data.results[0].geometry.location.lat && data.results[0].geometry.location.lng && address) {
            try {
                // Save location to backend
                await saveLocationToBackend.mutateAsync({
                    latitude: data.results[0].geometry.location.lat,
                    longitude: data.results[0].geometry.location.lng,
                    address: address,
                });

                // Update local storage to indicate location has been saved
                localStorage.setItem('locationSaved', 'true');
                setLocationSaved(true);

                console.log("Location saved successfully!");
            } catch (error) {
                console.error("Error saving location:", error);
            }
        }
    };
    useEffect(() => {
        // Save location when formatted address changes
        if (!locationSaved && address) {
            handleSaveLocation();
        }
    }, [address]);
     // Re-fetch data when latitude or longitude changes
    console.log(data);

   
    if (latitude === null || longitude === null) {
        return <p>Loading.</p>;
    }

    

    if (latitude === null || longitude === null) {
        return <p>Loading...</p>;
    }
    const center = data ? [latitude, longitude]: [47,69];

    return (
        <>
            
                <MapContainer
                center={center}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ width: '100%', height: '70vh' }}
                  
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker
                    ref={markerRef}
                        position={center}
                        draggable={true}
                        eventHandlers={{ dragend: handleMarkerDrag }}
                    >
                        <Popup closeButton={true} closeOnClick={false}>
                            {popupContent || 'Loading address...'}
                        </Popup>
                    </Marker>
                </MapContainer>
         
        
        </>
    );
};

export default MapComponent;
