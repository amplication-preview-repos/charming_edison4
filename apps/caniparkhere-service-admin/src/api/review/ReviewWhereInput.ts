import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ParkingSpaceWhereUniqueInput } from "../parkingSpace/ParkingSpaceWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  driver?: DriverWhereUniqueInput;
  id?: StringFilter;
  parkingSpace?: ParkingSpaceWhereUniqueInput;
  rating?: IntNullableFilter;
};
