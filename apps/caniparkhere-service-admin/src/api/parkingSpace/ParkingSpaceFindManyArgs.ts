import { ParkingSpaceWhereInput } from "./ParkingSpaceWhereInput";
import { ParkingSpaceOrderByInput } from "./ParkingSpaceOrderByInput";

export type ParkingSpaceFindManyArgs = {
  where?: ParkingSpaceWhereInput;
  orderBy?: Array<ParkingSpaceOrderByInput>;
  skip?: number;
  take?: number;
};
