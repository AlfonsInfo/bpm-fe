"use client"
import { useGetEventById } from "@/hooks/event.query";
import { useParams } from "next/navigation"

export default function eventDetailPage(){
    // get params
    const params = useParams();
    const id  = params.id;
    const  { isFetchingEventById, event } = useGetEventById(Number(id));
    
    return <div>Event ID: {id}</div>;
}