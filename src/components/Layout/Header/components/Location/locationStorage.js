
import useGeolocation from "/src/hooks/useGeolocation";
import { useQuery } from 'react-query';
import { saveLocationToBackend } from "./api";
import axios from "axios";

const { latitude, longitude, error } = useGeolocation();
const { isLoading, isError } = useQuery({
    queryKey: [['saveLocation'], latitude, longitude],
    queryFn: () =>
        saveLocationToBackend({
            latitude,
            longitude,
            address: {
                street: 'Your street data',
                apartment: 'Your apartment data',
            },
        }),
});


