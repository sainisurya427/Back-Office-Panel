 // src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import UsersGrid from './components/UsersGrid';
import TaskListsGrid from './components/TaskListsGrid';
import TasksGrid from './components/TasksGrid';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/users" element={<UsersGrid />} />
        <Route path="/tasklists" element={<TaskListsGrid />} />
        <Route path="/tasks" element={<TasksGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
