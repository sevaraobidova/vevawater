import { useEffect, useState } from "react";

const useGeolocation = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
    });

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const newLocation = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            error: null,
                        };
                        setLocation((prevLocation) => {
                            // Only update state if the location has changed
                            if (
                                prevLocation.latitude !== newLocation.latitude ||
                                prevLocation.longitude !== newLocation.longitude
                            ) {
                                return newLocation;
                            }
                            return prevLocation;
                        });
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        setLocation({
                            latitude: null,
                            longitude: null,
                            error: error.message || "Unknown error",
                        });
                    }
                );
            } else {
                setLocation({
                    latitude: null,
                    longitude: null,
                    error: 'Geolocation is not supported by your browser.',
                });
            }
        };

        // Invoke getLocation when the component mounts
        getLocation();
    }, []);

    return location; // Return the location object
};

export default useGeolocation;
