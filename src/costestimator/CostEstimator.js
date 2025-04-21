import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CostEstimator.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function CostEstimator() {
    const costData = [
        { no: 1, name: "งานโครงสร้าง", percentage: 28 },
        { no: 2, name: "งานหลังคา", percentage: 7 },
        { no: 3, name: "งานพื้น/ตกแต่งพื้น", percentage: 9 },
        { no: 4, name: "งานผนัง/ตกแต่งผนัง", percentage: 15 },
        { no: 5, name: "งานฝ้าเพดาน", percentage: 3 },
        { no: 6, name: "งานประตู/หน้าต่าง", percentage: 10 },
        { no: 7, name: "งานบันได", percentage: 3 },
        { no: 8, name: "งานสี", percentage: 5 },
        { no: 9, name: "งานไฟฟ้า", percentage: 5 },
        { no: 10, name: "งานประปา/สุขาภิบาล", percentage: 5 },
        { no: 11, name: "งานสุขภัณฑ์", percentage: 3 },
        { no: 12, name: "งานเบ็ดเตล็ด", percentage: 4 },
        { no: 13, name: "งานเตรียมการ", percentage: 3 },
    ];

    const [totalCost, setTotalCost] = useState('');
    const [resultRows, setResultRows] = useState([]);
    const [totals, setTotals] = useState({
        totalCost: 0,
        totalMaterial: 0,
        totalLabor: 0,
    });

    const formatNumber = (input) => {
        let value = input.replace(/,/g, '');
        if (isNaN(value)) {
            return totalCost;
        } else {
            return new Intl.NumberFormat().format(value);
        }
    };

    const handleCostChange = (e) => {
        let formattedValue = formatNumber(e.target.value);
        setTotalCost(formattedValue);
    };

    const calculateCosts = () => {
        let rawTotalCost = parseFloat(totalCost.replace(/,/g, ''));

        if (isNaN(rawTotalCost)) {
            alert("กรุณากรอกตัวเลขต้นทุนให้ถูกต้อง");
            return;
        }

        let totalMaterial = 0;
        let totalLabor = 0;
        let rows = [];

        costData.forEach(item => {
            let itemCost = rawTotalCost * (item.percentage / 100);
            let materialCost = itemCost * 0.75;
            let laborCost = itemCost * 0.25;

            totalMaterial += materialCost;
            totalLabor += laborCost;
            rows.push(
                <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.percentage}%</td>
                    <td>{new Intl.NumberFormat().format(itemCost)}</td>
                    <td>{new Intl.NumberFormat().format(materialCost)}</td>
                    <td>{new Intl.NumberFormat().format(laborCost)}</td>
                </tr>
            );
        });

        setResultRows(rows);
        setTotals({
            totalCost: rawTotalCost,
            totalMaterial,
            totalLabor,
        });
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column"> {/* เพิ่ม class สำหรับจัดให้อยู่ตรงกลาง */}
            <h2>โปรแกรมประมาณราคาก่อสร้าง</h2>
   
            <label htmlFor="totalCost">ต้นทุน (หน่วย: บาท):</label>
            <input
                type="text"
                id="totalCost"
                className="form-control mb-4"
                value={totalCost}
                placeholder="กรอกต้นทุน"
                onChange={handleCostChange}
                style={{ maxWidth: '500px' }} // กำหนดความกว้างของ input
            />
    
                <button 
                className="btn btn-primary mt-2" 
                onClick={calculateCosts} 
                style={{ width: '200px', height: '50px', fontSize: '18px' }} // กำหนดขนาดที่ต้องการ
            >
                คำนวณ
            </button>
    
            <table className="table tabl-bordered mt-4" style={{ maxWidth: '80%' }}> {/* จำกัดความกว้างของตาราง */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>รายการ</th>
                        <th>%ต้นทุน</th>
                        <th>ต้นทุน</th>
                        <th>ค่าของ</th>
                        <th>ค่าแรง</th>
                    </tr>
                </thead>
                <tbody id="resultsTable">
                    {resultRows}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3"><b>รวม</b></td>
                        <td>{new Intl.NumberFormat().format(totals.totalCost)}</td>
                        <td>{new Intl.NumberFormat().format(totals.totalMaterial)}</td>
                        <td>{new Intl.NumberFormat().format(totals.totalLabor)}</td>
                    </tr>
                </tfoot>
            </table>
            <h4 className="mt-4">รายละเอียดค่าแรงเฉลี่ยสำหรับแต่ละงาน</h4>
            <table className="table table-striped table-bordered" style={{ maxWidth: '80%' }}> {/* จำกัดความกว้างของตาราง */}
                <thead>
                    <tr>
                        <th>รายการ</th>
                        <th>ค่าแรงเฉลี่ย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>งานโครงสร้าง</td>
                        <td>ค่าแรงคิดเป็น 20-25% ของต้นทุน หรือ 1,000-1,500 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานหลังคา</td>
                        <td>ค่าแรงคิดเป็น 25-35% ของต้นทุน หรือ 150-450 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานพื้น</td>
                        <td>ค่าแรงคิดเป็น 25-35% ของต้นทุน หรือ 180-250 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานผนัง</td>
                        <td>ค่าแรงคิดเป็น 35-45% ของต้นทุน หรือ 120-250 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานฝ้าเพดาน</td>
                        <td>ค่าแรงคิดเป็น 25-35% ของต้นทุน หรือ 100-150 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานประตูหน้าต่าง</td>
                        <td>ค่าแรงติดตั้งบานประตูไม้ 300-2,000 บาท/บาน</td>
                    </tr>
                    <tr>
                        <td>งานบันได</td>
                        <td>ค่าแรงคิดเป็น 15-20% ของต้นทุน</td>
                    </tr>
                    <tr>
                        <td>งานสี</td>
                        <td>ค่าแรงคิดเป็น 40-50% ของต้นทุน หรือ 50-70 บาท/ตร.ม.</td>
                    </tr>
                    <tr>
                        <td>งานไฟฟ้า</td>
                        <td>ค่าแรงคิดเป็น 45-50% ของต้นทุน หรือ 300-1,200 บาท/จุด</td>
                    </tr>
                    <tr>
                        <td>งานประปาและสุขาภิบาล</td>
                        <td>ค่าแรงคิดเป็น 20-30% ของต้นทุน</td>
                    </tr>
                    <tr>
                        <td>งานสุขภัณฑ์</td>
                        <td>ค่าแรงคิดเป็น 15-25% ของต้นทุน หรือ 100-1,000 บาท/จุด</td>
                    </tr>
                </tbody>
            </table>
            <br /> <br /> <br />
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
                        <br /> <br /> <br />
                        <h5>CONTACT</h5>
                        <p>1234 Dreamland Avenue, Fantasy City, Wonderland 56789</p>

                        <br /> 
                        <p>tel : 02-789-1234 , 02-123-4567 </p>
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
export default CostEstimator;
