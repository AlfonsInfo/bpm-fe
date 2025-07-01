import { create } from "zustand";

interface SidebarState{
    isVisible : boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isVisible: true,
  toggleSidebar: () => set((state) => ({ isVisible: !state.isVisible })),
  closeSidebar: () => set({ isVisible: false }),
  openSidebar: () => set({ isVisible: true }),
}));