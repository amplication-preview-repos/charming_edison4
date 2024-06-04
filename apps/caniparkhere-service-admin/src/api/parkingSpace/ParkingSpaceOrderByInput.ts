import { SortOrder } from "../../util/SortOrder";

export type ParkingSpaceOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  owner?: SortOrder;
  photos?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
