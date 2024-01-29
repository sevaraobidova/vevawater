import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const saveLocationToBackend = async (data) => {
    console.log(data)
    try {
        const response = await axios.post('http://localhost:3000/users', {
            latitude: data.latitude,
            longitude: data.longitude,
            address: data.address,  // Assuming `data.address` is a string
        });

        if (response.status === 201) {
            console.log('Location saved successfully');
            return response.data;
        } else {
            console.error('Failed to save location:', response.statusText);
            throw new Error('Failed to save location');
        }
    } catch (error) {
        console.error('Error saving location:', error.message);
        throw error;
    }
};
// api.js

// export const getSavedLocationsFromBackend = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/users'); // Replace with your actual API endpoint
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching saved locations:', error.message);
//         throw error;
//     }
// };


 export const getSavedLocationsFromBackend = () => {
    return useQuery(['users'],);
};