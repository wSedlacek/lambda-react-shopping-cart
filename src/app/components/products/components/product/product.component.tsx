import './product.component.scss';

import React from 'react';

import { Book } from '../../../../models/Book';

type ProductProps = {
  product: Book;
  addItem: (item: Book) => void;
};

const Product = (props: ProductProps) => {
  return (
    <div className='product'>
      <img src={props.product.image} alt={`${props.product.title} book`} />

      <h1 className='title'>{props.product.title}</h1>

      <p className='price'>${props.product.price}</p>

      <button onClick={() => props.addItem(props.product)}>Add to cart</button>
    </div>
  );
};

export { Product };
