"use client";

import { useGetEventList } from "@/hooks/event.query";
import { useState } from "react";
import EventCardPage from "./component/EventCardPage";
import { Event } from "@/interfaces/dto.interface";
import { Skeleton } from "primereact/skeleton";
import { FooterCardLayout } from "@/components/cards/FooterCardLayout";

export default function EventPage() {
  const { isFetchingEvents, events } = useGetEventList();

  function EventGridLayout({ children }: {children : React.ReactNode} ){
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {children}
         </div>
    )
  }

  function EventGridSkeleton() {
    return (
      <EventGridLayout>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border rounded shadow">
            <Skeleton width="80%" height="1.5rem" className="mb-10" />
            <FooterCardLayout>
              <Skeleton width="3rem" height="2rem" />
              <Skeleton width="2rem" height="2rem" />
            </FooterCardLayout>
          </div>
        ))}
        </EventGridLayout>
    );
  }

  return (
    <div className="m-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Event</h1>

      {isFetchingEvents && <EventGridSkeleton />}

      {!isFetchingEvents && (
          <EventGridLayout>
            {events?.map((event: Event) => (
              <EventCardPage key={event.id} event={event} />
            ))}
          </EventGridLayout>
      )}
    </div>
  );
}
