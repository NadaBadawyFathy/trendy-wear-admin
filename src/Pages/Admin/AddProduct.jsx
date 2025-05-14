import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  const handleSave = () => {
    const newProduct = {
      image,
      description,
      price,
    };
    console.log('Saved Product:', newProduct);
    // هنا تقدر تضيفه للداتا أو تبعته للسيرفر
  };

  return (
    <div className="min-h-screen bg-[#F3EDED] px-6 py-8 relative font-sans text-black">
      {/* زر X */}
      <button style={{ padding: '4px 8px', background: '#737373', borderRadius: '5px' }}
        onClick={() => navigate('/products')}
        className="absolute top-8 right-4 text-white text-xl"
      >
        &#x2715;
      </button>

      {/* العنوان */}
      <h1 className="text-2xl font-semibold mb-8">ADD PRODUCT</h1>

      {/* الفورم */}
      <div className="space-y-6" style={{marginTop:'80px'}}>
        <div>
          <label className="block text-sm font-medium mb-2">IMAGE URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-[#d9d9d9] text-black placeholder:text-gray-600"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">DESCRIPTION</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-[#d9d9d9] text-black placeholder:text-gray-600"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">PRICE</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-[#d9d9d9] text-black placeholder:text-gray-600"
            placeholder="Enter price"
          />
        </div>
      </div>

      {/* الزر */}
      <div className="mt-10 text-center">
        <button
        //   onClick={handleSave}
          className="max-w-md bg-[#d9d9d9] text-black py-3 rounded-md font-semibold"
          style={{padding:'12px 35px', marginTop:'50px'}}
          onClick={() => navigate('/products')}
        >
          SAVE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
