import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { PARKINGSPACE_TITLE_FIELD } from "../parkingSpace/ParkingSpaceTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ParkingSpace"
          source="parkingspace.id"
          reference="ParkingSpace"
        >
          <TextField source={PARKINGSPACE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
