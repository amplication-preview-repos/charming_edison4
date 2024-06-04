import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="parkingSpace.id"
          reference="ParkingSpace"
          label="ParkingSpace"
        >
          <SelectInput optionText={ParkingSpaceTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
