import { AxiosResponse } from 'axios';
import { useQuery } from "@tanstack/react-query";
import { getEventById, getEventList, getEvents } from '@/service/events.service';
import { Event, GroupCell, PaginationMetaDto } from '@/interfaces/dto.interface';
import { getGroupCellById, getGroupCellList } from '@/service/cells.service';
// import { PaginatedFormsResponse, ReqPageable } from "../interface/pageable.interface";

// import { Brand, Filter } from "../interface/dto.interface";


export function useGetGroupCellList() : {isFetchingGroupCellList : boolean , groupCell : Array<GroupCell> | undefined} {
    const { isFetching  : isFetchingGroupCellList,  data : groupCell } = useQuery({
        queryKey: ["use-get-group-cell-list"],
        queryFn: () => getGroupCellList(),
        
    });

    return { isFetchingGroupCellList, groupCell } 
}


export function useGetGroupCellById(id: number | string | undefined): {
  isFetchingGroupCellById: boolean;
  groupCell: GroupCell | undefined;
} {
  const { isFetching: isFetchingGroupCellById, data: groupCell } = useQuery<GroupCell>({
    queryKey: ["use-get-group-cell-by-id", id],
    queryFn: () => getGroupCellById(Number(id)), 
    enabled: !!id,
  });

  return { isFetchingGroupCellById, groupCell };
}




