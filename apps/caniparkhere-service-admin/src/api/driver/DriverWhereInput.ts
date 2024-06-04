import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type DriverWhereInput = {
  bookings?: BookingListRelationFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  loyaltyPoints?: IntNullableFilter;
  password?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
};
