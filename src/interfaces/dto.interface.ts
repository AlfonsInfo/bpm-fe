export interface ErrorResponseDto<T> {
    success: boolean,
    message: string,
    errors: T
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationMetaDto<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Event {
  id: number
  name: string
  start_date: string
  end_date: string
  event_type: string
  event_scope: string
  event_category_id: number
  is_active: boolean
}

export interface User {
  id: number
  name: string
  wa_number: string
  status: string
  is_activated: number
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}


export interface EventCategory {
  id : number,
  name : string
}

export interface CreateEvent {
  name: string;
  is_singleday: boolean;
  date?: String | null |  Date;
  start_date?:   null | Date ; 
  end_date?:  null | Date;
  event_type: 'OFFLINE' | 'ONLINE';
  event_scope: 'INTERNAL' | 'EXTERNAL' | 'PUBLIC';
  event_category_id: number | null;
}

export interface GroupCell {
  id: number
  name: string
  description: string
  cell_birthday : Date
  members : string[]
}

export interface GroupCellMember {
  id : number 
  name : string
}