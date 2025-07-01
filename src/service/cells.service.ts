import { Event, GroupCell, PaginationMetaDto } from "@/interfaces/dto.interface";
import { clientWithAuth, unwrapResp } from "@/lib/client/axios.instance";



export const endpointGroupCells = "/v1/group-cells";
export const endpointGroupCellList = "/v1/group-cell-list";

export const getEvents = async () : Promise<PaginationMetaDto<Event>> => {
    return unwrapResp(await clientWithAuth.get(endpointGroupCells));  
}

export const getGroupCellById = async (id : number) : Promise<GroupCell> => {
    return unwrapResp(await clientWithAuth.get(`${endpointGroupCells}/${id}`));  
}

export const getGroupCellList = async () : Promise<Array<GroupCell>> => {
    return unwrapResp(await clientWithAuth.get(endpointGroupCellList)); 
}

export const patchEventStatus = async (id : number) : Promise<any> =>{
    return unwrapResp(await clientWithAuth.patch(`${endpointGroupCells}/${id}/status`))
}

export const deleteEvent = async (id : number) : Promise<any> =>{
    return unwrapResp(await clientWithAuth.delete(`${endpointGroupCells}/${id}`))
}