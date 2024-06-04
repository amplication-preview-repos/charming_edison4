import { JsonValue } from "type-fest";
import { Booking } from "../booking/Booking";
import { Event } from "../event/Event";
import { Review } from "../review/Review";

export type ParkingSpace = {
  availability: JsonValue;
  bookings?: Array<Booking>;
  createdAt: Date;
  event?: Event | null;
  id: string;
  location: string | null;
  owner: string | null;
  photos: JsonValue;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
