import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "fullName";

export const DriverTitle = (record: TDriver): string => {
  return record.fullName?.toString() || String(record.id);
};
