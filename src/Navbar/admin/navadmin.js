import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import './Navadmin.css'; 
import { FaTachometerAlt, FaUsers, FaChartBar, FaSignOutAlt, FaTasks } from 'react-icons/fa'; // นำเข้า FaTasks ไอคอนใหม่

function Navadmin() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="d-flex">
      <nav className="custom-navbar">
        <ul className="custom-navbar-nav">
          <li className="nav-item">
            <Link
              to="/admindashboard"
              className={`custom-nav-link ${location.pathname === '/admindashboard' ? 'active' : ''}`}
            >
              <i><FaTachometerAlt className="nav-icon" /></i>
              <span>Admin Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/manage-users"
              className={`custom-nav-link ${location.pathname === '/manage-users' ? 'active' : ''}`}
            >
              <i><FaUsers className="nav-icon" /></i>
              <span>Manage Users</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/taskadmin" // เปลี่ยนเส้นทางไปยัง TaskAdmin
              className={`custom-nav-link ${location.pathname === '/taskadmin' ? 'active' : ''}`}
            >
              <i><FaTasks className="nav-icon" /></i>
              <span>Task Admin</span> {/* ชื่อที่แสดงในลิงก์ */}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/reportsadmin"
              className={`custom-nav-link ${location.pathname === '/reportsadmin' ? 'active' : ''}`}
            >
              <i><FaChartBar className="nav-icon" /></i>
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="custom-nav-link logout-button">
              <i><FaSignOutAlt className="nav-icon" /></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navadmin;
