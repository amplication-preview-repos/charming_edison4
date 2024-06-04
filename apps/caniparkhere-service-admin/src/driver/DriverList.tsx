import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="LoyaltyPoints" source="loyaltyPoints" />
        <TextField label="Password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
