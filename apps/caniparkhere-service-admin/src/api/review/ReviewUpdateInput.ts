import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  driver?: DriverWhereUniqueInput | null;
  parkingSpace?: ParkingSpaceWhereUniqueInput | null;
  rating?: number | null;
};
