import { Select,SelectContent,SelectTrigger,SelectValue, SelectGroup, SelectItem } from "/src/components/ui/select";
import { useSaveLocationToBackend,useGetSavedLocationsFromBackend } from "./api";
import { useEffect, useState } from "react";
export function SelectLocation({ onSelect, onMapButtonClick }) {
    const getSavedLocationsQuery = useGetSavedLocationsFromBackend();
    const saveLocationMutation = useSaveLocationToBackend();
    const [savedLocations, setSavedLocations] = useState([]);
    const [isSelectExpanded, setIsSelectExpanded] = useState(false);
    console.log(saveLocationMutation);
    useEffect(() => {
        // Fetch saved locations from the backend when the component mounts
        getSavedLocationsQuery.refetch();
    }, [getSavedLocationsQuery.refetch]);
    useEffect(() => {
        if (getSavedLocationsQuery.data) {
            // Filter out duplicate addresses
            const uniqueLocations = getSavedLocationsQuery.data.filter(
                (location, index, self) => {
                    return (
                        index ===
                        self.findIndex((t) => t.address === location.address)
                    );
                }
            );

            setSavedLocations(uniqueLocations);
        }
    }, [getSavedLocationsQuery.data]);

    const handleLocationSelect = async (selectedValue) => {
        try {
            // Use the saveLocationMutation to save the location to the backend
            await saveLocationMutation.mutateAsync({
                latitude: selectedValue.latitude,
                longitude: selectedValue.longitude,
                address: selectedValue.address,
            });

            // Pass the selected location back to the parent component
            onSelect(selectedValue);

            // Collapse the select after selecting an option
            setIsSelectExpanded(false);
        } catch (error) {
            console.error('Error saving location:', error.message);
        }
    };

    const toggleSelectExpansion = () => {
        setIsSelectExpanded((prevExpanded) => !prevExpanded);
    };
   
    return (
        <>
            
        <Select
            expanded={isSelectExpanded}
            onSelect={handleLocationSelect}
        onBlur={()=>setIsSelectExpanded(false)}>
            <SelectTrigger
                className={`w-full ${isSelectExpanded ? " bg-white" : ""}`}
                    onClick={toggleSelectExpansion}>
                <SelectValue placeholder="Select a Location" />
                {isSelectExpanded && (
                    <div>
                            <button ><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
                    </div>
                )}
            </SelectTrigger>
            {isSelectExpanded && (
                <SelectContent>
                    <SelectGroup>
                        {savedLocations.map((location,i) => (
                            <SelectItem key={i} value={location.id}>
                                {location.address}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            )}
        </Select>
        
   </>
    )
}