import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { Link } from 'react-router-dom';
import home2Image from '../images/home2.jpg';
import homeImage from '../images/home.jpg';
import home1Image from '../images/home1.jpg';
import GunthichaImage from '../images/Gunthicha.jpg';
import PappupaImage from '../images/Pappupa.jpg';
import RachataImage from '../images/Rachata.jpg';
import PuntuchImage from '../images/Puntuch.jpg';
import viewhomeImage from '../images/viewhome.jpg';
import viewhome2Image from '../images/viewhome2.png';
const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={home2Image}
            className="d-block w-100"
            alt="First slide"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <div className="carousel-caption text-start">
            <h1>Modern Homes for a New Generation</h1>
            <p>Stylish, Sustainable, and Smartly Designed.</p>
            <a className="btn btn-primary" href="/design" role="button">Explore Designs</a>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={homeImage}
            className="d-block w-100"
            alt="Second slide"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <div className="carousel-caption text-start">
            <h1>Built to Last</h1>
            <p>Our projects stand the test of time.</p>
            <a className="btn btn-primary" href="/projects" role="button">View Projects</a>
          </div>
        </div>
        
        <div className="carousel-item">
          <img
            src={home1Image}
            className="d-block w-100"
            alt="Third slide"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <div className="carousel-caption text-start">
            <h1>Your Dream Home Awaits</h1>
            <p>Let us bring your vision to life.</p>
            <a className="btn btn-primary" href="/aboutus" role="button">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}
const Home = () => {
  return (
    
    <main>
      <Carousel />
      <br />
      <div className="text-center">
        <img
          src={viewhomeImage} 
          alt="Expert Team"
          style={{ width: '100%', height: 'auto', margin: '10px 0' }} 
        />
      </div>
      <div className="text-center">
        <img
          src={viewhome2Image} 
          alt="Expert Team"
          style={{ width: '100%', height: 'auto', margin: '10px 0' }} 
        />
      </div>
      <br />
      <h1 className="text-center" style={{ color: '#333' }}>Our Expert Team</h1>
      <hr style={{
          width: '50%',
          margin: 'auto',
          border: '2px solid #333',
        }} />

    
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <img
                src={GunthichaImage}
                alt="Gunthicha"
                className="card-img-top rounded-circle mt-4"
                style={{ width: '160px', height: '160px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body">
                <h6 className="card-title">Gunthicha Elegant Constructions</h6>
                <Link className="btn btn-outline-primary" to="/viewgunthicha">
                  View details »
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <img
                src={PappupaImage}
                alt="Pappupa"
                className="card-img-top rounded-circle mt-4"
                style={{ width: '160px', height: '160px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body">
                <h6 className="card-title">Pappupa Projects & Construction</h6>
                <a className="btn btn-outline-primary" href="/viewpappupa">
                  View details »
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <img
                src={RachataImage}
                alt="Rachata"
                className="card-img-top rounded-circle mt-4"
                style={{ width: '160px', height: '160px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body">
                <h6 className="card-title">Rachata Construction Co., Ltd.</h6>
                <a className="btn btn-outline-primary" href="/viewRachata">
                  View details »
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <img
                src={PuntuchImage}
                alt="Puntuch"
                className="card-img-top rounded-circle mt-4"
                style={{ width: '160px', height: '160px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body">
                <h6 className="card-title">Puntuch Engineering & Build</h6>
                <a className="btn btn-outline-primary" href="/viewPuntuch">
                  View details »
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br /><br /><br />
      {/* Testimonials Section */}
      <div style={{ backgroundColor: '#000000', color: 'white', padding: '20px 0', width: '100vw' }}>
        <div className="row justify-content-start" style={{ margin: '0', paddingLeft: '50px' }}>
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
            <br /><br /><br />
            <h5>CONTACT</h5>
            <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>

            <br />
            <p>tel : 02-789-1234 , 02-123-4567 </p>
          </div>

          <div className="col-md-4">
            <br /><br /><br />
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

      <hr className="featurette-divider" />
    </main>
  );
};

export default Home;

