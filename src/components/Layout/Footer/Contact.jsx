import SocialMedia from './SocialMedia';
import telegram from '/src/assets/images/icons/telegram.svg';

export default function Contact({size}) {
    return ( 
        <div className={`${size} flex gap-2`}>
            <SocialMedia />

                <div className='flex flex-row  content-center border rounded-6xl border-blue border-opacity-50 hover:border-opacity-100 gap-x-2.5 py-1.5 px-6' >
                
                        <img src={telegram} alt="telegramIcon" className='hover:' />
                    
                    <div className='flex flex-col items-center self-center'>
                        <h5 className='text-h5 font-normal text-light-black'>Заказать через </h5>
                        <h5 className=' text-h5 font-bold text-black'>телеграмм бот</h5>
                  </div>
                </div>

            </div>

        
     );
}
