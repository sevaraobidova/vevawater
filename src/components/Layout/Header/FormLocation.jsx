import { Button } from "../../ui/button";




export default function FormLocation({size}) {
    return ( 
        <>
          <form className={`${size} flex items-center sm:flex-none`}>
             <div className='flex flex-row  bg-white py-2.5 px-4 rounded-lg gap-2 sm:flex-none w-full'>
                <img src={location } alt="" />
                <select type="text" placeholder='your location'   >
                   <option value="current">current location</option>
                </select>

             </div>
          </form>
        </>
        
     );
}

