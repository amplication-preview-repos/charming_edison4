import { ParkingSpaceUpdateManyWithoutEventsInput } from "./ParkingSpaceUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  endDate?: Date | null;
  location?: string | null;
  name?: string | null;
  parkingSpaces?: ParkingSpaceUpdateManyWithoutEventsInput;
  startDate?: Date | null;
};
