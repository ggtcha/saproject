import React, { useState } from 'react';
import "./Colonial.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Colonial() {
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
      <h1 style={{ marginLeft: '25%' }}>Colonial Style</h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>บ้านโคโลเนียลผสานสถาปัตยกรรมยุโรปกับวัสดุธรรมชาติ เช่น ไม้และหิน เหมาะกับอากาศร้อนชื้นและสะดวกสบายในการอยู่อาศัย</p>
      <hr style={{
          width: '90%',
          margin: 'auto',
          border: '1px solid #000',
        }} />
        <br />
            {/*1*/}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-2119-450x338.jpg"
                        alt="CL-01"
                    />
                </div>

                <div className="house-details">
                    <p>CL-01</p>
                    <p>
                    การออกแบบบ้านสไตล์นี้เน้นความเรียบง่ายที่ดูอบอุ่นและมีเสน่ห์ โดยใช้โทนสีอ่อนและการใช้วัสดุจากธรรมชาติ เช่น ไม้และผ้า การออกแบบนี้จะเน้นความโปร่งโล่งสบายตา
                    การใช้โทนสีขาวเป็นหลัก ตกแต่งด้วยเฟอร์นิเจอร์ไม้และผ้าพื้นผิวธรรมชาติ มีหน้าต่างขนาดใหญ่เพื่อให้แสงธรรมชาติส่องเข้ามาได้ตลอดวัน
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร:120-150 ตารางเมตร</li>
                                    <li> พื้นที่ใช้สอย:100-130 ตารางเมตร</li>
                                    
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
                    <Link to="/CL01" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>

            <br />
            {/* 2 */}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>CL-02</p>
                    <p>
                    การออกแบบบ้านสไตล์สแกนดิเนเวียที่ผสมผสานความโมเดิร์น เน้นเส้นสายที่สะอาดตาและวัสดุทันสมัย เช่น กระจก โลหะ และการใช้เทคโนโลยีในการก่อสร้างเพื่อเพิ่มประสิทธิภาพในการใช้พลังงาน
                    ใช้เส้นสายที่ทันสมัย การออกแบบที่โปร่งสบาย มีหน้าต่างสูงจากพื้นถึงเพดานเพื่อเชื่อมต่อกับธรรมชาติภายนอก เน้นการใช้โทนสีขาว เทา และไม้
                    </p>
                    
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 150-200 ตารางเมตร</li>
                            <li> พื้นที่ใช้สอย: 130-180 ตารางเมตร</li>
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
                                <li><i className="fas fa-briefcase"></i>  :  ห้องทำงาน 1 ห้อง </li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/CL02" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-2118-450x338.jpg"
                        alt="CL-02"
                    />
                </div>
            </div>
            {/* 3 */}
             <br />
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://www.royalhouse.co.th/wp-content/uploads/2022/03/2188-01-1-450x338.png"
                        alt="CL-03"
                    />
                </div>

                <div className="house-details">
                    <p>CL-03</p> 
                    <p>
                    เน้นการออกแบบบ้านสไตล์กระท่อมที่ให้ความอบอุ่นและความเป็นธรรมชาติ มีบรรยากาศที่สบายและเข้ากับธรรมชาติ เหมาะสำหรับผู้ที่ชื่นชอบวิถีชีวิตที่ช้าลงและเรียบง่าย
                    ใช้วัสดุไม้และหินในการก่อสร้าง มีโทนสีอบอุ่น เช่น น้ำตาลอ่อน ครีม และสีเขียวธรรมชาติ มีการใช้ผ้าทอและพรมเพื่อเพิ่มบรรยากาศความอบอุ่นและความสบาย
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 80-120 ตารางเมตร </p>
                                <p> พื้นที่ใช้สอย: 70-90 ตารางเมตร </p>
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
                                <li><i className="fas fa-th-large"></i>  : ห้องอเนกประสงค์ 1 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/CL03" className="btn-more">
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
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px'}}>
            <h5>CONTACT</h5>
            <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
            <p>tel: 02-789-1234, 02-123-4567</p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px'}}>
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
export default Colonial;