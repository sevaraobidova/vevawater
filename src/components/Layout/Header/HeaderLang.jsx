function Language({size}) {
    return ( 
        <form className={`${size}`} action="">
            <div className="flex self-center  py-3 px-3 bg-white rounded-l-3xl sm:bg-red">

            <select className="">
                <option value="rus">Ru</option>
                <option value="uz">Uz</option>
                <option value="eng">En</option>


            </select>
            </div>
            </form>
     );
}

export default Language;