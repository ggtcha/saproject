import React from 'react'
import './viewpappupa.css';
import ViewpappupaImage from '../images/Viewpappupa.jpg';
import view2Image from '../images/view2.jpg';
import { Link } from 'react-router-dom';
function Viewpappupa() {
  return (
            <div className="view-gunthicha">
              <div className="image-container">
                <img
                  src={ViewpappupaImage}
                  alt="PAPPUPA"
                  className="full-image"
                  style={{ objectFit: 'scale-down', width: '200%', maxHeight: '600px' }}
                />
              </div>
        
              <div className="header-container">
                <h2 className="header-title">Pappupa Projects & Construction</h2>
                <hr className="header-divider" />
              </div>
        
              <section className="about-section">
              <div className="image-container">
                <img
                  src={view2Image}
                  alt="PAPPUPA"
                  className="full-image"
                  style={{ objectFit: 'scale-down', width: '150%', maxHeight: '500px' }}
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
                {/* Fourth column */}
                <div className="col-md-4 mb-4 d-flex align-items-stretch">
                    <div className="card hover-card" style={{ width: '90%' }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwQ5l2irOqRyj8C2pQqv49qmdmT-CBVYafg&s"
                        className="card-img-top"
                        alt="Luxury Villa"
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                    />
                    <div className="card-body">
                        <h5 className="card-title">Luxury Villa</h5>
                        <p className="card-text">วิลลาหรูที่ตั้งอยู่ในบริเวณที่เงียบสงบ</p>
                        <p className="card-text"> location: สมุย, ประเทศไทย</p>
                        <p className="card-text"> timeline: พฤษภาคม 2024 - ธันวาคม 2024</p>
                    </div>
                    </div>
                </div>

            {/* Fifth column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
                <div className="card hover-card" style={{ width: '90%' }}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_yhKaQS24QTSFEksFVsVY9OfSivMx8VvLZg&sg"
                    className="card-img-top"
                    alt="Modern Townhouse"
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">Modern Townhouse</h5>
                    <p className="card-text">ทาวน์เฮาส์สมัยใหม่ที่มีการออกแบบทันสมัย</p>
                    <p className="card-text"> location: กรุงเทพฯ, ประเทศไทย</p>
                    <p className="card-text"> timeline: เมษายน 2024 - กันยายน 2024</p>
                </div>
                </div>
            
                </div>
                {/* Third column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card hover-card" style={{ width: '90%' }}>
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolZZSE2iDML7Yuqm-z_38WKTQxHRjc2L0fg&s"
                className="card-img-top"
                alt="Card cap"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}  
                />
                <div className="card-body">
                <h5 className="card-title">High-Rise Residential</h5>
                <p className="card-text">อาคารที่อยู่อาศัยสูงที่ออกแบบมาเพื่อตอบสนองความต้องการของผู้อยู่อาศัย</p>
                <p className="card-text"> location: นครปฐม, ประเทศไทย</p>
                <p className="card-text"> timeline: มิถุนายน 2024 - ธันวาคม 2025</p>
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
                    <span className="reviewer-name">นางสาวอารีย์, เจ้าของบ้านพักตากอากาศ</span>
                      <div className="review-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <blockquote className="review-text">
                    "เราได้รับประสบการณ์ที่ดีมากจากการทำงานกับบริษัทนี้ วิลล่าของเรานั้นสวยงามและตอบโจทย์ความต้องการของเราได้อย่างลงตัว!"
                    </blockquote>
                  </div>

                  {/* Second review */}
                  <div className="testimonial-block">
                    <div className="reviewer-info">
                      <span className="reviewer-name">มาร์ค เอล., เจ้าของคอนโดมิเนียมกรุงเทพฯ</span>
                      <div className="review-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <blockquote className="review-text">
                    "ทีมงานของคุณกันธิชาทำงานได้อย่างมีประสิทธิภาพและสร้างคอนโดที่สวยงามมาก!"
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
        <div className="col-md-4 text-center" style={{ flex: '1 1 350px', maxWidth: '550px' }}>
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

export default Viewpappupa;