import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "/src/components/ui/dialog"
  

export default function FooterModal (props) {
    return (
        <Dialog>
            <DialogTrigger className='text-h6 font-link underline'>{props.name}</DialogTrigger>
            <DialogContent className="rounded-[20px]">
                <DialogHeader>{props.header}</DialogHeader>
                <iframe src={props.file} className="w-[100%] h-[80vh] rounded-[20px]"></iframe>
            </DialogContent>
        </Dialog>
    )
}