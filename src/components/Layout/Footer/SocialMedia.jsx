import facebook from '/src/assets/images/icons/facebook.svg'
import instagram from '/src/assets/images/icons/instagram.svg';
import telegram from '/src/assets/images/icons/telegram.svg';

export default function SocialMedia({size}) {
    return ( 
        <div className={size}>
            <div className='flex flex-row content-center gap-2.5'>
                <a href="https://www.facebook.com/" >
                    <img src={facebook} alt="facebookIcon"  />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="instagramIcon" />
                </a>

                <div className='flex flex-row  content-center border rounded-6xl border-blue gap-x-2.5 py-1.5 px-6' >
                
                        <img src={telegram} alt="telegramIcon" />
                    
                    <div className='flex flex-col'>
                        <h5 className='text-h5 font-normal text-light-black'>Заказать через </h5>
                        <h5 className=' text-h5 font-bold text-black'>телеграмм бот</h5>
                  </div>
                </div>

            </div>

        </div>
     );
}
