// src/components/TasksGrid.jsx
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Task Title', width: 200 },
  { field: 'description', headerName: 'Task Description', width: 300 },
  { field: 'taskListTitle', headerName: 'Task List Title', width: 200 },
  { field: 'createdBy', headerName: 'Created By (email)', width: 200 },
  { field: 'creationTime', headerName: 'Creation Time', width: 200 },
];

const rows = [
  { id: 1, title: 'Task 1', description: 'Complete project setup', taskListTitle: 'Project A', createdBy: 'user1@example.com', creationTime: '2023-09-01' },
  // Add more rows here
];

const TasksGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Tasks</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default TasksGrid;
