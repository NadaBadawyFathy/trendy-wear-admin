import React from "react";
import edge from '../../assests/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
const reviews = [
  {
    name: "Ahmed Ali",
    text: "Thanks to our advanced technology and the quality of our products, you will enjoy a unique and exceptional experience that exceeds your expectations",
  },
  {
    name: "Yousef Mohamed",
    text: "Thanks to our advanced technology and the quality of our products, you will enjoy a unique and exceptional experience that exceeds your expectations",
  },
  {
    name: "Khaled Ahmed",
    text: "Thanks to our advanced technology and the quality of our products, you will enjoy a unique and exceptional experience that exceeds your expectations",
  },
  {
    name: "Noha Ahmed",
    text: "Thanks to our advanced technology and the quality of our products, you will enjoy a unique and exceptional experience that exceeds your expectations",
  },
];

const ReviewsComponent = () => {
      const navigate = useNavigate();
  return (
    <div className="p-4 bg-[#F3EDED] min-h-screen">
      <div className='flex gap-2'>
              <img src={edge} alt="" className='mb-3' style={{ cursor: 'pointer' }} onClick={() => navigate('/siderbar')} />
              <h1 className="text-xl font-bold mb-4">Reviews</h1>
      </div>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg mb-4"
        >
          <div>
            <h3 className="font-bold mb-1">{review.name}</h3>
            <p className="text-sm text-black bg-white" style={{marginLeft:'15px', padding:'20px', borderRadius:'15px'}}>{review.text}</p>
          </div>
          <button className="mt-2 sm:mt-0 ml-auto sm:ml-4" style={{color:'#AD4F38'}}>
            <FaTrash />
          </button>
        </div>
      ))}
      <div className="mt-10 text-center">
        <button
          className="max-w-md bg-[#7B4009] text-white py-3 font-semibold"
          style={{padding:'12px 35px', marginTop:'20px',borderRadius:'0px 20px 0px 20px'}}
        >
          Show All Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewsComponent;