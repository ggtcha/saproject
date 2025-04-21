import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css'; // Your custom styles
import { FaCalculator, FaHome, FaDraftingCompass, FaHammer, FaCogs, FaRegBuilding, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Service() {
    const services = [
        {
            icon: <FaCalculator color="#9b9484" />,
            title: "โปรแกรมประมาณต้นทุนการก่อสร้างบ้านฟรี",
            description: "คำนวณต้นทุนการก่อสร้างบ้านเบื้องต้นแบบง่าย ๆ พร้อมรายละเอียด."
        },
        {
            icon: <FaHome color="#9b9484" />,
            title: "บริการออกแบบบ้านฟรี",
            description: "เลือกจากแบบบ้านสำเร็จรูป หรือออกแบบตามต้องการ."
        },
        {
            icon: <FaDraftingCompass color="#9b9484" />,
            title: "บริการให้คำปรึกษาเรื่องการออกแบบ",
            description: "ให้คำปรึกษาจากสถาปนิกผู้เชี่ยวชาญเกี่ยวกับการจัดการพื้นที่และการตกแต่ง."
        },
        {
            icon: <FaHammer color="#9b9484" />,
            title: "บริการสร้างแบบ 3D",
            description: "สร้างภาพบ้านแบบ 3D เพื่อให้ลูกค้าเห็นภาพเสมือนจริง."
        },
        {
            icon: <FaCogs color="#9b9484" />,
            title: "บริการจัดหาวัสดุและอุปกรณ์",
            description: "ช่วยจัดหาวัสดุที่เหมาะสมและเปรียบเทียบราคาให้ลูกค้า."
        },
        {
            icon: <FaRegBuilding color="#9b9484" />,
            title: "บริการจัดทำเอกสารการขออนุญาตก่อสร้าง",
            description: "ช่วยลูกค้าจัดเตรียมเอกสารและแบบแปลนสำหรับการขออนุญาต."
        },
        
    ];

    return (
        <div className="container-fluid mt-5">
            <h2 className="text-center mb-4">บริการออกแบบบ้านของเรา</h2>

            {/* Services Section */}
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 text-center p-4 shadow-sm">
                            <div className="service-icon mb-3">
                                <div style={{ fontSize: '2.5rem', color: '#007bff' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                
            {/* Testimonials Section */}
            <div style={{ backgroundColor: '#000000', color: 'white', padding: '20px', width: '100vw' }}>
                <div className="row justify-content-start" style={{ margin: '5', paddingRight: '0px' }}>
                    <div className="col-md-4 text-center">
                        <img
                            src="https://i.pinimg.com/736x/a9/06/d3/a906d35f20fbc5b3499daa4f54574204.jpg"
                            alt="Second slide"
                            style={{ width: '300px', height: '300px' }}
                        />
                        <footer className="blockquote-footer" style={{ backgroundColor: '#000000' }}>BAAN TEE DEE</footer>
                        <p>"Ban Tee Dee: Care in Every Step, Turning Dreams into Reality"</p>
                    </div>

                    <div className="col-md-4">
                    <br /><br />
                        <h5>CONTACT</h5>
                        <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
                        <p>tel : 02-789-1234 , 02-123-4567</p>
                    </div>

                    <div className="col-md-4">
                    <br /><br />
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

export default Service;
