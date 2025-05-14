import React from "react";
import { useNavigate} from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3EDED]">
      <div className="w-full max-w-sm p-8">
        <h2 className="text-4xl font-medium mb-10 text-center">sign in as admin</h2>
        <form className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="password"
            className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
          <button
            type="submit" style={{marginTop:'80px'}}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition text-center text-2xl"
            onClick={() => {
              navigate(`/siderbar`)
          }
          }
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
