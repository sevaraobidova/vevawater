// geocoding.js
import axios from 'axios';

export const getFullAddress = async (latitude, longitude, apiKey) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );

        if (response.data.status === 'OK') {
            const addressComponents = response.data.results[0].address_components;
            const street = addressComponents.find(component => component.types.includes('route')).long_name;
            const apartment = addressComponents.find(component => component.types.includes('subpremise')).long_name;
            const fullAddress = `${street}, ${apartment}`;
            return fullAddress;
        } else {
            console.error('Geocoding failed with status:', response.data.status);
            return null;
        }
    } catch (error) {
        console.error('Error during geocoding:', error.message);
        return null;
    }
};
