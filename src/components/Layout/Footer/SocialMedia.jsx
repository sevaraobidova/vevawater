import facebook from '/src/assets/images/icons/facebook.svg'
import instagram from '/src/assets/images/icons/instagram.svg'
export default function SocialMedia({size}) {
    return ( 
        <div className={`${size } flex flex-row content-center gap-2.5   items-center`}>
            <a href="https://www.facebook.com/"  >
                <img src={facebook} alt="facebookIcon" />
            </a>
            <a href="https://www.instagram.com/" >
                <img src={instagram} alt="instagramIcon" />
            </a>
            </div>
     );
}
