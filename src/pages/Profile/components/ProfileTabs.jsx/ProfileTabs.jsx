import TabsButton from "./TabsButton"
import TabsMobile from "./TabsMobile"
export default function ProfileTabs () {
    return (
       <div>
         <div className="sm:hidden">
            <div className="flex">
            <TabsButton name='Ваша корзина' number='0' link='cart'/>
            <TabsButton name='История заказов' number='0' link='history'/>
            <TabsButton name='Личная информация' link='info'/>
            <TabsButton name='Оповещения' number='0' link='status'/>
        </div>
        <hr className="text-[#98A2B3]"/>
        </div>
        <div className="bg-gray-light justify-center p-[15px] rounded-[10px] hidden sm:flex">
        <TabsMobile/>
        </div>
       </div>
    )
}