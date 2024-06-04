import { ParkingSpace } from "../parkingSpace/ParkingSpace";

export type Event = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  parkingSpaces?: Array<ParkingSpace>;
  startDate: Date | null;
  updatedAt: Date;
};
