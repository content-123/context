// // Product.js
// import React from 'react';

// const Product = ({ product }) => {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
//       <img src={product.img} alt="Product" />
//       <h3>{product.heading}</h3>
//       <p>{product.details}</p>
//       <p>{product.amount}</p>
//       <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//         1
//       </button>
//       <button className='btn btn-danger'>Remove</button>
//       <p className="nav-link disabled">SUBTOTAL</p>
//       <p className="nav-link disabled">SHIPPING</p>
//       <p>TOTAL</p>
//     </div>
//   );
// };

// export default Product;
// Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
