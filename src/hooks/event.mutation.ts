import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent, patchEventStatus, postEvent } from '@/service/events.service';
import toast from 'react-hot-toast';
import { useInvalidateEventListQuery } from "./event.query";


export const useCreateEvent = () => {
    const invalidateEvent = useInvalidateEventListQuery();
    const { mutate : createEvent, isPending : isPendingCreateEvent } = useMutation({
        mutationFn: postEvent,
        onSuccess: () => {
            toast.success("Berhasil Menambahkan Brand")
            invalidateEvent()
        },

    });
    return { createEvent, isPendingCreateEvent };
};


export const useToggleEventStatus = () => {
  const queryClient = useQueryClient(); // ✅ ini ambil dari context yang benar
    const { mutate : toggleIsActive, isPending } = useMutation({
        mutationFn: patchEventStatus,
        onSuccess: () => {
            toast.success("Berhasil Update Status ")

        },

    });
    return { toggleIsActive , isPending};
};


export const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    const { mutate  :  mutateDelete ,isPending : isPendingDelete } = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            toast.success("Berhasil Hapus Data")
            queryClient.invalidateQueries({ queryKey: ["use-get-events"] });
            queryClient.invalidateQueries({ queryKey: ["use-get-event-list"] });

     
        },

    });
    return { mutateDelete, isPendingDelete};
};





