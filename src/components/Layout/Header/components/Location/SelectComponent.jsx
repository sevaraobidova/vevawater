import { useState, useEffect } from "react";
import { reverseGeocode, formatLocationForStorage } from '/src/utilities/geocodingService';
import { getSavedLocations,saveLocation } from "/src/utilities/locationStorage";
import MapComponent from "./MapComponent";
 const SelectComponent = ({visibility}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [savedLocations, setSavedLocations] = useState([]);

    useEffect(() => {
        setSavedLocations(getSavedLocations());

    }, []);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setIsMapOpen(true);
    };

    const handleCloseMap = () => {
        setIsMapOpen(false);
    };

    const handleSaveLocation = async (latitude, longitude) => {
        try {
            const locationAddress = await reverseGeocode(latitude, longitude);
            const formattedLocation = formatLocationForStorage(latitude, longitude, locationAddress);
            saveLocation(formattedLocation);
            setSavedLocations(getSavedLocations());
        } catch (error) {
            console.error('Error saving location:', error);
        }
    };
    return (
        <div className={visibility}>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                {savedLocations.map((location, index) => (
                    <option key={index} value={`${location.latitude},${location.longitude}`}>
                        {location.address.city}, {location.address.road}
                    </option>
                ))}
            </select>

            {isMapOpen && (
                <MapComponent
                    location={selectedOption.split(',').map(Number)}
                    onSaveLocation= {handleSaveLocation}
                    onClose={handleCloseMap}
                    
                />
            )}
       </div>
   )
 }
export default SelectComponent;