import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";

export type BookingWhereInput = {
  driver?: DriverWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  parkingSpace?: ParkingSpaceWhereUniqueInput;
  paymentStatus?: "Option1";
  startTime?: DateTimeNullableFilter;
};
