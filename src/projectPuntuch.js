import React, { useState } from 'react';
import { FaBed, FaShower, FaCouch, FaCar, FaUtensils } from 'react-icons/fa';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showFunctions, setShowFunctions] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'Contemporary Residence',
            description: 'ที่อยู่อาศัยร่วมสมัยที่มีดีไซน์ที่ทันสมัยและสะดวกสบาย',
            Location: 'นครราชสีมา, ประเทศไทย',
            timeline: 'มิถุนายน 2024 - ธันวาคม 2024',
            image: "https://i.pinimg.com/564x/0b/db/5a/0bdb5adb5f7e09bf2e3d5703efbec22b.jpg",
            details: {
                size: '13.70 X 10.30 เมตร',
                area: '213 ตารางเมตร',
                rooms: [
                    { name: 'ห้องครัว', count: 2, icon: <FaUtensils /> },
                    { name: 'ห้องนอน', count: 4, icon: <FaBed /> },
                    { name: 'ห้องนั่งเล่น', count: 1, icon: <FaCouch /> },
                    { name: 'ห้องน้ำ', count: 3, icon: <FaShower /> },
                    { name: 'ที่จอดรถ', count: 2, icon: <FaCar /> }
                ]
            }
        },
        {
            id: 2,
            title: 'Traditional Thai House',
            description: 'บ้านไทยที่มีสถาปัตยกรรมแบบดั้งเดิมและสวยงาม',
            location: 'สุโขทัย, ประเทศไทย',
            timeline: 'กันยายน 2022 - มีนาคม 2023',
            image: "https://i.pinimg.com/564x/98/1e/82/981e82ecca56f535b8f2c10a1038a69f.jpg",
            details: {
                size: '15.00 X 12.00 เมตร',
                area: '250 ตารางเมตร',
                rooms: [
                    { name: 'ห้องครัว', count: 1, icon: <FaUtensils /> },
                    { name: 'ห้องนอน', count: 3, icon: <FaBed /> },
                    { name: 'ห้องนั่งเล่น', count: 1, icon: <FaCouch /> },
                    { name: 'ห้องน้ำ', count: 2, icon: <FaShower /> },
                    { name: 'ที่จอดรถ', count: 1, icon: <FaCar /> }
                ]
            }
        },
        {
            id: 3,
            title: 'High-Rise Apartment',
            description: 'อพาร์ตเมนต์สูงที่มีวิวสวยงามของเมือง',
            location: ' กรุงเทพฯ, ประเทศไทย',
            timeline: 'เมษายน 2024 - ธันวาคม 2024',
            image: "https://i.pinimg.com/564x/09/90/1f/09901fd43cb27f62752ad837c6d7b4a2.jpg",
            details: {
                size: '12.00 X 10.00 เมตร',
                area: '200 ตารางเมตร',
                rooms: [
                    { name: 'ห้องครัว', count: 1, icon: <FaUtensils /> },
                    { name: 'ห้องนอน', count: 2, icon: <FaBed /> },
                    { name: 'ห้องนั่งเล่น', count: 1, icon: <FaCouch /> },
                    { name: 'ห้องน้ำ', count: 2, icon: <FaShower /> },
                    { name: 'ที่จอดรถ', count: 1, icon: <FaCar /> }
                ]
            }
        }
    ];

    const handleClick = (project) => {
        setSelectedProject(selectedProject?.id === project.id ? null : project);
        setShowDetails(false);
        setShowFunctions(false);
    };

    return (
        <div className="projects-container">
            <h2>PROJECT</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${selectedProject?.id === project.id ? 'selected' : ''}`}
                        onClick={() => handleClick(project)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.timeline}</p>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="details-section">
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.description}</p>
                    <p><strong>Location:</strong> {selectedProject.location}</p>
                    <p><strong>Timeline:</strong> {selectedProject.timeline}</p>
                    
                    <div className="dropdown-section">
                        <button onClick={() => setShowDetails(!showDetails)} className="dropdown-button">
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails && (
                            <div className="dropdown-content">
                                <p><strong>ขนาดอาคาร:</strong> {selectedProject.details.size}</p>
                                <p><strong>พื้นที่ใช้สอย:</strong> {selectedProject.details.area}</p>
                            </div>
                        )}
                    </div>

                    <div className="dropdown-section">
                        <button onClick={() => setShowFunctions(!showFunctions)} className="dropdown-button">
                            ฟังก์ชั่นของบ้าน
                        </button>
                        {showFunctions && (
                            <ul className="dropdown-content">
                                {selectedProject.details.rooms.map((room, index) => (
                                    <li key={index}>
                                        {room.icon} {room.name} {room.count} ห้อง
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
            <br /> <br />
            
            {/* Testimonials Section */}
            <div className="testimonials-section">
                <div className="row justify-content-center" style={{ margin: '0' }}>
                    <div className="col-md-4 testimonial-card">
                        <img
                            src="https://i.pinimg.com/736x/a9/06/d3/a906d35f20fbc5b3499daa4f54574204.jpg"
                            alt="Second slide"
                            style={{ width: '300px', height: '300px', borderRadius: '50%' }}
                        />
                        <p>ฺBAAN TEE DEE</p>
                        <p>"Ban Tee Dee: Care in Every Step, Turning Dreams into Reality"</p>
                    </div>

                    <div className="col-md-4 testimonial-card">
                        <br />
                        <h5>CONTACT</h5>
                        <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
                        <p>tel: 02-789-1234, 02-123-4567</p>
                    </div>

                    <div className="col-md-4 testimonial-card">
                        <br />
                        <div style={{ marginBottom: '10px' }}>
                            <Link to="/CostEstimator" style={{ color: 'white', textDecoration: 'none' }}>
                                COST ESTIMATE
                            </Link>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Link to="/aboutus" style={{ color: 'white', textDecoration: 'none' }}>
                                ABOUT US
                            </Link>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Link to="/service" style={{ color: 'white', textDecoration: 'none' }}>
                                SERVICE
                            </Link>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Link to="/design" style={{ color: 'white', textDecoration: 'none' }}>
                                DESIGN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
