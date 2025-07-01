import { CreateEvent, Event, PaginationMetaDto } from "@/interfaces/dto.interface";
import { clientWithAuth, unwrapResp } from "@/lib/client/axios.instance";



export const endpointEvents = "/v1/events";
export const endpointEventList = "/v1/event-list";

export const getEvents = async () : Promise<PaginationMetaDto<Event>> => {
    return unwrapResp(await clientWithAuth.get(endpointEvents));  
}


export const getEventById = async (id : number) : Promise<Event> => {
    return unwrapResp(await clientWithAuth.get(`${endpointEvents}/${id}`));  
}

export const getEventList = async (withCategory : boolean) : Promise<Array<Event>> => {
    let params = {"withCategory" : withCategory}
    return unwrapResp(await clientWithAuth.get(endpointEventList,{params : params} )); 
}


export const postEvent = async (data: any) => {
   return unwrapResp(await clientWithAuth.post(endpointEvents, data));
};

export const patchEventStatus = async (id : number) : Promise<any> =>{
    return unwrapResp(await clientWithAuth.patch(`${endpointEvents}/${id}/status`))
}

export const deleteEvent = async (id : number) : Promise<any> =>{
    return unwrapResp(await clientWithAuth.delete(`${endpointEvents}/${id}`))
}