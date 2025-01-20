// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cartSlice';

// const products = [
//   { id: 1, 
//     name: 'Product 1',
//      price: 100 },
//   { id: 2, 
//     name: 'Product 2',
//      price: 200 },
//   { id: 3, 
//     name: 'Product 3', 
//     price: 300 },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="max-w-4xl mx-auto my-10">
//       <h1 className="text-2xl font-bold text-gray-700 mb-5">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border rounded-lg p-4 shadow-sm">
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => dispatch(addToCart(product))}
//               className="bg-blue-500 text-black px-4 py-2 mt-3 rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
