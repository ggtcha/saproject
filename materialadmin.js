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

    useEffect(() => {
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
