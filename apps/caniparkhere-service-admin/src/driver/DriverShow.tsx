import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { PARKINGSPACE_TITLE_FIELD } from "../parkingSpace/ParkingSpaceTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="LoyaltyPoints" source="loyaltyPoints" />
        <TextField label="Password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="driverId"
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
          target="driverId"
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
