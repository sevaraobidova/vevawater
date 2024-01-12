import { Label } from "../../../../../../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../../../../../../components/ui/radio-group"

export function RadioOption() {
  return (
    <div className="w-[30%] sm:w-[100%]">
      <p className="text-gray-inactive text-sm mb-[5px] sm:pt-[20px]">Время доставки:</p>
      {/* <Input type="number" placeholder="12" id="inputID2" className="inputBg text-[18px] h-[50px]"/> */}


    <RadioGroup defaultValue="comfortable" className="flex justify-between text-sm h-[50px] w-[100%] sm:flex-col sm:h-[100%]">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" className="resize rounded"/>
        <Label htmlFor="r1" className="leading-5">Днем <br /> с 10:00-15:00</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" className="resize rounded"/>
        <Label htmlFor="r2" className="leading-5">К вечеру <br /> 16:00-20:00</Label>
      </div>
    </RadioGroup>

    </div>
  )
}
