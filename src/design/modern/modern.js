import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //
import "./modern.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Modern() {
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
      <h1 style={{ marginLeft: '25%' }}>Modern Style</h1>
      <p className="card-text" style={{ marginLeft: '25%' }}>บ้านสไตล์โมเดิร์นที่มีพื้นที่ใช้สอยกว้างขวาง

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
                        src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-MD.21561-450x338.jpg" // replace with actual image URL
                        alt="Modern Loft"
                    />
                </div>

                <div className="house-details">
                    <p>M-01</p>
                    <p>
                    บ้านหลังนี้ได้รับแรงบันดาลใจจากความดิบและเปิดโล่งของโรงงานและโกดังในสไตล์ลอฟท์ แต่ปรับใช้ให้เข้ากับความเรียบง่ายของโมเดิร์น
                    ใช้วัสดุหลักเป็นปูนเปลือย เหล็ก และกระจกเพื่อให้มีความเป็นธรรมชาติ เน้นโทนสีเทาเข้มและน้ำตาลอ่อน มีการเปิดโล่งเพดานสูงเพื่อเพิ่มความกว้างขวาง มาพร้อมกับผนังกระจกขนาดใหญ่ที่เปิดรับแสงธรรมชาติได้ดี
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails1}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails1 && (
                            <div className="dropdown-content">
                                    <li> ขนาดอาคาร: 13.70 X 10.30 เมตร</li>
                                    <li> พื้นที่ใช้สอย: 213 ตารางเมตร</li>
                                    
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
                                <li><i className="fas fa-bed"></i>  :  ห้องนอน 2 ห้อง</li>
                                <li><i className="fas fa-couch"></i>  :  ห้องนั่งเล่น 1 ห้อง</li>
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 2 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                        </div>
                    )}
                </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/m01" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>
            </div>

            <br />
            {/* Modern Minimalist */}
            <div className="house-detail-container reverse-layout">
                <div className="house-details">
                    <p>M-02</p>
                    <p>
                    การออกแบบบ้านที่เรียบง่าย เน้นเส้นสายที่ชัดเจนและความสะอาดสะอ้านตามสไตล์มินิมอล 
                    ใช้วัสดุที่เรียบง่าย โทนสีขาว เทาอ่อน และน้ำตาลไม้ที่ให้ความรู้สึกอบอุ่นและโปร่งสบาย โครงสร้างเป็นกล่องสี่เหลี่ยมที่สะอาดตา 
                    
                    มีการเล่นระดับเล็กน้อยที่หลังคา
                    </p>
                    {/* Modern Minimalist */}
                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails2}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails2 && (
                            <div className="dropdown-content">
                            <li> ขนาดอาคาร: 12.50 X 11.00 เมตร</li>
                            <li> พื้นที่ใช้สอย: 250 ตารางเมตร</li>
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
                                <li><i className="fas fa-bath"></i>  :  ห้องน้ำ 3 ห้อง</li>
                                <li><i className="fas fa-parking"></i> : ที่จอดรถ 2 คัน</li>
                            </ul>
                            </div>
                        )}
                    </div>
                    <hr />

                    <div className="buttons">
                    <Link to="/m02" className="btn-more">
                        ดูเพิ่มเติม
                    </Link>
                    </div>
                </div>

                
                &nbsp;&nbsp;&nbsp;
                <div className="house-image">
                    <img
                        src="https://i.pinimg.com/736x/44/97/ec/4497ec75b430d68c26e9233c5c57ee18.jpg" // replace with actual image URL
                        alt="House 2"
                    />
                </div>
            </div>
                            <br />
            {/* Modern Tropical Home*/}
            <div className="house-detail-container">
                <div className="house-image">
                    <img
                        src="https://i0.wp.com/architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg?fit=1024%2C683&ssl=1" // replace with actual image URL
                        alt="Modern Tropical Home"
                    />
                </div>

                <div className="house-details">
                    <p>M-03</p> 
                    <p>
                    บ้านโมเดิร์นที่ออกแบบให้เข้ากับสภาพอากาศร้อนชื้นของเขตร้อน โดยเน้นการระบายอากาศและเปิดรับธรรมชาติ ไม้เนื้อแข็งสำหรับงานภายนอก, กระจกแบบเต็มบานเพื่อเพิ่มแสงธรรมชาติ, หลังคาแผ่นเมทัลชีทแบบกันความร้อน, ผนังปูนสีขาวเพื่อคงความเย็นสบาย
                    </p>

                    <div className="dropdown-section">
                        <button className="dropdown-toggle" onClick={toggleDetails3}>
                            รายละเอียดของบ้าน
                        </button>
                        {showDetails3 && (
                            <div className="dropdown-content">
                                <p>ขนาดอาคาร: 14.00 X 10.00 เมตร </p>
                                <p> พื้นที่ใช้สอย: 220 ตารางเมตร </p>
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
                    <Link to="/m03" className="btn-more">
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

export default Modern;
