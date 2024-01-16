import TabsButton from "./TabsButton"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select"
export default function TabsMobile () {
    const handleSelectChange = (selectedValue) => {
    const newPathname = `/profile/${selectedValue}`;
    window.history.pushState({}, '', newPathname);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
    return (
       <Select onValueChange={(event) => handleSelectChange(event)}>
        <SelectTrigger className="w-[100%] hidden sm:flex bg-white border-none" >
        <SelectValue placeholder="Select"/>
        </SelectTrigger> 
        <SelectContent className='bg-white border-blue'>
            <SelectItem value='cart'><TabsButton name='Ваша корзина' number='0' link='cart'/></SelectItem>
            <SelectItem value='history'><TabsButton name='История заказов' number='0' link='history'/></SelectItem>
            <SelectItem value='info'><TabsButton name='Личная информация' link='info'/></SelectItem>
            <SelectItem value='status'><TabsButton name='Оповещения' number='0' link='status'/></SelectItem>
        </SelectContent>
       </Select>
    )
}