import { AxiosResponse } from 'axios';
import {  User } from '@/interfaces/dto.interface';
import { clientWithAuth, unwrapResp } from '@/lib/client/axios.instance';

export const endpointGroupCells = "/v1/users";

export const getUsers = async () : Promise<Array<User>> => {
    return unwrapResp(await clientWithAuth.get(endpointGroupCells));  
}