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
            <DialogTrigger>{props.name}</DialogTrigger>
            <DialogContent className="rounded-[20px]">
                <DialogHeader>bla bla</DialogHeader>
            </DialogContent>
        </Dialog>
    )
}