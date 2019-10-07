import React from 'react';
import { Book } from '../../../../models/Book';

type ItemProps = {
  item: Book;
  removeItem: (item: Book) => void;
};

const Item = (props: ItemProps) => {
  return (
    <div className='shopping-cart_item'>
      <img src={props.item.image} alt={`${props.item.title} book`} />

      <div>
        <h1>{props.item.title}</h1>
        <p>$ {props.item.price}</p>
        <button onClick={() => props.removeItem(props.item)}>Remove from cart</button>
      </div>
    </div>
  );
};

export { Item };
