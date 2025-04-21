import React, { useState } from 'react';
import "./tropical.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom'; 

function Tropical() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showFeatures1, setShowFeatures1] = useState(false);

    const [showDetails2, setShowDetails2] = useState(false);
    const [showFeatures2, setShowFeatures2] = useState(false);

    const [showDetails3, setShowDetails3] = useState(false);
    const [showFeatures3, setShowFeatures3] = useState(false);

    const toggleDetails1 = () => setShowDetails1(!showDetails1);
    const toggleFeatures1 = () => setShowFeatures1(!showFeatures1);

    const toggleDetails2 = () => setShowDetails2(!showDetails2);
    const toggleFeatures2 = () => setShowFeatures2(!showFeatures2);

    const toggleDetails3 = () => setShowDetails3(!showDetails3);
    const toggleFeatures3 = () => setShowFeatures3(!showFeatures3);

    return (
        
        <div className="house-container">
               <br />
      <h1 style={{ marginLeft: '25%' }}>Tropical Style</h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>บ้านที่ออกแบบมาเพื่อตอบโจทย์สภาพอากาศร้อนและชื้น ใช้วัสดุธรรมชาติอย่างไม้ หิน และพืชพรรณ</p>
      <hr style={{
          width: '50%',
          margin: 'auto',
          border: '1px solid #000',
        }} />
        <br />

            {/*Modern Loft */}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-TP.20611.jpg" 
                        alt="Tropical"
                    />
                </div>

                <div className="house-details">
                    <p>T-01</p>
                    <p>
                    บ้านที่ให้ความรู้สึกเหมือนรีสอร์ทในเขตร้อน ออกแบบให้เข้ากับธรรมชาติ และเน้นการใช้พื้นที่กลางแจ้งให้มากที่สุด วัสดุที่ใช้ ไม้สัก, กระเบื้องดินเผา, กระจกบานใหญ่เพื่อรับแสงธรรมชาติ, หลังคาแฝกหรือหญ้าคาบาหลี
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร: 14.50 X 12.00 เมตร</li>
                                    <li> พื้นที่ใช้สอย: 250 ตารางเมตร</li>
                                    
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                    <button className="dropdown-toggle" onClick={toggleFeatures1}>
                        ฟังก์ชั่นของบ้าน
                    </button>
                    {showFeatures1 && (
                        <div className="dropdown-content">
                            <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  :  ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                        </div>
                    )}
                </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/T01" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>

            <br />
            {/*Contemporary Tropical Style*/}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>T-02</p>
                    <p>
                    บ้านสไตล์ทรอปิคอลที่ผสมผสานความเป็นร่วมสมัย (Contemporary) เน้นความหรูหราในแบบเรียบง่าย และตอบสนองต่อการใช้ชีวิตทันสมัย
                    วัสดุที่ใช้: กระจกใสเต็มบาน, ปูนขัดมัน, ไม้เนื้อแข็งเพื่อเพิ่มความอบอุ่น, หลังคาแบนพร้อมระบบกันร้อน
                    </p>
                    {/* Modern Minimalist */}
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 14.00 X 11.50 เมตร</li>
                            <li> พื้นที่ใช้สอย: 230 ตารางเมตร</li>
                    </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleFeatures2}>
                            ฟังก์ชั่นของบ้าน
                        </button>
                        {showFeatures2 && (
                            <div className="dropdown-content">
                                <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  : ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/T02" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-TP.20631.jpg"
                        alt="Contemporary Tropical" 
                    />
                </div>
            </div>
                            <br />
            {/* Pitched Roof Tropical Style */}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                       src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-TP.20621.jpg" 
                       alt="Pitched Roof Tropical House" 
                    />
                </div>

                <div className="house-details">
                    <p>T-03</p> 
                    <p>
                    บ้านที่เน้นหลังคาทรงจั่วสูงเพื่อระบายความร้อนและป้องกันฝนตามลักษณะภูมิอากาศในเขตร้อน การออกแบบที่เรียบง่ายและคลาสสิก วัสดุที่ใช้: กระเบื้องดินเผาสำหรับหลังคา, ไม้สักและไม้เนื้อแข็งสำหรับพื้นและผนังตกแต่ง, กระจกบานเล็ก
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 13.70 X 10.30 เมตร </p>
                                <p> พื้นที่ใช้สอย: 213 ตารางเมตร </p>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleFeatures3}>
                            ฟังก์ชั่นของบ้าน
                        </button>
                        {showFeatures3 && (
                            <div className="dropdown-content">
                                <ul>
                                <li><i className="fas fa-utensils"></i>   : ห้องครัว 1 ห้อง</li>
                                <li><i className="fas fa-bed"></i>  : ห้องนอน 3 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/T03" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>
            <br/><br/>

             {/* Testimonials Section */}
<div style={{ backgroundColor: '#000000', color: 'white', padding: '20px 0', width: '100%' }}>
    <div
        className="row justify-content-around"
        style={{
            margin: '0',
            padding: '0 20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
        }}
    >
        {/* Image and quote section */}
        <div className="col-md-4 text-center" style={{ flex: '1 1 350px', maxWidth: '450px' }}>
            <img
                src="https://i.pinimg.com/736x/a9/06/d3/a906d35f20fbc5b3499daa4f54574204.jpg"
                alt="Second slide"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <footer className="blockquote-footer" style={{ backgroundColor: '#000000', marginTop: '10px' }}>BAAN TEE DEE</footer>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                "Ban Tee Dee: Care in Every Step, Turning Dreams into Reality"
            </p>
        </div>

        {/* Contact Information */}
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px',}}>
            <h5>CONTACT</h5>
            <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
            <p>tel: 02-789-1234, 02-123-4567</p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px', }}>
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
}

export default Tropical;
