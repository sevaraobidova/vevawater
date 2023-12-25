
export default function Phone({position}) {
    return (
        <div >
            <p className={` text-h4 font-300 text-${position}`}>Телефон:</p>
            <a href="tel:+998 55 519 90 90" className="text-h3 font-bold sm:text-h4">+998 55 519 90 90</a>
        </div>
    );
}
