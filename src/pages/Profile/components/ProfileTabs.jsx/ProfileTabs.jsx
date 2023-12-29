import TabsButton from "./TabsButton"
export default function ProfileTabs () {
    return (
        <div>
            <div className="flex">
            <TabsButton name='Ваша корзина' number='0' link='cart'/>
            <TabsButton name='История заказов' number='0' link='history'/>
            <TabsButton name='Личная информация' link='info'/>
            <TabsButton name='Оповещения' number='0' link='status'/>
        </div>
        <hr className="text-[#98A2B3]"/>
        </div>
    )
}