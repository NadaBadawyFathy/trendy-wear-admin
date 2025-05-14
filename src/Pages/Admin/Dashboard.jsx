import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Trash2 } from 'lucide-react';
import dash1 from '../../assests/dash 1.svg'
import dash2 from '../../assests/dash 2.svg'
import edge from '../../assests/arrow-left.svg'
import edge1 from '../../assests/arrow_forward.svg'

import { useNavigate} from "react-router-dom";
const users = [
  { name: 'Bluenose', status: 'Verified' },
  { name: 'Pennywise', status: 'Pending' },
  { name: 'Flotsam', status: 'Verified' },
  { name: 'Gregautsch', status: 'Unverified' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Verified':
      return 'text-green-500';
    case 'Pending':
      return 'text-yellow-500';
    case 'Unverified':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};
const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F3EDED] p-4 md:p-8 font-sans">
      <div className='flex gap-2'>
      <img src={edge} alt="" className='mb-3' style={{cursor:'pointer'}} onClick={()=> {navigate('/siderbar')}} />
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      </div>
      <p className="mb-6 text-gray-700">In the last 30 days,</p>

      {/* Revenue Generated Card */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <p className="text-gray-700">Revenue generated</p>
        <h2 className="text-2xl font-bold">$400,000</h2>
        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <span className="w-3 h-3 bg-[#5e3a10] rounded-full"></span>
              <span>pantalon</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <span className="w-3 h-3 bg-[#c58940] rounded-full"></span>
              <span>Shortes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <span className="w-3 h-3 bg-[#e1bb80] rounded-full"></span>
              <span>Dresses</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-3 h-3 bg-[#eee] rounded-full border"></span>
              <span>Others</span>
            </div>
          </div>
          <div className="relative w-24 h-24">
            <img src={dash1} alt="Sales Chart" className="w-full h-full object-contain" />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-bold text-black">
              100%<br />Sales
          </div>
</div>

        </div>
      </div>

      {/* Achieving Goal and Total Users */}
      <div className="flex md:flex-row items-center justify-between gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow flex-1 flex items-center justify-between">
          <div>
            <p className="text-gray-700">Achieving Goal</p>
            <div className="relative w-16 h-16 mt-2">
  <img
    src={dash2}
    alt="Goal Progress"
    className="w-full h-full object-contain"
  />
  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black">
    70%
  </div>
</div>

          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow flex-1 flex items-center justify-between">
          <div>
            <p className="text-gray-700">Total Users</p>
            <div className="mt-2 text-2xl font-bold">35,000</div>
          </div>
          <FaUser className="text-2xl text-[#5e3a10]" />
        </div>
      </div>

      {/* Users Table */}
      <div className='flex gap-2'>
      <img src={edge1} alt="" className='mb-3' style={{cursor:'pointer'}} onClick={()=> {navigate('/siderbar')}} />
      <h2 className="font-semibold text-lg mb-2">All Users</h2>
      </div>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#f0e6e3] text-gray-700">
            <tr>
              <th className="p-3">Users</th>
              <th className="p-3">Status</th>
              <th className="p-3">Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={`/src/assests/user${index + 1}.svg`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {user.name}
                </td>
                <td className={`p-3 font-medium ${getStatusColor(user.status)}`}>{user.status}</td>
                <td className="p-3 text-red-500 cursor-pointer">
                  <Trash2 size={18}/> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;