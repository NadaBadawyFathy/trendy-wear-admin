import React from 'react';
import { FaHome, FaClock, FaBox, FaCommentDots, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import admin from '../../assests/admin.svg'

function SidebarItem({ icon, label, onClick, active }) {
  return (
    <div
      className={`flex items-center space-x-3 px-4 py-2 rounded-full cursor-pointer transition ${
        active ? "bg-white text-[#201252] font-semibold" : "text-[#201252] hover:bg-white"
      }`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-100 bg-[#F3EDED] p-5 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Profile */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={admin}
              alt="profile"
              className="w-14 h-14 rounded-full"
            />
            <span className="absolute top-1 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#f3eded] rounded-full" />
          </div>
          <div>
            <p className="text-sm">Jack</p>
            <p className="text-black font-bold text-md">Admin</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-6">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-3 rounded-full bg-white text-sm outline-none"
          />
        </div>

        {/* Menu Items */}
        <nav className="mt-8 space-y-4">
          <SidebarItem 
            icon={<FaHome />} 
            label="Dashboard" 
            onClick={() => navigate('/dashboard')} 
          />
          <SidebarItem 
            icon={<FaClock />} 
            label="Analytics" 
            onClick={() => navigate('/analytics')} 
          />
          <SidebarItem 
            icon={<FaBox />} 
            label="Products" 
            onClick={() => navigate('/products')} 
          />
          <SidebarItem 
            icon={<FaCommentDots />} 
            label="Review" 
            onClick={() => navigate('/review')} 
          />
        </nav>
      </div>

      {/* Logout */}
      <div 
        className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-black"
        onClick={() => navigate('/')}
      >
        <FaSignOutAlt />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  );
}