import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "/src/components/ui/dialog";
import MapComponent from "./MapComponent";
import { Button } from "/src/components/ui/button";
import { SelectLocation } from "./SelectLocation";
import { useState } from "react";
export function MapModal({visibility,onCloseMapModal}) {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const handleLocationSelect = (selectedValue) => {
        // Update the selected location in the state
        setSelectedLocation(selectedValue);
        setIsMapOpen(true);
    };
    const handleCloseMap = () => {
        setIsMapOpen(false);
    };
    
    const handleMapButtonClick = () => {
        // Open the MapModal when the map button is clicked
        setIsMapModalOpen(true);
    };
    const handleCloseMapModal = () => {
        // Close the MapModal when it's closed
        setIsMapModalOpen(false);
    };
        return (
            <div className={`${visibility} sm:w-full`}>
                <Dialog >
                    <DialogTrigger asChild>
                        <Button><SelectLocation onSelect={selectedLocation} onMapButtonClick={handleMapButtonClick}/></Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Choose your location
                            </DialogTitle>
                        </DialogHeader>
                        <MapComponent selectedLocation={selectedLocation} onCloseMap={handleCloseMap} />
                    </DialogContent>
             </Dialog>
            </div>
         )
     }

