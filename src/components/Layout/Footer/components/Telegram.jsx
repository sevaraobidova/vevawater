export default function Telegram({ color, visibility, bg }) {
    const handleCLick = () => {
        window.location.href = 'https://t.me/vevauz_bot';
    }
    return (
        <div className={`${bg} h-14 px-6 py-1 border rounded-6xl
          border-blue border-opacity-50
          hover:border-opacity-100  sm:${visibility} sm:px-0`}>
            <div className={` flex
         gap-2.5 items-center
         content-center
         sm:justify-center
        sm:gap-5
          `}
                onClick={handleCLick}>


                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="telegram 1" d="M9.4174 13.4619L9.0204 19.046C9.58841 19.046 9.83441 18.802 10.1294 18.509L12.7925 15.9639L18.3106 20.005C19.3226 20.569 20.0357 20.272 20.3087 19.074L23.9308 2.1016L23.9318 2.1006C24.2528 0.604565 23.3907 0.0195506 22.4047 0.386559L1.1142 8.53775C-0.33883 9.10177 -0.31683 9.91179 0.867199 10.2788L6.31033 11.9718L18.9536 4.06065C19.5486 3.66664 20.0897 3.88464 19.6446 4.27865L9.4174 13.4619Z"
                        fill={color} />
                </svg>

                <div className='flex flex-col sm:text-center '>
                    <h5 className='text-h5 font-thin text-light-black sm:text-white'>Заказать через </h5>
                    <h5 className=' text-h5 font-bold text-black sm:text-white'>телеграмм бот</h5>
                </div>
            </div>
        </div>
    );
}
