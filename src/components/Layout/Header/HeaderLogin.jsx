import profile from '/src/assets/images/icons/profile/24/Outline.svg'
function HeaderLogin({size}) {
    return ( 
        <form action="" className={`${size} `}>
            <div className='flex flex-row bg-white w-fill px-2 py-2 w-44 rounded-r-5xl gap-1'>
            <img src={profile} alt="" className='basis-1 '/>
                <button className='text-h5 font-normal break-keep sm:hidden  '> Войти в кабинет</button>

            </div>
        </form>
     );
}

export default HeaderLogin;