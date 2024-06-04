import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { PARKINGSPACE_TITLE_FIELD } from "./ParkingSpaceTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const ParkingSpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Availability" source="availability" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Owner" source="owner" />
        <TextField label="Photos" source="photos" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="parkingSpaceId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="EndTime" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ParkingSpace"
              source="parkingspace.id"
              reference="ParkingSpace"
            >
              <TextField source={PARKINGSPACE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PaymentStatus" source="paymentStatus" />
            <TextField label="StartTime" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="parkingSpaceId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
