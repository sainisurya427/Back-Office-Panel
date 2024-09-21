// src/components/UsersGrid.jsx
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'email', headerName: 'Email ID', width: 200 },
  { field: 'password', headerName: 'Password', width: 200 },
  { field: 'signupTime', headerName: 'Signup Time', width: 200 },
  { field: 'ip', headerName: 'IP Address', width: 150 },
];

const rows = [
  { id: 1, email: 'user1@example.com', password: 'pass123', signupTime: '2023-09-01', ip: '192.168.1.1' },
  // Add more rows here
];

const UsersGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Users</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default UsersGrid;
