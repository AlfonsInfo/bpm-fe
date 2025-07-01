"use client"

import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { Event as IEVENT} from "@/interfaces/dto.interface";
import { useState } from "react";
import { useDeleteEvent, useToggleEventStatus } from "@/hooks/event.mutation";
import { useRouter } from "next/navigation";
import { ButtonDeleteComponent } from "@/components/button/delete-button/delete-button";
import { FooterCardLayout } from "@/components/cards/FooterCardLayout";

export default function EventCardPage({event } : { event: IEVENT }){
    const [isChecked, setIsChecked] = useState<boolean>(!!event?.is_active);;
    const { toggleIsActive, isPending} = useToggleEventStatus();
    const { mutateDelete, isPendingDelete} = useDeleteEvent();
    const router = useRouter();

    function setChecked(e : boolean){
        setIsChecked(e);
        toggleIsActive(event.id)
    }

    function goToDetail() {
      router.push(`/dashboard/events/${event.id}`);
    }


    return (<>
          <Card
            key={event.id}
            title={event.name}
            className="w-full"
            onClick={goToDetail}
            footer={
              <FooterCardLayout>
                <InputSwitch
                  checked={isChecked}
                  onChange={(e) => setChecked(e.value as boolean)}
                  disabled={isPending}
                  onClick={(e) => e.stopPropagation()}
                />
                <ButtonDeleteComponent onClick={(e) => {
                  e.stopPropagation();
                  mutateDelete(event.id)
                }}
                disabled={isPendingDelete} 
                />
            </FooterCardLayout>
            }
          >
          </Card>
    </>)
}