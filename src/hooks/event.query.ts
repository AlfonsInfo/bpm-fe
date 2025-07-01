import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getEventById, getEventList, getEvents } from '@/service/events.service';
import { Event, PaginationMetaDto } from '@/interfaces/dto.interface';

export const USE_GET_EVENTS = "use-get-events";
export const USE_GET_EVENT_BY_ID ="use-get-event-by-id";
export const USE_GET_EVENT_LIST = "use-get-event-list";


export function useGetEvents() : {isFetchingEvents : boolean , events : PaginationMetaDto<Event> | undefined} {
    // const {searchBrand} = useBrandState();
    // const filter : Filter[] = [{key: "name", value: searchBrand}]
    const { isFetching  : isFetchingEvents,  data : events } = useQuery({
        queryKey: [USE_GET_EVENTS],
        queryFn: () => getEvents(),
        
    });

    return { isFetchingEvents, events } 
}

export function useGetEventById(id: number | string | undefined): {
  isFetchingEventById: boolean;
  event: Event | undefined;
} {
  const { isFetching: isFetchingEventById, data: event } = useQuery<Event>({
    queryKey: [USE_GET_EVENT_BY_ID, id],
    queryFn: () => getEventById(Number(id)), // ✅ jalankan fungsinya, jangan return function
    enabled: !!id,
  });

  return { isFetchingEventById, event };
}

export function useGetEventList(withCategory : boolean = false) : {isFetchingEvents : boolean , events : Array<Event> | undefined} {
    const { isFetching  : isFetchingEvents,  data : events } = useQuery({
        queryKey: [USE_GET_EVENT_LIST, withCategory],
        queryFn: () => getEventList(withCategory),
        
    });
    return { isFetchingEvents, events } 
}

export function useInvalidateEventListQuery() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [USE_GET_EVENT_LIST] });
}


