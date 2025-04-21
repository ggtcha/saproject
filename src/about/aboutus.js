import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css'; 
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <>
            <Container fluid="md" className="my-4 about-us-container">
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img 
                            src="https://i.pinimg.com/564x/ea/f5/96/eaf596632be808ce200b9e17c5fc0e8c.jpg"
                            alt="เกี่ยวกับเรา"
                            className="img-fluid"
                            style={{ maxHeight: '1000px', width: '5000px' }}
                        />
                    </Col>
                    <Col md={6}>
                        <br />
                        <h2 className="about-us-title">เกี่ยวกับเรา</h2>
                        <p className="about-us-content">
                            ยินดีต้อนรับสู่ Baan TEE DEE ผู้นำด้านการก่อสร้างและการปรับปรุงในภูมิภาคของเรา 
                            ด้วยประสบการณ์มากกว่า 10 ปีในอุตสาหกรรมก่อสร้าง เราเชี่ยวชาญในโครงการหลากหลาย 
                            ตั้งแต่บ้านที่อยู่อาศัยไปจนถึงอาคารพาณิชย์และการพัฒนาขนาดใหญ่
                        </p>
                        <br />
                        <h3 className="about-us-title">วิสัยทัศน์ของเรา</h3>
                        <p className="about-us-content">
                            เรามุ่งมั่นที่จะเป็นผู้รับเหมาที่มีชื่อเสียง โดยการให้บริการที่มีคุณภาพสูง 
                            และการรับรองความพึงพอใจของลูกค้าเป็นอันดับแรก เราเชื่อว่าการสร้างบ้านหรือโครงสร้าง 
                            คือการสร้างอนาคต และเราพร้อมที่จะทำงานร่วมกับคุณในทุกขั้นตอน
                        </p>
                        <br />
                        <h3 className="about-us-title">ทำไมถึงเลือกเรา</h3>
                        <ul className="about-us-content">
                            <li>ทีมงานมืออาชีพ: เรามีทีมงานที่มีทักษะและความเชี่ยวชาญในด้านการก่อสร้าง</li>
                            <li>วัสดุคุณภาพ: เราเลือกวัสดุที่มีคุณภาพสูงเพื่อให้แน่ใจว่ามีความทนทาน</li>
                            <li>บริการที่เป็นมิตร: เราให้ความสำคัญกับบริการลูกค้าและพร้อมที่จะช่วยเหลือเสมอ</li>
                        </ul>
                        <br />
                        <h3 className="about-us-title">ติดต่อเรา</h3>
                        <p className="about-us-content">
                            หากคุณสนใจในบริการของเราหรือมีข้อสงสัยใด ๆ กรุณาติดต่อเราที่ 
                            
                            tel: 02-789-1234, 02-123-4567
                        </p>
                    </Col>
                </Row>
            </Container>
            <br /> <br /> <br />
            
            {/* Testimonials Section */}
            <div style={{ backgroundColor: '#000000', color: 'white', padding: '20px 0', width: '100vw' }}>
                <div className="row justify-content-start" style={{ margin: '0', paddingLeft: '50px' }}>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://i.pinimg.com/736x/a9/06/d3/a906d35f20fbc5b3499daa4f54574204.jpg"
                            alt="BAAN TEE DEE"
                            style={{ width: '300px', height: '300px' }}
                        />
                        <footer className="blockquote-footer" style={{ backgroundColor: '#000000' }}>BAAN TEE DEE</footer>
                        <p>"Ban Tee Dee: Care in Every Step, Turning Dreams into Reality"</p>
                    </div>

                    <div className="col-md-4">
                        <br /> <br /> <br />
                        <h5>CONTACT</h5>
                        <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>

                        <br /> 
                        <p>tel: 02-789-1234, 02-123-4567</p>
                    </div>

                    <div className="col-md-4">
                        <br /> <br /> <br />
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
        </>
    );
}

export default AboutUs;
