import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './customers.js';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Email', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Ip Address', field: 'ip_address' },
        ]}
        data={customers}
        title="Customer Data"
        options={{
          headerStyle: {
            background: 'gold',
          },
          rowStyle: {
            background: 'cyan',
          },
        }}
        localization={{
          pagination: {
            nextAriaLabel: 'next',
            previousAriaLabel: 'prev',
          },
        }}
      />{' '}
    </div>
  );
}
