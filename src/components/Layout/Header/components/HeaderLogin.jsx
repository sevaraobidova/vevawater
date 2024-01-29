import profile from '/src/assets/images/icons/profile/24/Outline.svg'
function HeaderLogin() {
    return ( 
        <form name='login' action="" >
            <div className='flex flex-row bg-white w-fill px-2 py-2 w-48 rounded-r-5xl gap-1  sm:w-full sm:rounded-3xl   '>
            <img src={profile} alt="" className='size-10 '/>
                <button className='text-h5 font-normal break-keep sm:hidden  '> Войти в кабинет</button>

            </div>
        </form>
     );
}

export default HeaderLogin;