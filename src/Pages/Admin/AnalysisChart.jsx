import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,Cell } from "recharts";
import { ChevronLeft } from "lucide-react";
import edge from '../../assests/arrow-left.svg'
import anal from '../../assests/analysis.svg'
import anal2 from '../../assests/analysis2.png'
import { useNavigate} from "react-router-dom";
const data = [
  { name: "S", expense: 30 },
  { name: "M", expense: 45 },
  { name: "T", expense: 30 },
  { name: "W", expense: 40 },
  { name: "T", expense: 20 },
  { name: "F", expense: 55 },
  { name: "S", expense: 50 },
  { name: "M", expense: 60 },
  { name: "T", expense: 40 },
  { name: "W", expense: 50 },
];

const expenseColors = [
  "#745F5A80",
  "#745F5A80",
  "#745F5A80",
  "#745F5A80",
  "#4E3C3780",
  "#78423580",
  "#745F5A80",
  "#7B400980",
  "#745F5A80",
  "#745F5A80",
];

const AnalysisChart = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F3EDED] p-4 text-[#2e1c0f] font-sans">
      {/* Header */}
      <div className='flex gap-2 mb-4'>
            <img src={edge} alt="" className='mb-3' style={{cursor:'pointer'}} onClick={()=> {navigate('/analytics')}} />
            <h1 className="text-xl font-bold mb-4">Analysis To Brand Nike Pants</h1>
      </div>

      {/* Growth Chart and Stats */}
      <div className="bg-white rounded-xl shadow w-full mx-auto mb-4">
        <div className="flex items-center justify-between" style={{paddingLeft:'10px'}}>
          {/* Circular Chart */}
          <div className="relative w-50 h-50">
                   <img src={anal} alt="Sales Chart" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[15px] font-bold text-black">
                        50%<br />Growth
          </div>
          </div>


          {/* Stats */}
          <div className="flex flex-col justify-center text-sm">
            <div className="rounded-tr-lg p-4" style={{border:'1px solid #A5A5A5'}}>
              <p className="font-bold">11.5k</p>
              <p className="text-[#A5A5A5]">MAR<br />2025</p>
            </div>
            <div className="rounded-br-lg p-4" style={{border:'1px solid #A5A5A5'}}>
              <p className="font-bold">11.5k</p>
              <p className="text-[#A5A5A5]">Feb<br />2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donut Indicator */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <img className="w-24 h-24" src={anal2}/>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#6b3f16]"></span>
            <span className="text-sm">Earning</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#72675E]"></span>
            <span className="text-sm" style={{color:'#AAA7A7'}}>Expence</span>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#000' }} />
            <Tooltip />
            <Bar dataKey="expense" barSize={15}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={expenseColors[index % expenseColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalysisChart;
