import { BookingCreateNestedManyWithoutDriversInput } from "./BookingCreateNestedManyWithoutDriversInput";
import { ReviewCreateNestedManyWithoutDriversInput } from "./ReviewCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  bookings?: BookingCreateNestedManyWithoutDriversInput;
  email?: string | null;
  fullName?: string | null;
  loyaltyPoints?: number | null;
  password?: string | null;
  reviews?: ReviewCreateNestedManyWithoutDriversInput;
};
