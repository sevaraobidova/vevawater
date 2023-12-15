
export default function Phone({size}) {
    return (
        <div className={size}>
            <p className=" text-h4 font-light">Телефон:</p>
            <a href="tel:+998 55 519 90 90" className="text-h3 font-bold">+998 55 519 90 90</a>
        </div>
    );
}
