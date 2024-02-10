import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchAddress = (latitude, longitude) => {
    return useQuery({
        queryKey: [['fetchAddress'], latitude, longitude],
        queryFn: async () => {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBj-vFr7WRFR5xf025DfsU0IiNiIpzSJ2M`
            );
            return response.data;
        },
        enabled: latitude !== null && longitude !== null,
    });
};

export default useFetchAddress;
