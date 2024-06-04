import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  loyaltyPoints?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
};
