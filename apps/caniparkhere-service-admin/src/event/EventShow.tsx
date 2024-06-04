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

import { EVENT_TITLE_FIELD } from "./EventTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="StartDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ParkingSpace"
          target="eventId"
          label="ParkingSpaces"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
