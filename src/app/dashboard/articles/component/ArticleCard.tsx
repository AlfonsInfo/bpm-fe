"use client"

import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { Article } from "@/interfaces/dto.interface";
import { useState } from "react";
import { useDeleteEvent, useToggleEventStatus } from "@/hooks/event.mutation";
import { useRouter } from "next/navigation";
import { ButtonDeleteComponent } from "@/components/button/delete-button/delete-button";
import { FooterCardLayout } from "@/components/cards/FooterCardLayout";

export default function ArticleCard({article} : { article: Article }){
    const [isChecked, setIsChecked] = useState<boolean>(!!article?.is_active);;
    const { toggleIsActive, isPending} = useToggleEventStatus();
    const { mutateDelete, isPendingDelete} = useDeleteEvent();
    const router = useRouter();

    function setChecked(e : boolean){
        setIsChecked(e);
        // toggleIsActive(article.id)
    }

    function goToDetail() {
      router.push(`/dashboard/articles/${article.id}`);
    }


    return (<>
          <Card
            key={article.id}
            title={article.title}
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
                  mutateDelete(article.id)
                }}
                disabled={isPendingDelete} 
                />
            </FooterCardLayout>
            }
          >
          </Card>
    </>)
}