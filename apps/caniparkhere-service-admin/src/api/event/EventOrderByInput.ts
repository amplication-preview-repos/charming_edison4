import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
