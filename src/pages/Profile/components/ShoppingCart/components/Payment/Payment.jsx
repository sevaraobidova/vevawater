import MyButton from "../../../../../../components/global/Button/Button";

export default function Payment() {
    return (
      <div>
        <div className='container mx-auto border-dashed border-gray-inactive w-[100%] border-t-2 pt-[25px]'>
            <p className="text-gray-inactive text-[18px] mb-[5px] sm:text-center">К оплате:</p>
            <div className="flex justify-between sm:flex-col sm:items-center">
                <div className="text-[32px] text-blue sm:text-[24px] sm:pb-[15px]">45 000 сум</div>
                <MyButton variant="default">Оформить заказ</MyButton>
            </div>
        </div>
      </div>
    );
  }