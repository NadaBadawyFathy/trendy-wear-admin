import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import edge from '../../assests/arrow-left.svg';

const productsData = [
  {
    id: 1,
    image: '/public/images/product1.svg',
    title: 'levis loose',
    subtitle: 'Cargo paints',
    price: '$90.00',
  },
  {
    id: 2,
    image: '/public/images/product2.svg',
    title: 'levis loose',
    subtitle: 'Cargo paints',
    price: '$50.00',
  },
  {
    id: 3,
    image: '/public/images/product3.svg',
    title: 'levis loose',
    subtitle: 'Cargo paints',
    price: '$30.00',
  },
  {
    id: 4,
    image: '/public/images/product4.svg',
    title: 'levis loose',
    subtitle: 'Cargo paints',
    price: '$70.00',
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(productsData);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null); // لعرض نافذة الحذف

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteClick = (product) => {
    setDeleteProduct(product);
  };

  const confirmDelete = () => {
    setProducts(products.filter((p) => p.id !== deleteProduct.id));
    setDeleteProduct(null);
  };

  const handleCloseEdit = () => setEditingProduct(null);
  const handleCloseDelete = () => setDeleteProduct(null);

  return (
    <div className="min-h-screen bg-[#F3EDED] px-4 py-6 md:px-10 relative">
      {/* Header */}
      <div className='flex gap-2'>
        <img src={edge} alt="" className='mb-3' style={{ cursor: 'pointer' }} onClick={() => navigate('/siderbar')} />
        <h1 className="text-xl font-bold mb-4">Products</h1>
      </div>

      {/* Filters */}
      <div className="flex justify-around mb-4 text-sm md:text-base text-white" style={{ borderTop: '1px solid red', paddingTop: '10px', paddingBottom: '10px', borderBottom: '1px solid red' }}>
        <button className="bg-black px-4 py-2 rounded">IMAGE</button>
        <button className="bg-black border border-white px-4 py-2 rounded">DESCRIPTION</button>
        <button className="bg-black border border-white px-4 py-2 rounded">PRICE</button>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-black text-white p-4 rounded flex items-center gap-4">
            <img src={product.image} alt={product.title} className="w-20 h-20 rounded object-cover" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{product.title}</p>
              <p className="text-xs text-gray-400">{product.subtitle}</p>
            </div>
            <p className="font-bold text-lg">{product.price}</p>
            <button className="ml-4 text-white" onClick={() => handleEditClick(product)}><FaEdit /></button>
            <button className="ml-2 text-red-500" onClick={() => handleDeleteClick(product)}><FaTrash /></button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 items-center space-x-2">
        <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded">{'<'}</button>
        {[1, 2, 3, '...', 12].map((num, idx) => (
          <button key={idx} className={`px-3 py-1 rounded ${num === 1 ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>{num}</button>
        ))}
        <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded">{'>'}</button>
      </div>

      {/* Add Product */}
      <div className="flex justify-center mt-6">
        <button onClick={() => navigate('/add-product')} className="bg-[#D9D9D9] text-black px-6 py-2 rounded border border-black font-semibold">+ ADD PRODUCT</button>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#1C1C1C] text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button className="absolute top-2 right-2 text-white font-bold" onClick={handleCloseEdit}>
              <button style={{ padding: '4px 8px', background: '#737373', borderRadius: '5px' }}>×</button>
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Product</h2>

            <div className="mb-3">
              <label className="block text-sm mb-1">IMAGE</label>
              <input type="text" defaultValue={editingProduct.image} className="w-full px-3 py-2 rounded bg-[#333] text-white" />
            </div>
            <div className="mb-3">
              <label className="block text-sm mb-1">DESCRIPTION</label>
              <input type="text" defaultValue={editingProduct.subtitle} className="w-full px-3 py-2 rounded bg-[#333] text-white" />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">PRICE</label>
              <input type="text" defaultValue={editingProduct.price} className="w-full px-3 py-2 rounded bg-[#333] text-white" />
            </div>

            <div className="flex justify-between">
              <button className="bg-green-600 text-white px-4 py-2 rounded font-semibold">UPDATE</button>
              <button className="bg-white text-black px-4 py-2 rounded font-semibold" onClick={handleCloseEdit}>CANCEL</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#1C1C1C] text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={handleCloseDelete}>
              <button style={{ padding: '4px 8px', background: '#737373', borderRadius: '5px' }}>×</button>
            </button>
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <hr className="border-gray-600 mb-4" />
            <p className="mb-4 text-sm">Are you sure you want to delete product. You can’t undo this action.</p>
            <hr className="border-gray-600 mb-4" />
            <div className="flex justify-between">
              <button className="bg-white text-black px-4 py-2 rounded font-semibold" onClick={handleCloseDelete}>CANCEL</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded font-semibold" onClick={confirmDelete}>DELETE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
