import { useEffect, useState } from "react";
import { reverseGeocode, formatLocationForStorage } from "/src/utilities/geocodingService";

export const LocationComponent = ({ latitude, longitude }) => {
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const locationAddress = await reverseGeocode(latitude, longitude);
                setAddress(locationAddress);
            } catch (error) {
                console.error('Error fetching location address:', error);
            }
        };

        fetchAddress();
    }, [latitude, longitude]);
    return (
        <div className="w-20">
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            {address && (
                <>
                    <p>City: {address.city}</p>
                    <p>Street: {address.road}</p>
                    {/* Add more details as needed */}
                </>
            )}
        </div>
    )
}