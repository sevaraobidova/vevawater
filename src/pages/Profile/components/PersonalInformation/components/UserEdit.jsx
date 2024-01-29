import EditButton from "./EditButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "/src/components/ui/dialog";
import edit from '/src/assets/images/edit.svg';
import MyButton from "/src/components/global/Button/Button";


export default function UserEdit () {
    return (
        <Dialog>
            <DialogTrigger>
                <EditButton img={edit} name='Редактировать'/>
            </DialogTrigger>
            <DialogContent className='rounded-[20px] px-[28px]'>
                <DialogHeader className="text-[32px] font-bold text-start">Редактировать</DialogHeader>
                <DialogFooter className='w-full'>
                    <DialogClose asChild>
                        <MyButton buttonClasses='w-[100%]'>Сохранить</MyButton>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}