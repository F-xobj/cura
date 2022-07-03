export interface Clinic {
  info: Info;
  insurance: string[];
  rating: Rating;
  reviews: Reviews;
  schedule: Schedule[];
  status: number;
}

export interface Info {
  name: Name;
  about: string;
  specialty: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Rating {
  score: string;
  from_visitors_count: number;
}

export interface Reviews {
  name: string;
  rating: number;
  review: string;
  date: string;
}
export interface DateCarouselProps {
  clinic: Schedule[];
}

export interface Schedule {
  availability: Availability;
  unavailable: Available[];
  available: Available[];
}

export interface Availability {
  label: string;
  month: Month;
  year: string;
  day: string;
  date: string;
  available: number;
  unavailable: number;
  total: number;
}

export enum Month {
  August = "August",
  July = "July",
}

export interface Available {
  from_unix: number;
  to_unix: number;
}

export interface DataToRenderProps {
  isDisable: boolean;
}
