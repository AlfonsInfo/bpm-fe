"use client"

import { Card } from "primereact/card";
import { Event as IEVENT} from "@/interfaces/dto.interface";
import { useState } from "react";
import { useToggleEventStatus } from "@/hooks/event.mutation";
import { useRouter } from "next/navigation";


export default function CellCardPage({event } : { event: IEVENT }){
    const [isChecked, setIsChecked] = useState<boolean>(event.is_active);
    const { toggleIsActive, isPending} = useToggleEventStatus();
    const router = useRouter();
    
    function setChecked(e : boolean){
        setIsChecked(e);
        toggleIsActive(event.id)
    }

    function goToDetail() {
      router.push(`/dashboard/cells/${event.id}`);
    }
    
    function CardHeader(){
      return <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    }

    return (<>
          <Card
            key={event.id}
            title={event.name}
            className="w-full"
            onClick={goToDetail}
            header={<CardHeader/>}
            // footer={<>
            //         <InputSwitch 
            //         checked={isChecked} 
            //         onChange={(e) => setChecked(e.value as boolean)} 
            //         disabled={isPending} 
            //         onClick={(e) => e.stopPropagation()} 
            //         />
            // </>}
          >
          </Card>
    </>)
}