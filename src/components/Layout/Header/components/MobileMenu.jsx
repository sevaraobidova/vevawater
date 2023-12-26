import { NavLink ,Link} from "react-router-dom";
import { Button } from "../../../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "../../../ui/sheet";
import menu from "/src/assets/images/icons/bars/24/Outline.svg";
import Phone from "../../Footer/components/Phone";
import SocialMedia from "../../Footer/components/SocialMedia";
export default function Menu({ size ,variant}) {
    return (

        <div className={`${size} ${variant}`}>
            <Sheet  >
                <SheetTrigger >
                    <Button variant="ghost" size="icon">
                        <img src={menu} alt="" />
                    </Button>

                </SheetTrigger>
                <SheetContent side='left' className="py-24 px-4 z-[999]">
                    <SheetHeader>
                        <ul className="flex flex-col gap-5">
                            <li >
                                <NavLink to='/' className='text-gray-inactive  aria-[current=page]:activeLink '>Главная</NavLink>
                            </li>
                            <li >
                                <NavLink to='/shop' className='text-gray-inactive  aria-[current=page]:activeLink '>Магазин товаров</NavLink>
                                
                            </li>
                            <li>
                                <Link>Договор оферты</Link>

                            </li>
                            <li>
                                <Link>Сертификаты</Link>
                            </li>
                        </ul>
                    </SheetHeader>
                    <SheetFooter className="mt-14.5 ">
                        <div className="flex flex-col items-start gap-2">

                        <Phone position='left' />
                        <SocialMedia size="items-left" />
                        </div>
                        
                    </SheetFooter>

                </SheetContent>
            </Sheet>
        </div>

    );
}

