import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParkingSpaceListRelationFilter } from "../parkingSpace/ParkingSpaceListRelationFilter";

export type EventWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  parkingSpaces?: ParkingSpaceListRelationFilter;
  startDate?: DateTimeNullableFilter;
};
