// src/components/Menu.jsx
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h2>Back Office Panel</h2>
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/tasklists">Task Lists</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
