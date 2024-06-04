import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { DriverTitle } from "../driver/DriverTitle";
import { ParkingSpaceTitle } from "../parkingSpace/ParkingSpaceTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndTime" source="endTime" />
        <ReferenceInput
          source="parkingSpace.id"
          reference="ParkingSpace"
          label="ParkingSpace"
        >
          <SelectInput optionText={ParkingSpaceTitle} />
        </ReferenceInput>
        <SelectInput
          source="paymentStatus"
          label="PaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
