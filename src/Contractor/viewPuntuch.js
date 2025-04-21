import React from 'react'
import ViewPuntuchImage from '../images/ViewPuntuch.jpg';
import view3Image from '../images/view3.jpg';
import { Link } from 'react-router-dom';
function ViewPuntuch() {
    return (
        <div className="view-gunthicha">
          <div className="image-container">
            <img
              src={ViewPuntuchImage}
              alt="Mis.Gunthicha Sodkhomkhum"
              className="full-image"
              style={{ objectFit: 'scale-down', width: '150%', maxHeight: '600px' }}
            />
          </div>
    
          <div className="header-container">
            <h2 className="header-title">Puntuch Engineering & Build</h2>
            <hr className="header-divider" />
          </div>
    
          <section className="about-section">
          <div className="image-container">
            <img
              src={view3Image}
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
                  src="https://i.pinimg.com/control/564x/0b/db/5a/0bdb5adb5f7e09bf2e3d5703efbec22b.jpg"
                  className="card-img-top"
                  alt="Card cap"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Contemporary Residence</h5>
                  <p className="card-text">ที่อยู่อาศัยร่วมสมัยที่มีดีไซน์ที่ทันสมัยและสะดวกสบาย</p>
                  <p className="card-text"> location: นครราชสีมา, ประเทศไทย</p>
                  <p className="card-text"> timeline: มิถุนายน 2024 - ธันวาคม 2024 </p>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card hover-card" style={{ width: '90%' }}>
                <img
                  src="https://i.pinimg.com/564x/98/1e/82/981e82ecca56f535b8f2c10a1038a69f.jpg"
                  className="card-img-top"
                  alt="Traditional Thai House"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Traditional Thai House</h5>
                  <p className="card-text">บ้านไทยที่มีสถาปัตยกรรมแบบดั้งเดิมและสวยงาม</p>
                  <p className="card-text"> location: สุโขทัย, ประเทศไทย </p>
                  <p className="card-text"> timeline: กันยายน 2022 - มีนาคม 2023</p>
                </div>
              </div>
            </div>

            {/* Third column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card hover-card" style={{ width: '90%' }}>
                <img
                  src="https://i.pinimg.com/564x/09/90/1f/09901fd43cb27f62752ad837c6d7b4a2.jpg"
                  className="card-img-top"
                  alt="Card cap"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                  <div className="card-body">
                  <h5 className="card-title">High-Rise Apartment</h5>
                  <p className="card-text"> อพาร์ตเมนต์สูงที่มีวิวสวยงามของเมือง</p>
                  <p className="card-text"> location: กรุงเทพฯ, ประเทศไทย</p>
                  <p className="card-text"> timeline: เมษายน 2024 - ธันวาคม 2024</p>
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
                  <span className="reviewer-name">ราตรี ก., เจ้าของอาคารสำนักงาน</span>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <blockquote className="review-text">
                "เราประทับใจในคุณภาพและความทันสมัยของอาคารสำนักงานที่สร้างให้!"
                </blockquote>
              </div>

              {/* Second review */}
              <div className="testimonial-block">
                <div className="reviewer-info">
                  <span className="reviewer-name">อุดมศักดิ์ ส., ผู้จัดการโครงการ</span>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <blockquote className="review-text">
                "มีความเป็นมืออาชีพและสร้างผลงานที่เหนือความคาดหมาย!"
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
        <div className="col-md-4" style={{ flex: '1 1 350px', maxWidth: '450px',}}>
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
export default ViewPuntuch;