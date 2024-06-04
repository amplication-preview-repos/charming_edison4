import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="parkingSpaces"
          reference="ParkingSpace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ParkingSpaceTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
