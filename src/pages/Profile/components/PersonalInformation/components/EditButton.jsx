import { Button } from "/src/components/ui/button";


export default function EditButton (props) {
    return (
        <Button className="bg-gray-light text-[18px] font-bold px-[38px] py-[12px] flex gap-[10px]"><img src={props.img} alt="icon" className="w-[24px]"/>{props.name}</Button>
    )
}