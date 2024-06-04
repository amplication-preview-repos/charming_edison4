import { ParkingSpaceCreateNestedManyWithoutEventsInput } from "./ParkingSpaceCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  endDate?: Date | null;
  location?: string | null;
  name?: string | null;
  parkingSpaces?: ParkingSpaceCreateNestedManyWithoutEventsInput;
  startDate?: Date | null;
};
