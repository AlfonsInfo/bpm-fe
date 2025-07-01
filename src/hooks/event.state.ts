import { useQueryClient } from "@tanstack/react-query";
import { create } from "zustand";

type EventState = {
  visibleEventCreateDialog: boolean;
  visibleEventEditDialog: boolean;
  selectedEvent: Event | undefined | null;
  setSelectedEvent: (data : Event) => void;
  showCreateDialog: () => void;
  showEditDialog: () => void;
  hideDialog: () => void;
  hideEditDialog: () => void;
};

export const useEventState = create<EventState>((set) => ({
  visibleEventCreateDialog: false,
  visibleEventEditDialog: false,
  selectedEvent : null,
  setSelectedEvent: (data) => set({selectedEvent: data}),
  showCreateDialog: () => set({ visibleEventCreateDialog: true }),
  showEditDialog: () => set({ visibleEventEditDialog: true }),
  hideDialog: () => set({ visibleEventCreateDialog: false }),
  hideEditDialog: () => set({ visibleEventEditDialog: false }),
}));