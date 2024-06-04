import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
