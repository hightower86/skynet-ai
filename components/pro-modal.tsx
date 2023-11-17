import { FC } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useModalStore } from '@/hooks/use-pro-modal';

interface ProModalProps {}

const ProModal: FC<ProModalProps> = ({}) => {
    const { isOpen, onCloseModal } = useModalStore();
    return (
        <Dialog open={isOpen} onOpenChange={onCloseModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        Upgrade to Pro
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ProModal;
