import './shopping-cart.component.scss';

import React from 'react';

import { Book } from '../../models/Book';
import { Item } from './components/item/item.component';

type ShoppingCartProps = {
  cart: Book[];
};

const ShoppingCart = (props: ShoppingCartProps) => {
  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className='shopping-cart'>
      {props.cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className='shopping-cart__checkout'>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export { ShoppingCart };
