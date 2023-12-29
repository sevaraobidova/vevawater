import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "/src/components/ui/dialog";

import SelectComponent from "./SelectComponent";
import MapComponent from "./MapComponent";
import { Button } from "/src/components/ui/button";

export function MapModal({visibility}) {

        return (
            <div className={`${visibility} sm:w-full`}>
                <Dialog >
                    <DialogTrigger asChild>
                        <Button><SelectComponent /></Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Select Location
                          </DialogTitle>
                        </DialogHeader>
                        <MapComponent/>
                    </DialogContent>
             </Dialog>
            </div>
         )
     }

