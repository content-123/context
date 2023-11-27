// // Cart.js
// import React from 'react';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const { state, dispatch } = useCart();

//   const incrementQuantity = productId => {
//     dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
//   };

//   const decrementQuantity = productId => {
//     dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
//   };

//   const totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
//   const totalAmount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>
//         {state.cart.map(item => (
//           <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h4>{item.title}</h4>
//             <p>${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => incrementQuantity(item.id)}>+</button>
//             <button onClick={() => decrementQuantity(item.id)}>-</button>
//           </div>
//         ))}
//       </div>
//       <p>Total Quantity: {totalQuantity}</p>
//       <p>Total Amount: ${totalAmount.toFixed(2)}</p>
//     </div>
//   );
// };

// export default Cart;


// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const incrementQuantity = productId => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  };

  const decrementQuantity = productId => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  };

  const totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {state.cart.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
          </div>
        ))}
      </div>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
