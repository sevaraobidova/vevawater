import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
  } from "/src/components/ui/drawer"
  
export default function FooterModalMobile (props) {
    return (
       <Drawer>
        <DrawerTrigger className='text-h6 font-link underline'>{props.name}</DrawerTrigger>
        <DrawerContent className="rounded-[20px] bg-white">
                <DrawerHeader className='mx-auto text-[24px]'>{props.header}</DrawerHeader>
                <iframe src={props.file} className="w-[100%] h-[80vh] rounded-[20px]"></iframe>
            </DrawerContent>
       </Drawer>
    )
}