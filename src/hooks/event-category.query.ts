import { useQuery,  } from "@tanstack/react-query";
import { Event, EventCategory,  } from '@/interfaces/dto.interface';
import { getEventCategories } from "@/service/event-category.service";

export const USE_GET_EVENTS = "use-get-events";
export const USE_GET_EVENT_BY_ID ="use-get-event-by-id";
export const USE_GET_EVENT_CATEGOREIS = "use-get-categories";


export function useGetEventCategories(withCategory : boolean = false) : {isFetchingEventCategories : boolean , eventCategories : Array<EventCategory> | undefined} {
    const { isFetching  : isFetchingEventCategories,  data : eventCategories } = useQuery({
        queryKey: [USE_GET_EVENT_CATEGOREIS, withCategory],
        queryFn: () => getEventCategories(withCategory),
    });
    return { isFetchingEventCategories, eventCategories} 
}
