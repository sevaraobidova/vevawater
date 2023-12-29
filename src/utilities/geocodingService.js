import axios from 'axios'
// geoocodingservices
 const reverseGeocode = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );

        if (response.data && response.data.address) {
            return response.data.address;
        } else {
            throw new Error('Invalid response from the geocoding service');
        }
    } catch (error) {
        console.error('Error during reverse geocoding:', error);
        throw new Error('Error during reverse geocoding');
    }
};

const formatLocationForStorage = (latitude, longitude, address) => {
    return {
        latitude,
        longitude,
        address,
    };
};


export { reverseGeocode, formatLocationForStorage };

