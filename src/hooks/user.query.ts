import {  User } from '@/interfaces/dto.interface';
import { getUsers } from '@/service/user.service';
import { useQuery } from '@tanstack/react-query';

export const USE_GET_USER = "user-get-user";

export const endpointUsers = "/v1/users";

export function useGetUsers() : {isFetchingUsers : boolean , users : Array<User> | undefined} {
    const { isFetching  : isFetchingUsers,  data : users } = useQuery({
        queryKey: [USE_GET_USER],
        queryFn: () => getUsers(),
        
    });

    return { isFetchingUsers, users } 
}