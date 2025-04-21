import React from 'react';
import viewgunthichaImage from '../images/viewgunthicha.jpg';
import viewImage from '../images/view.png';
import './ViewGunthicha.css';
import { Link } from 'react-router-dom';

function ViewGunthicha() {
      return (
            <div className="view-gunthicha">
              <div className="image-container">
                <img
                  src={viewgunthichaImage}
                  alt="Mis.Gunthicha Sodkhomkhum"
                  className="full-image"
                  style={{ objectFit: 'cover', width: '150%', maxHeight: '2000px' }}
                />
              </div>
              <div className="header-container">
                <h2 className="header-title">Gunthicha Elegant Constructions</h2>
                <hr className="header-divider" />
              </div>
              <section className="about-section">
              <div className="image-container">
                <img
                  src={viewImage}
                  alt="Mis.Gunthicha Sodkhomkhum"
                  className="full-image"
                  style={{ objectFit: 'scale-down', width: '150%', maxHeight: '600px' }}
                />
              </div>
              </section>
              <br /> <br />
                <div className="gallery-center">
              <div className="project-title-wrapper text-center d-flex align-items-center justify-content-center">
                <div className="line"></div>
                <h2 className="project-title mx-3">PROJECT</h2>
                <div className="line"></div>
              </div>
              <br /> <br />
              <div className="row d-flex flex-row">
                {/* First column */}
                <div className="col-md-4 mb-4 d-flex align-items-stretch"> 
                  <div className="card hover-card" style={{ width: '90%' }}>
                    <img
                      src="https://sinaarchitecturaldesign.com/wp-content/uploads/2017/09/modern-house-architectural-design-sina.jpg"
                      className="card-img-top"
                      alt="Card cap"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Modern Style</h5>
                      <p className="card-text">บ้านสไตล์โมเดิร์นที่มีพื้นที่ใช้สอยกว้างขวาง</p>
                      <p className="card-text"> location: ภูเก็ต, ประเทศไทย</p>
                      <p className="card-text"> timeline: มกราคม 2024 - มิถุนายน 2024</p>
                    </div>
                  </div>
                </div>
                {/* Second column */}
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card hover-card" style={{ width: '90%' }}>
                    <img
                      src="https://th.rightmovepattaya.com/public/upload_pictures/estates/2021/07/15/797_grand-florida-beachfront-20210715115408_1.jpg"
                      className="card-img-top"
                      alt="Card cap"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    
                    <div className="card-body">
                      <h5 className="card-title">Beachfront Condo</h5>
                      <p className="card-text">คอนโดริมทะเลที่มีสิ่งอำนวยความสะดวกสมัยใหม่</p>
                      <p className="card-text"> location: พัทยา, ประเทศไทย</p>
                      <p className="card-text"> timeline: มีนาคม 2023 - พฤศจิกายน 2023</p>
                    </div>
                  </div>
                </div>
                {/* Third column */}
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                  <div className="card hover-card" style={{ width: '90%' }}>
                    <img
                      src="https://images.adsttc.com/media/images/5e66/5dc0/b357/65bd/db00/0024/newsletter/10.jpg?1583766967"
                      className="card-img-top"
                      alt="Card cap"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                    />
                      <div className="card-body">
                      <h5 className="card-title">Office Building</h5>
                      <p className="card-text"> อาคารสำนักงานสูงในเขตศูนย์กลางธุรกิจ</p>
                      <p className="card-text"> location: เชียงใหม่, ประเทศไทย</p>
                      <p className="card-text"> timeline: กุมภาพันธ์ 2021 - ธันวาคม 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <section className="testimonials-section">
                <h2>คำรับรองจากลูกค้า</h2>
                <div className="testimonials">
                  {/* First review */}
                  <div className="testimonial-block">
                    <div className="reviewer-info">
                      <span className="reviewer-name">ซาราห์ วี., เจ้าของวิลล่าภูเก็ต</span>
                      <div className="review-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  <blockquote className="review-text">
                      "การทำงานกับคุณกันธิชาเป็นประสบการณ์ที่ยอดเยี่ยม! วิลล่าที่พวกเขาสร้างให้เกินกว่าความคาดหวังของเรา."
                  </blockquote>
                  </div>
                  {/* Second review */}
                  <div className="testimonial-block">
                    <div className="reviewer-info">
                      <span className="reviewer-name">จอห์น ดี., ผู้พัฒนาพาณิชยกรรม</span>
                      <div className="review-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <blockquote className="review-text">
                      "พวกเขามีความเป็นมืออาชีพและใส่ใจในรายละเอียดมาก ฉันแนะนำเป็นอย่างยิ่ง!"
                    </blockquote>
                  </div>
                </div>
              </section>
                    <section className="contact-section">
                  <h2>ติดต่อเรา</h2>
                  <p>หากคุณต้องการเริ่มโปรเจคใหม่กับเรา สามารถติดต่อได้ที่นี่!</p>
                  <form className="contact-form">
                    <input type="text" placeholder="ชื่อของคุณ" required />
                    <input type="email" placeholder="อีเมลของคุณ" required />
                    <textarea placeholder="ข้อความของคุณ" required></textarea>
                    <button type="submit">ส่งข้อความ</button>
                  </form>
                    </section>


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
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px', }}>
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
export default ViewGunthicha;

