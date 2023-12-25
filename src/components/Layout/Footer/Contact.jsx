import SocialMedia from './SocialMedia';
import Telegram from './Telegram';


export default function Contact({size}) {
    return ( 
        <div className={`${size} flex items-center gap-2 `}>
            <SocialMedia />

            <Telegram visibility='hidden' color='#1CBBEE'/>

            </div>

        
     );
}
