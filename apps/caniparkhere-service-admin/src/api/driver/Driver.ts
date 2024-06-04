import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type Driver = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  loyaltyPoints: number | null;
  password: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
