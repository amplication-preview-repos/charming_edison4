import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { PARKINGSPACE_TITLE_FIELD } from "../parkingSpace/ParkingSpaceTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
