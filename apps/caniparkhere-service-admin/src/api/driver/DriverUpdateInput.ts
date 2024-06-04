import { BookingUpdateManyWithoutDriversInput } from "./BookingUpdateManyWithoutDriversInput";
import { ReviewUpdateManyWithoutDriversInput } from "./ReviewUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  bookings?: BookingUpdateManyWithoutDriversInput;
  email?: string | null;
  fullName?: string | null;
  loyaltyPoints?: number | null;
  password?: string | null;
  reviews?: ReviewUpdateManyWithoutDriversInput;
};
