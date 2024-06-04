import { Driver } from "../driver/Driver";
import { ParkingSpace } from "../parkingSpace/ParkingSpace";

export type Review = {
  comment: string | null;
  createdAt: Date;
  driver?: Driver | null;
  id: string;
  parkingSpace?: ParkingSpace | null;
  rating: number | null;
  updatedAt: Date;
};
