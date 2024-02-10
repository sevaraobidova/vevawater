import EditButton from "./EditButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "/src/components/ui/dialog";
import edit from '/src/assets/images/edit.svg';
import MyButton from "/src/components/global/Button/Button";
import MyInput from "./MyInput";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller, FormProvider } from "react-hook-form"
import { z } from "zod"


export default function UserEdit () {

    return (
        <Dialog>
            <DialogTrigger>
            <EditButton img={edit} name='Редактировать' style='sm:w-[100%]'/>
            </DialogTrigger>
            <DialogContent className='rounded-[20px] px-[28px]'>
                <DialogHeader className="text-[32px] font-bold text-start">Редактировать</DialogHeader>
               
               
                <DialogFooter className='w-full'>
                    <DialogClose asChild>
                        <MyButton buttonClasses='w-[100%]' type='submit'>Сохранить</MyButton>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
                    }



 