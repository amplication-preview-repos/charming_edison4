import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutParkingSpacesInput } from "./BookingCreateNestedManyWithoutParkingSpacesInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ReviewCreateNestedManyWithoutParkingSpacesInput } from "./ReviewCreateNestedManyWithoutParkingSpacesInput";

export type ParkingSpaceCreateInput = {
  availability?: InputJsonValue;
  bookings?: BookingCreateNestedManyWithoutParkingSpacesInput;
  event?: EventWhereUniqueInput | null;
  location?: string | null;
  owner?: string | null;
  photos?: InputJsonValue;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutParkingSpacesInput;
};
