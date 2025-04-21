import React, { useState } from 'react';
import "./contemporary.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Contemporary() {
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
      <h1 style={{ marginLeft: '25%' }}> Contemporary Style </h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>บ้านที่ผสมผสานระหว่างสมัยใหม่และคลาสสิก ใช้เส้นสายที่เรียบง่าย แต่มีความหรูหรา
</p>
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
                        src="https://www.royalhouse.co.th/wp-content/uploads/2023/09/RH-CT.2190_0-1024x614.jpg" // replace with actual image URL
                        alt="T01"
                    />
                </div>

                <div className="house-details">
                    <p>C-01</p>
                    <p>
                    การออกแบบสไตล์ลอฟท์คอนเทมโพรารีเน้นความเปิดโล่งภายในบ้าน เส้นสายที่คมชัด และการใช้วัสดุแบบดิบ เช่น คอนกรีต เหล็ก และไม้ให้ความรู้สึกแข็งแกร่งทันสมัย
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร:150-200 ตารางเมตร</li>
                                    <li> พื้นที่ใช้สอย:130-180 ตารางเมตร</li>
                                    
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
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง </li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                        </div>
                    )}
                </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/C01" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>

            <br />
            {/* 2 */}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>C-02</p>
                    <p>
                    สไตล์มินิมอลคอนเทมโพรารีเน้นการออกแบบที่เรียบง่าย ใช้โทนสีที่เป็นกลาง เช่น ขาว เทา และน้ำตาลอ่อน ลดทอนสิ่งที่ไม่จำเป็นและเน้นการใช้งานที่มีประสิทธิภาพ การใช้เส้นสายเรียบง่าย โทนสีอ่อนที่ช่วยให้รู้สึกสงบ เฟอร์นิเจอร์น้อยชิ้นที่เน้นการใช้งานจริงและสไตล์ที่ไม่ซับซ้อน
                    </p>
                    
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 100-130 ตารางเมตร</li>
                            <li> พื้นที่ใช้สอย: 90-120 ตารางเมตร</li>
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
                                <li><i className="fas fa-bed"></i>  : ห้องนอน 2 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 1 ห้อง</li>
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง </li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/C02" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2024/10/RH-CT.702-1024x683.jpg"
                        alt="T02"
                    />
                </div>
            </div>

            {/* 3 */}
             <br />
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2023/09/RH-CT.2206-3D_0-1024x640.jpg"
                        alt="T03"
                    />
                </div>

                <div className="house-details">
                    <p>C-03</p> 
                    <p>
                    การออกแบบสไตล์ทรอปิคอลคอนเทมโพรารีเน้นการเชื่อมโยงระหว่างพื้นที่ภายในและภายนอกบ้าน มีการเปิดรับลมธรรมชาติและแสงแดด การใช้วัสดุธรรมชาติเช่นไม้และหินในสไตล์ที่ทันสมัย
                    การใช้วัสดุไม้และหิน ผสมผสานการตกแต่งที่ทันสมัย มีหน้าต่างและประตูที่เปิดรับแสงและลมธรรมชาติได้เต็มที่ มีพื้นที่ระเบียงกว้างสำหรับการพักผ่อนกลางแจ้ง
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 120-160 ตารางเมตร </p>
                                <p> พื้นที่ใช้สอย: 100-140 ตารางเมตร </p>
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
                    <Link to="/C03" className="btn-more">
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
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px', textAlign: 'center' }}>
            <h5>CONTACT</h5>
            <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
            <p>tel: 02-789-1234, 02-123-4567</p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px', textAlign: 'center' }}>
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

export default Contemporary;