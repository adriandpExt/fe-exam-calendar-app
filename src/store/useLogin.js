import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,

  setIsLoggedIn: (status) => set({ isLoggedIn: status }),
  login: (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.clear();
    set({ isLoggedIn: false });
  },
}));

export default useLoginStore;
