import './shopping-cart.component.scss';

import React from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Item } from './components/item/item.component';

const ShoppingCart = () => {
  const { cart, removeItem } = React.useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className='shopping-cart'>
      {cart.map((item) => (
        <Item key={item.uuid} item={item} removeItem={removeItem} />
      ))}

      <div className='shopping-cart__checkout'>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export { ShoppingCart };
