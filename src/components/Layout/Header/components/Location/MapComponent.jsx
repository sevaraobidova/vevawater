import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import useGeolocation from "/src/hooks/useGeolocation";
import { getSavedLocationsFromBackend } from "./api";
import { saveLocationToBackend } from "./api";

const MapComponent = () => {
    const { latitude, longitude } = useGeolocation();
    const [address, setAddress] = useState(null);
    const [popupContent, setPopupContent] = useState(null);
    const [dataSaved, setDataSaved] = useState(false);
    const markerRef = useRef(null);
    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            const fetchAddress = async () => {
                try {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBj-vFr7WRFR5xf025DfsU0IiNiIpzSJ2M`
                    );
                    const data = await response.json();

                    if (data.results && data.results.length > 0) {
                        const formattedAddress = data.results[0].formatted_address;
                        setAddress(formattedAddress);
                        setPopupContent(`Address: ${formattedAddress}`);
                    }
                } catch (error) {
                    console.error("Error fetching geocoding data:", error);
                }
            };

            fetchAddress();
        }
    }, [latitude, longitude]);

    const handleMarkerDrag = async (event) => {
        const marker = event.target;
        const newPosition = marker.getLatLng();
        markerRef.current = [newPosition.lat, newPosition.lng];

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newPosition.lat},${newPosition.lng}&key=AIzaSyBj-vFr7WRFR5xf025DfsU0IiNiIpzSJ2M`
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const formattedAddress = data.results[0].formatted_address;
                setAddress(formattedAddress);
                setPopupContent(`Address: ${formattedAddress}`);
            }
        } catch (error) {
            console.error("Error fetching geocoding data:", error);
        }
    };

    const handleUnloadMap = async () => {
        // Save location to backend when the map is about to be closed
        if (markerRef.current !== null && address && !dataSaved) {
            try {
                await saveLocationToBackend({
                    latitude: markerRef.current[0],
                    longitude: markerRef.current[1],
                    address: address,
                });

                // Set the flag to true once the data is saved
                setDataSaved(true);

                // Fetch updated saved locations after saving a new location
                const locations = await getSavedLocationsFromBackend();
                setSavedLocations(locations);
            } catch (error) {
                console.error('Error saving location:', error.message);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("beforeunload", handleUnloadMap);

        return () => {
            window.removeEventListener("beforeunload", handleUnloadMap);
            // Reset the flag when the component is unmounted or re-rendered
            setDataSaved(false);
        };
    }, []);

    if (latitude === null || longitude === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '70vh' }}
                whenUnload={handleUnloadMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} draggable={true} eventHandlers={{ dragend: handleMarkerDrag }}>
                    <Popup closeButton={true} closeOnClick={false}>
                        {popupContent || 'Loading address...'}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default MapComponent;
