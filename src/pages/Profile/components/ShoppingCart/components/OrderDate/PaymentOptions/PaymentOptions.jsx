import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select"


export function PaymentOptions() {
  return (
    <div className="w-[25%] sm:w-[100%]">
      <p className="text-gray-inactive text-sm mb-[5px] sm:pt-[20px]">Оплата:</p>

      <Select>
        <SelectTrigger className="bg-gray-light border-gray-light rounded-lg w-[100%] h-[50px] text-[18px]">
          <SelectValue placeholder="Наличными" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="naqd">Наличными</SelectItem>
            <SelectItem value="card">карта</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
