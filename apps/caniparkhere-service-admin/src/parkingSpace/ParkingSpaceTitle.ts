import { ParkingSpace as TParkingSpace } from "../api/parkingSpace/ParkingSpace";

export const PARKINGSPACE_TITLE_FIELD = "location";

export const ParkingSpaceTitle = (record: TParkingSpace): string => {
  return record.location?.toString() || String(record.id);
};
