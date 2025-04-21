import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import './ReportsAdmin.css';

const FeedbackReport = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = () => {
    const sampleData = [
      { id: 1, name: 'คุณสมชาย', email: 'somchaieiei@gmail.com', feedback: 'บ้านสวยมากจ้าาา', status: 'pending' },
      { id: 2, name: 'คุณสายสมร', email: 'saisomjaaa@gmail.com', feedback: 'ผู้รับเหมาบริการที่สุดๆๆเลย', status: 'pending' },
    ];
    setFeedbackData(sampleData);
  };

  const handleApprove = (id) => {
    setFeedbackData(feedbackData.map((item) =>
      item.id === id ? { ...item, status: 'approved' } : item
    ));
  };

  const handleDelete = (id) => {
    setFeedbackData(feedbackData.filter((item) => item.id !== id));
  };

  return (
    <div className="reports-admin-container">
      <h2>Reports</h2>
      <hr />
      <table className="feedback-table">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>อีเมล</th>
            <th>ความคิดเห็น</th>
            <th>สถานะ</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map(({ id, name, email, feedback, status }) => (
            <tr key={id} className="feedback-row">
              <td>{name}</td>
              <td>{email}</td>
              <td>{feedback}</td>
              <td>{status === 'pending' ? 'รอดำเนินการ' : 'อนุมัติแล้ว'}</td>
              <td>
                {status === 'pending' && (
                  <FaCheckCircle
                    className="text-success me-2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleApprove(id)}
                  />
                )}
                <FaTrashAlt
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackReport;
