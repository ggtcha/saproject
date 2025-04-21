import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css'; 

const Design = () => {
    return (
        <div className="container-fluid vh-100"> 
            <h1 className="text-center">DESIGN</h1>
       
            <hr style={{
                width: '30%',
                margin: 'auto',
                border: '1px solid #000',
            }} />
            <br /><br /><br />
            <div className="row h-80">
                {/* 1 */}
                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440" className="card-img-top" alt="Modern style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Modern Style</h5>
                            <p className="card-text">บ้านสไตล์โมเดิร์นที่มีพื้นที่ใช้สอยกว้างขวาง</p>
                            <a href="/modern" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://i0.wp.com/architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg?fit=1024%2C683&ssl=1" className="card-img-top" alt="Tropical style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Tropical Style</h5>
                            <p className="card-text">บ้านออกแบบเพื่ออากาศร้อนชื้น ด้วยวัสดุธรรมชาติ เช่น ไม้ หิน และพืชพรรณ</p>
                            <a href="/tropical" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://www.thespruce.com/thmb/iZ3l9p7xMKbWycZp8kEMxyAqJEE=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/american-colonial-style-architecture-5094947-hero-cf7de7e2627c4e07895a964cc0e6dc10.jpg" className="card-img-top" alt="Colonial style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Colonial Style</h5>
                            <p className="card-text">บ้านโคโลเนียลผสานสถาปัตยกรรมยุโรปกับวัสดุธรรมชาติ เช่น ไม้และหิน เหมาะกับอากาศร้อนชื้นและสะดวกสบายในการอยู่อาศัย</p>
                            <a href="/Colonial" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row h-40 mt-4">
                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://img.freepik.com/premium-photo/modern-minimalist-house-design_999195-336.jpg" className="card-img-top" alt="Minimalist style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Minimalist Style</h5>
                            <p className="card-text">เน้นการออกแบบที่เรียบง่ายและสะอาดตา ใช้พื้นที่อย่างมีประสิทธิภาพ</p>
                            <a href="/minimalist" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://cdn.houseplansservices.com/content/t9kqoc3miqd29id9h2hj7rovq9/w991x660.jpg?v=9" className="card-img-top" alt="Scandinavian style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Cottage Style</h5>
                            <p className="card-text">บ้านที่เน้นความเรียบง่ายและความอบอุ่น ใช้วัสดุธรรมชาติ</p>
                            <a href="/cottage" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex align-items-center" style={{ paddingLeft: '100px' }}>
                    <div className="card hover-card" style={{ width: '100%' }}>
                        <img src="https://art-tech.co.th/wp-content/uploads/2022/04/fb-2-1024x497.jpg" className="card-img-top" alt="Contemporary style house" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Contemporary Style</h5>
                            <p className="card-text">บ้านที่ผสมผสานระหว่างสมัยใหม่และคลาสสิก ใช้เส้นสายที่เรียบง่าย แต่มีความหรูหรา</p>
                            <a href="/contemporary" className="btn btn-primary">View details</a>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            
            {/* Testimonials Section */}
            <div style={{ backgroundColor: '#000000', color: 'white', padding: '20px 0', width: '100%' }}>
                <div className="row justify-content-start" style={{ margin: '0', paddingLeft: '0px' }}>
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
                        <br />
                        <h5>CONTACT</h5>
                        <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>
                        <p>tel: 02-789-1234, 02-123-4567</p>
                    </div>

                    <div className="col-md-4">
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
}

export default Design;
