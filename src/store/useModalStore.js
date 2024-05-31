import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  modalName: "",
  openModal: (modal) => set({ modalName: modal, isOpen: true }),
  closeModal: () => set({ modalName: "", isOpen: false }),
}));

export default useModalStore;
