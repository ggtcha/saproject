import React from 'react'
import { Link } from 'react-router-dom';
import './T03.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faUtensils, faCar , faCouch} from '@fortawesome/free-solid-svg-icons';
function T03() {
    return (
        <div className="content">
        <div className="project-image">
            <img src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-TP.20621.jpg" alt="รูปโปรเจค" />
        </div>
        <div className="project-details">
          <br />
            <h1 className='text-center'>ฟังก์ชั่นของบ้าน</h1>
            <hr />
        </div>
        <div className="details-container">
            <div className="details-table">
                <table>
                    <thead>
                        <tr>
                            <th>สิ่งที่ได้รับ</th>
                            <th>จำนวน</th>
                            <th>รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <FontAwesomeIcon icon={faBed} /> ห้องนอน
                                </td>
                            <td>4</td>
                            <td>ขนาดใหญ่และขนาดกลางและเล็ก2ห้อง</td>
                        </tr>
                        <tr>
                                <td>
                                <FontAwesomeIcon icon={faShower} /> ห้องน้ำ
                                </td>
                            <td>3</td>
                            <td>สะดวกสบาย</td>
                        </tr>
                        <tr>
                                 <td>
                                    <FontAwesomeIcon icon={faUtensils} /> ห้องครัว
                                </td>
                            <td>1</td>
                            <td>อุปกรณ์ครบครัน</td>
                        </tr>
                        <tr>
                            <td>
                                <FontAwesomeIcon icon={faCouch} /> ห้องนั่งเล่น
                            </td>
                            <td>1</td>
                            <td>กว้างขวางและสะดวกสบาย</td>
                        </tr>
                        <tr>
                                <td>
                            <FontAwesomeIcon icon={faCar} /> ที่จอดรถ
                                </td>
                            <td>3</td>
                            <td>สะดวก</td>
                        </tr>
                    </tbody>
                </table>
                <p className="price text-center">ราคาเริ่มต้น 12.5 ล้านบาท</p>
            </div>
            <div className="image-right">
                <img src="https://www.royalhouse.co.th/wp-content/uploads/2021/08/RH-TP.2062.jpg" alt="ภาพเสริม" className="small-image" />
            </div>
        </div>
        
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
      </div>
      
        );
      }
      

export default T03;