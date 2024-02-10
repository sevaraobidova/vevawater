import { useQueryClient,useMutation,useQuery } from "@tanstack/react-query";
import axios from "axios";


 const useSaveLocationToBackend = (latitude,longitude,address) => {
     const mutation = useMutation({
         mutationFn: async () => {
             const response = await axios.post('http://localhost:3000/users', {
                 latitude: latitude,
                 longitude: longitude,
                 address: address,
             });
             return response.data;
         },
         onSuccess: async () => {
             // Handle success, such as updating query data
         },
     });

     return mutation;

    };

    


// api.js


const useGetSavedLocationsFromBackend = () => {
    return useQuery({
        queryKey: ['locationSaved'], // Use a string or number as the query key
        queryFn: async () => {
            const response = await axios.get('http://localhost:3000/locationSaved');
            return response.data;
        },
    });
};
export { useSaveLocationToBackend,useGetSavedLocationsFromBackend}