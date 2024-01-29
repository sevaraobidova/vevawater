import { Input } from "../../../../../../../components/ui/input"

export function Date() {
  return (
    <div className="w-[30%] sm:w-[100%]">
      <p className="text-gray-inactive text-sm mb-[5px]">Дата доставки:</p>
      <Input type="date" id="inputID1"  className="bg-gray-light border-gray-light rounded-lg text-[18px] h-[50px] w-[100%]"/>
    </div>
  )
}