import React from 'react'
import ViewRachataImage from '../images/ViewRachata.jpg';
import view4Image from '../images/view4.jpg';
import './viewRachata.css';
import { Link } from 'react-router-dom';
function ViewRachata() {
    return (
        <div className="view-gunthicha">
          <div className="image-container">
            <img
              src={ViewRachataImage}
              alt="Innovate Structures Co., Ltd."
              className="full-image"
              style={{ objectFit: 'scale-down', width: '150%', maxHeight: '600px' }}
            />
          </div>
    
          <div className="header-container">
            <h1 className="header-title">Rachata Construction Co., Ltd.</h1>
            <hr className="header-divider" />
          </div>
    
          <section className="about-section">
          <div className="image-container">
            <img
              src={view4Image}
              alt="Innovate Structures Co., Ltd."
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
                  src="https://i.pinimg.com/564x/b3/49/da/b349da087ba80eb7d53bb13dfc88001c.jpg"
                  className="card-img-top"
                  alt="Card cap"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Luxury Villa</h5>
                  <p className="card-text">วิลล่าหรูที่มีสระว่ายน้ำส่วนตัวและวิวทะเล</p>
                  <p className="card-text"> location: สมุย, ประเทศไทย</p>
                  <p className="card-text"> timeline: เมษายน 2023 - ตุลาคม 2023 </p>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card hover-card" style={{ width: '90%' }}>
                <img
                  src="https://d251cvb8f7e7p0.cloudfront.net/images/Article_Images/ImageForArticle_8466_16412982977661622.jpg"
                  className="card-img-top"
                  alt="Card cap"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <h5 className="card-title">Eco-Friendly Home</h5>
                  <p className="card-text">บ้านที่ออกแบบมาอย่างยั่งยืนและเป็นมิตรกับสิ่งแวดล้อม</p>
                  <p className="card-text"> location: เชียงราย, ประเทศไทย </p>
                  <p className="card-text">  timeline: สิงหาคม 2022 - มกราคม 2023</p>
                </div>
              </div>
            </div>

            {/* Third column */}
            <div className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card hover-card" style={{ width: '90%' }}>
                <img
                  src="https://www.arm.co.th/App_Photo/CATE_592024175052579.png"
                  className="card-img-top"
                  alt="Card cap"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                />
                  <div className="card-body">
                  <h5 className="card-title">Smart Home</h5>
                  <p className="card-text"> บ้านที่มีเทคโนโลยีสมาร์ทเพื่อความสะดวกสบายสูงสุด</p>
                  <p className="card-text"> location: เชียงใหม่, ประเทศไทย</p>
                  <p className="card-text"> timeline: มกราคม 2023 - สิงหาคม 2023</p>
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
                  <span className="reviewer-name">มาร์ก เอล., เจ้าของคอนโดมิเนียม</span>
                  <div className="review-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <blockquote className="review-text">
                "ทีมงานของคุณกันธิชาทำงานได้อย่างมีประสิทธิภาพและสร้างคอนโดที่มีคุณภาพดีมาก!"
                </blockquote>
              </div>

              {/* Second review */}
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
                "การสร้างบ้านของเรานั้นมีความราบรื่น และคุณกันธิชาเข้าใจความต้องการของเราเป็นอย่างดี!"
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
export default ViewRachata;