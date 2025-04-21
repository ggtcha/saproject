import React, { useState, useEffect } from 'react';
import './MaterialAdmin.css';

const MaterialForm = ({ newMaterial, setNewMaterial, onSubmit, isEditing }) => {
    return (
        <div>
            <h3>{isEditing ? 'แก้ไขวัสดุก่อสร้าง' : 'เพิ่มวัสดุก่อสร้างใหม่'}</h3>
            <input
                type="text"
                placeholder="ชื่อวัสดุ"
                value={newMaterial.name}
                onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                className="input-field"
            />
            <input
                type="text"
                placeholder="หมวดหมู่"
                value={newMaterial.category}
                onChange={(e) => setNewMaterial({ ...newMaterial, category: e.target.value })}
                className="input-field"
            />
            <input
                type="text"
                placeholder="รายละเอียด"
                value={newMaterial.details}
                onChange={(e) => setNewMaterial({ ...newMaterial, details: e.target.value })}
                className="input-field"
            />
            <input
                type="text"
                placeholder="ยี่ห้อ/ผู้ผลิต"
                value={newMaterial.brand}
                onChange={(e) => setNewMaterial({ ...newMaterial, brand: e.target.value })}
                className="input-field"
            />
            <input
                type="text"
                placeholder="ราคา"
                value={newMaterial.price}
                onChange={(e) => setNewMaterial({ ...newMaterial, price: e.target.value })}
                className="input-field"
            />
            <input
                type="text"
                placeholder="หน่วยที่ขาย"
                value={newMaterial.unit}
                onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                className="input-field"
            />
            <button onClick={onSubmit}>
                {isEditing ? 'บันทึกการแก้ไข' : 'เพิ่มวัสดุ'}
            </button>
        </div>
    );
};

const MaterialTable = ({ materials, onEdit }) => {
    return (
        <table className="feedback-table">
            <thead>
                <tr>
                    <th>ชื่อวัสดุ</th>
                    <th>หมวดหมู่</th>
                    <th>รายละเอียด</th>
                    <th>ยี่ห้อ/ผู้ผลิต</th>
                    <th>ราคา</th>
                    <th>หน่วยที่ขาย</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody>
                {materials.map(material => (
                    <tr key={material.id}>
                        <td>{material.name}</td>
                        <td>{material.category}</td>
                        <td>{material.details}</td>
                        <td>{material.brand}</td>
                        <td>{material.price}</td>
                        <td>{material.unit}</td>
                        <td>
                            <button className="action-icon" onClick={() => onEdit(material.id)}>แก้ไข</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const MaterialAdmin = () => {
    const [materials, setMaterials] = useState([]);
    const [newMaterial, setNewMaterial] = useState({ name: '', category: '', details: '', brand: '', price: '', unit: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => { //ตัวอย่างใส่ไว้ถ้าขก.กดเพิ่ม//
        const initialMaterials = [
            {
                id: 1,
                name: 'น็อตเหล็กเกลียว',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด M10 x 30 mm, น้ำหนักประมาณ 15 กรัม, มีความต้านทานแรงดึงสูง',
                brand: 'Siam Screw',
                price: 'ประมาณ 5 บาท/ตัว',
                unit: 'ตัว',
            },
            {
                id: 2,
                name: 'ทรายหยาบ',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 1-4 มม., น้ำหนักประมาณ 1,600 กก./ตร.ม., ทนทานต่อการกัดกร่อน',
                brand: 'Siam Sand',
                price: 'ประมาณ 400-600 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 3,
                name: 'ท่อพีวีซีขนาด 1 นิ้ว',
                category: 'วัสดุพลาสติก',
                details: 'ขนาด 1 นิ้ว, ยาว 6 เมตร, น้ำหนักประมาณ 0.8 กก./เมตร, ทนทานต่อแรงดันน้ำ',
                brand: 'SCG',
                price: 'ประมาณ 60-80 บาท/เมตร',
                unit: 'เมตร',
            },
            {
                id: 4,
                name: 'หินกรวด',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 5-20 มม., น้ำหนักประมาณ 1,800 กก./ตร.ม., เหมาะสำหรับงานฐานราก',
                brand: 'Boonthavorn',
                price: 'ประมาณ 500-700 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 5,
                name: 'สายไฟฟ้า (THW)',
                category: 'สายไฟ',
                details: 'ขนาด 2.5 ตร.มม., น้ำหนักประมาณ 15 กก./100 เมตร, มาตรฐาน IEC 60227',
                brand: 'Thai Obayashi',
                price: 'ประมาณ 300-350 บาท/100 เมตร',
                unit: 'เมตร',
            },
            {
                id: 6,
                name: 'สกรูป้องกันสนิม',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด 4 x 25 mm, น้ำหนักประมาณ 3 กรัม, เหมาะสำหรับงานกลางแจ้ง',
                brand: 'Aston',
                price: 'ประมาณ 10 บาท/ตัว',
                unit: 'ตัว',
            },
            {
                id: 7,
                name: 'ทรายละเอียด',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 0.1-0.5 มม., น้ำหนักประมาณ 1,700 กก./ตร.ม., เหมาะสำหรับงานปูนฉาบ',
                brand: 'Thai Silica',
                price: 'ประมาณ 450-650 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 8,
                name: 'ท่อพีวีซีขนาด 2 นิ้ว',
                category: 'วัสดุพลาสติก',
                details: 'ขนาด 2 นิ้ว (50 มม.), ยาว 6 เมตร, น้ำหนักประมาณ 1.5 กก./เมตร, ทนทานต่อแรงดันน้ำ',
                brand: 'Thai Pipe',
                price: 'ประมาณ 100-120 บาท/เมตร',
                unit: 'เมตร',
            },
            {
                id: 9,
                name: 'หินแกรนิต',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 1x1 นิ้ว, น้ำหนักประมาณ 2,650 กก./ตร.ม., ทนทานต่อการกัดกร่อน',
                brand: 'Granite Corp.',
                price: 'ประมาณ 1,500-2,500 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 10,
                name: 'เบรกเกอร์',
                category: 'อุปกรณ์ไฟฟ้า',
                details: 'ขนาด 16A 2P, มาตรฐาน IEC 60898',
                brand: 'Schneider Electric',
                price: 'ประมาณ 250-300 บาท/ชิ้น',
                unit: 'ชิ้น',
            },
            {
                id: 11,
                name: 'น็อตดาว',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด M8, น้ำหนักประมาณ 20 กรัม, มีปีกช่วยกระจายแรง',
                brand: 'Thai Nut',
                price: 'ประมาณ 8 บาท/ตัว',
                unit: 'ตัว',
            },
            {
                id: 12,
                name: 'ทรายกรวด',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 5-20 มม., น้ำหนักประมาณ 1,800 กก./ตร.ม., ใช้สำหรับการก่อสร้างฐานราก',
                brand: 'Boonthavorn',
                price: 'ประมาณ 500-700 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 13,
                name: 'ท่อเหล็กสี่เหลี่ยม',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด 2 นิ้ว x 2 นิ้ว, ยาว 6 เมตร, น้ำหนักประมาณ 3.6 กก./เมตร',
                brand: 'Siam Steel',
                price: 'ประมาณ 100-120 บาท/เมตร',
                unit: 'เมตร',
            },
            {
                id: 14,
                name: 'หินภูเขาไฟ',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 1-2 นิ้ว, น้ำหนักประมาณ 2,300 กก./ตร.ม., ใช้ในงานก่อสร้างที่ต้องการความทนทาน',
                brand: 'Volcanic Rock Co.',
                price: 'ประมาณ 600-800 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 15,
                name: 'ไฟ LED',
                category: 'อุปกรณ์ไฟฟ้า',
                details: 'ขนาด 9W 220V, อายุการใช้งานประมาณ 25,000 ชั่วโมง',
                brand: 'Philips',
                price: 'ประมาณ 150-180 บาท/ชิ้น',
                unit: 'ชิ้น',
            },
            {
                id: 16,
                name: 'สกรูไม้',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด 3.5 x 30 mm, น้ำหนักประมาณ 5 กรัม, มีเกลียวเฉพาะสำหรับไม้',
                brand: 'Dura Wood',
                price: 'ประมาณ 6 บาท/ตัว',
                unit: 'ตัว',
            },
            {
                id: 17,
                name: 'หินทราย',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 0.5-1 นิ้ว, น้ำหนักประมาณ 2,200 กก./ตร.ม., ใช้ในการก่อสร้างและปูพื้น',
                brand: 'Sandstone Ltd.',
                price: 'ประมาณ 300-500 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
            {
                id: 18,
                name: 'ท่อเหล็กรีดร้อน',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด 3 นิ้ว, ยาว 6 เมตร, น้ำหนักประมาณ 5.5 กก./เมตร',
                brand: 'Mitsubishi Steel',
                price: 'ประมาณ 150-170 บาท/เมตร',
                unit: 'เมตร',
            },
            {
                id: 19,
                name: 'สายไฟฟ้า (VAF)',
                category: 'สายไฟ',
                details: 'ขนาด 1.5 ตร.มม. 3 สาย, น้ำหนักประมาณ 12 กก./100 เมตร',
                brand: 'Siam Cable',
                price: 'ประมาณ 250-300 บาท/100 เมตร',
                unit: 'เมตร',
            },
            {
                id: 20,
                name: 'น็อตปีก',
                category: 'วัสดุเหล็ก',
                details: 'ขนาด M6, น้ำหนักประมาณ 12 กรัม, ใช้งานง่ายไม่ต้องใช้เครื่องมือ',
                brand: 'Nuts & Bolts Co.',
                price: 'ประมาณ 7 บาท/ตัว',
                unit: 'ตัว',
            },
            {
                id: 21,
                name: 'หินดินดาน',
                category: 'วัสดุก่อสร้าง',
                details: 'ขนาด 0.5-1 นิ้ว, น้ำหนักประมาณ 2,700 กก./ตร.ม., ใช้สำหรับปูพื้นและหลังคา',
                brand: 'Slateworks',
                price: 'ประมาณ 1,000-1,500 บาท/ตร.ม.',
                unit: 'ตร.ม.',
            },
                
];


        setMaterials(initialMaterials);
    }, []);

    // ฟังก์ชันสำหรับเพิ่มวัสดุใหม่
    const handleAddMaterial = () => {
        const newId = materials.length ? materials[materials.length - 1].id + 1 : 1;
        setMaterials([...materials, { id: newId, ...newMaterial }]);
        setNewMaterial({ name: '', category: '', details: '', brand: '', price: '', unit: '' });
    };

    // ฟังก์ชันสำหรับแก้ไขวัสดุ
    const handleEditMaterial = (id) => {
        const materialToEdit = materials.find(material => material.id === id);
        setNewMaterial(materialToEdit);
        setEditingId(id);
    };

    // ฟังก์ชันสำหรับอัปเดตวัสดุ
    const handleUpdateMaterial = () => {
        setMaterials(materials.map(material => (material.id === editingId ? { ...newMaterial, id: editingId } : material)));
        setNewMaterial({ name: '', category: '', details: '', brand: '', price: '', unit: '' });
        setEditingId(null);
    };

    return (
        <div className="materials-admin-container">
            <h2>Materials</h2>
            <hr />
            <MaterialTable materials={materials} onEdit={handleEditMaterial} />
            
            
            <div style={{ marginTop: '20px' }}></div>

            <MaterialForm 
                newMaterial={newMaterial} 
                setNewMaterial={setNewMaterial} 
                onSubmit={editingId ? handleUpdateMaterial : handleAddMaterial} 
                isEditing={!!editingId} 
            />
        </div>
    );
};

export default MaterialAdmin;
