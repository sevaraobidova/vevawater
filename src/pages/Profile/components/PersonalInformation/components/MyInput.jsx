import { Input } from "/src/components/ui/input";

export default function MyInput (props) {
    return (
        <Input type={props.type} placeholder={props.text} className="bg-gray-light border-none w-fit font-roman text-[18px]"/>
    )
}