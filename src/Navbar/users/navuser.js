import React from 'react';
import { Link } from 'react-router-dom';
import './Navuser.css'; 
import logoImage from '../../images/logo.png';

const Navuser = ({ role }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light py-3 mb-4 border-bottom" style={{ height: '70px' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-inline-flex link-body-emphasis text-decoration-none">
            <img src={logoImage} alt="Baan tee dee" width="180" height="200" className="d-inline-block align-text-top" />
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active px-2">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/CostEstimator" className="nav-link active px-2">COST ESTIMATE</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link active px-2">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link active px-2">SERVICE</Link>
              </li>
              <li className="nav-item">
                <Link to="/design" className="nav-link active px-2">DESIGN</Link>
              </li>
              <li className="nav-item">
                <Link to="/task" className="nav-link active px-2">TASK</Link>
              </li>
            </ul>
<Link to="/login" className="btn custom-btn me-2">Login</Link>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navuser;
