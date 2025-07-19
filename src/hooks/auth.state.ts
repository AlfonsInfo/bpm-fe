import { create } from "zustand";

interface AuthState {
  passLoginProcess : boolean 
  setPassProcessLogin: (token: boolean ) => void;
  clearPassProcessLogin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  passLoginProcess: false,
  setPassProcessLogin: (passLoginProcess) => set({ passLoginProcess }),
  clearPassProcessLogin: () => set({ passLoginProcess : false }),
}));