import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  parkingSpaceId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
