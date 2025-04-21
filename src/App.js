import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/login';
import CostEstimator from './costestimator/CostEstimator';
import AboutUs from './about/aboutus'; 
import Service from './Service/service';
import Design from './design/designhome/design';
import Register from './register/register';
import Modern from './design/modern/modern';
import Tropical from './design/Tropical/tropical';
import Minimalist from './design/Minimalist/minimalist';
import Colonial from './design/Colonial/Colonial';
import Contemporary from './design/Contemporary/contemporary';
import ViewGunthicha from './Contractor/viewgunthicha';
import Viewpappupa from './Contractor/viewpappupa';
import ViewRachata from './Contractor/viewRachata';
import ViewPuntuch from './Contractor/viewPuntuch';
import Navadmin from './Navbar/admin/navadmin';
import Navuser from './Navbar/users/navuser'; 
import ReportsAdmin from './Admin/reportsadmin'; 
import Admindashboard from './Admin/admindashboard'; 
import M01 from './design/modern/m01'; 
import M02 from './design/modern/m02';
import M03 from './design/modern/m03';
import T01 from './design/Tropical/T01';
import T02 from './design/Tropical/T02';
import T03 from './design/Tropical/T03';
import C01 from './design/Contemporary/C01';
import C02 from './design/Contemporary/C02';
import C03 from './design/Contemporary/C03';
import CL01 from './design/Colonial/CL01';
import CL02 from './design/Colonial/CL02';
import CL03 from './design/Colonial/CL03';
import MI01 from './design/Minimalist/MI01';
import MI02 from './design/Minimalist/MI02';
import MI03 from './design/Minimalist/MI03';
import Cottage from './design/Cottage/Cottage';
import CT01 from './design/Cottage/CT01';
import CT02 from './design/Cottage/CT02';
import Task from './Task/task'; 
import TaskProvider from './Context/TaskContext';
import TaskAdmin from './Admin/taskadmin';
import TaskDetails from './Task/TaskDetails';
import Materialadmin from './Admin/materialadmin';



function App() {
  const [role, setRole] = useState('user');
  return (
    <TaskProvider>
    <Router>
       <div className="fixed-sidebar">
          {role === 'admin' ? <Navadmin /> : <Navuser />}
        </div>
      
        <div className="main-content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CostEstimator" element={<CostEstimator />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/design" element={<Design />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/tropical" element={<Tropical />} />
        <Route path="/minimalist" element={<Minimalist />} />
        <Route path="/Colonial" element={<Colonial />} />
        <Route path="/contemporary" element={<Contemporary />} />
        <Route path="/viewgunthicha" element={<ViewGunthicha />} />
        <Route path="/viewpappupa" element={<Viewpappupa />} />
        <Route path="/viewRachata" element={<ViewRachata />} />
        <Route path="/viewPuntuch" element={<ViewPuntuch />} />
        <Route path="/reportsadmin" element={<ReportsAdmin />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/m01" element={<M01 />} />
        <Route path="/m02" element={<M02 />} />
        <Route path="/m03" element={<M03 />} />
        <Route path="/T01" element={<T01 />} />
        <Route path="/T02" element={<T02 />} />
        <Route path="/T03" element={<T03 />} />
        <Route path="/C01" element={<C01 />} />
        <Route path="/C02" element={<C02 />} />
        <Route path="/C03" element={<C03 />} />
        <Route path="/CL01" element={<CL01 />} />
        <Route path="/CL02" element={<CL02 />} />
        <Route path="/CL03" element={<CL03 />} />
        <Route path="/MI01" element={<MI01 />} />
        <Route path="/MI02" element={<MI02 />} />
        <Route path="/MI03" element={<MI03 />} />
        <Route path="/CT01" element={<CT01 />} />
        <Route path="/CT02" element={<CT02 />} />
        <Route path="/cottage" element={<Cottage/>} />
        <Route path="/task" element={<Task/>} />
        <Route path="/taskadmin" element={<TaskAdmin />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/materialadmin" element={<Materialadmin/>} />

        </Routes>
    </Router>
    </TaskProvider>
  );
}

export default App;
