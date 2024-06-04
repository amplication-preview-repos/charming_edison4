import { Driver } from "../driver/Driver";
import { ParkingSpace } from "../parkingSpace/ParkingSpace";

export type Booking = {
  createdAt: Date;
  driver?: Driver | null;
  endTime: Date | null;
  id: string;
  parkingSpace?: ParkingSpace | null;
  paymentStatus?: "Option1" | null;
  startTime: Date | null;
  updatedAt: Date;
};
