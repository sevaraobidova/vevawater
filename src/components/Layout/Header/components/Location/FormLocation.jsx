import { MapModal } from "./MapModal";

export function FormLocation({ size, visibility }) {
   return (

      <>
         <form className={`${size} flex items-center sm:flex-none`}>

            <MapModal visibility={visibility } />
         </form>
         
         {/* <form className={`${size} flex items-center sm:flex-none`} >
            <div className={`flex flex-row ${visibility} bg-white py-2.5 px-4 w-48 rounded-lg gap-2 sm:flex-none sm:w-full`}>
               <img src={location} alt="" />
               <select type="text" placeholder='your location' className=" sm:w-full" onChange={handleClick}   >
                  <option value="current">current location</option>
                  <option value="current">current location</option>
               </select>

            </div>
         </form> */}
      </>

   );
}

