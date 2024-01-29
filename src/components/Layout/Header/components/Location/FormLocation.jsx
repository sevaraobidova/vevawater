import { MapModal } from "./MapModal";
import { useState } from "react";
export function FormLocation({ size, visibility }) {

   return (

      <>
         <form name="location" className={`${size} flex items-center justify-between bg-white sm:flex-none`}>

            <MapModal />
         </form>
      </>

   );
}

