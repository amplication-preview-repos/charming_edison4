import { InputJsonValue } from "../../types";
import { BookingUpdateManyWithoutParkingSpacesInput } from "./BookingUpdateManyWithoutParkingSpacesInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { ReviewUpdateManyWithoutParkingSpacesInput } from "./ReviewUpdateManyWithoutParkingSpacesInput";

export type ParkingSpaceUpdateInput = {
  availability?: InputJsonValue;
  bookings?: BookingUpdateManyWithoutParkingSpacesInput;
  event?: EventWhereUniqueInput | null;
  location?: string | null;
  owner?: string | null;
  photos?: InputJsonValue;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutParkingSpacesInput;
};
