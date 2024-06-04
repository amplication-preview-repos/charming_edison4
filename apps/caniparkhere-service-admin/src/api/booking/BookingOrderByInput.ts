import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  parkingSpaceId?: SortOrder;
  paymentStatus?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
