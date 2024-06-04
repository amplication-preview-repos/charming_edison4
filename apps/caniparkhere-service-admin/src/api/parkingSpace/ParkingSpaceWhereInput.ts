import { JsonFilter } from "../../util/JsonFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ParkingSpaceWhereInput = {
  availability?: JsonFilter;
  bookings?: BookingListRelationFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  owner?: StringNullableFilter;
  photos?: JsonFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
};
