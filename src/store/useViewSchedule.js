import { create } from "zustand";

const useViewSchedule = create((set) => ({
  isModalOpen: false,
  updateModal: false,
  selectedAppointment: null,
  filter: "All",

  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setUpdateModal: (isOpen) => set({ updateModal: isOpen }),
  setSelectedAppointment: (appointment) =>
    set({ selectedAppointment: appointment }),
  setFilter: (filter) => set({ filter }),
}));

export default useViewSchedule;
