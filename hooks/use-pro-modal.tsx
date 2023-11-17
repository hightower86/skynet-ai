import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ModalStore {
    isOpen: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
}

export const useModalStore = create<ModalStore>()(
    devtools((set) => ({
        isOpen: false,
        onOpenModal: () => set({ isOpen: true }),
        onCloseModal: () => set({ isOpen: false }),
    }))
);
