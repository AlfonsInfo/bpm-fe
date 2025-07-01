import { CreateEvent, Event, EventCategory, PaginationMetaDto } from "@/interfaces/dto.interface";
import { clientWithAuth, unwrapResp } from "@/lib/client/axios.instance";



export const endpointEventCategories = "/v1/event-categories";

export const getEventCategories = async (withCategory : boolean) : Promise<Array<EventCategory>> => {
    return unwrapResp(await clientWithAuth.get(endpointEventCategories)); 
}

