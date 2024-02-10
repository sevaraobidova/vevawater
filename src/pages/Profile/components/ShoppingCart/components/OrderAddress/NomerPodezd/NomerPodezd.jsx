import { Input } from "../../../../../../../components/ui/input"

export function NomerPodezd() {
  return (
    <div className="w-[14%] sm:w-[100%]">
      <p className="text-gray-inactive text-sm mb-[5px] sm:pt-[20px]">Номер подъезда:</p>
      <Input type="number" placeholder="12" id="inputID2" className="bg-gray-light border-gray-light rounded-lg text-[18px] h-[50px]"/>
    </div>
  )
}
