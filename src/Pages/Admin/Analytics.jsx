import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import edge from '../../assests/arrow-left.svg'
const Analytics = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Brand Nike Pants",
    "Brand Levi’s Jeans",
    "Brand Zara Trousers",
    "Brand Puma Joggers",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleShowAnalysis = () => {
    if (selectedOption) {
      navigate("/analysis-chart", { state: { brand: selectedOption } });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3EDED] px-6 pt-4 flex flex-col gap-6">

      <div className='flex gap-2'>
            <img src={edge} alt="" className='mb-3' style={{cursor:'pointer'}} onClick={()=> {navigate('/siderbar')}} />
            <h1 className="text-xl font-bold mb-4">Analytics</h1>
            </div>
      <p className="text-sm text-[#00000099]">
        Display product sales analysis based on your selection.
      </p>

      <div className="relative w-full mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border border-[#5e3a10] py-2 rounded-md bg-white flex gap-2 text-sm"
        >
          <ChevronDown className=" text-[#5e3a10]" />
          {selectedOption || "Select type of bantlon"}
        </button>

        {isOpen && (
          <div className="absolute w-full mt-2 bg-white rounded-md shadow-md z-10 shadow-2xl">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleShowAnalysis}
        className="bg-[#5e3a10] text-white py-2 px-6 rounded-md self-center text-sm" style={{marginTop:"200px"}}
      >
        Show analysis
      </button>
    </div>
  );
};

export default Analytics;