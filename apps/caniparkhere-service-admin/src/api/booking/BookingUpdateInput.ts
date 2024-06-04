import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";

export type BookingUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  endTime?: Date | null;
  parkingSpace?: ParkingSpaceWhereUniqueInput | null;
  paymentStatus?: "Option1" | null;
  startTime?: Date | null;
};
