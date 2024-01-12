import { Input } from "../../../../../../../components/ui/input"

export function NomerTelephone() {
  return (
    <div className="w-[25%] sm:w-[100%]">
      <p className="text-gray-inactive text-sm mb-[5px] sm:pt-[20px]">Номер телефона для связи:</p>
      <div className="mb-[20px]">
        <Input type="number" placeholder= "+ 998 90 124-25-25" id="inputID1" className="bg-gray-light border-gray-light rounded-lg h-[50px] text-[18px]"/>
      </div>
    </div>
  )
}
