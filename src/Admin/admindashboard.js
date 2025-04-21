import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './AdminDashboard.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
function AdminDashboard() {
  const lineData = useMemo(() => ({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Projects Completed',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: true,
        data: [65, 59, 80, 81, 56],
      },
    ],
  }), []);

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Projects Completed Over Months',
      },
    },
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="chart-container">
        <Line data={lineData} options={lineOptions} />
      </div>

      <table className="summary-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Projects Completed</th>
          </tr>
        </thead>
        <tbody>
          {lineData.labels.map((month, index) => (
            <tr key={index}>
              <td>{month}</td>
              <td>{lineData.datasets[0].data[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
