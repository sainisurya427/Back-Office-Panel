// src/components/TaskListsGrid.jsx
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Task List Title', width: 200 },
  { field: 'createdBy', headerName: 'Created By (email)', width: 200 },
  { field: 'numOfTasks', headerName: 'No of Tasks', width: 150 },
  { field: 'creationTime', headerName: 'Creation Time', width: 200 },
  { field: 'lastUpdated', headerName: 'Last Updated', width: 200 },
];

const rows = [
  { id: 1, title: 'Project A', createdBy: 'user1@example.com', numOfTasks: 5, creationTime: '2023-09-01', lastUpdated: '2023-09-10' },
  // Add more rows here
];

const TaskListsGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Task Lists</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default TaskListsGrid;
