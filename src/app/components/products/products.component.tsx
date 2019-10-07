import './products.component.scss';

import React from 'react';

import { Book } from '../../models/Book';
import { Product } from './components/product/product.component';

type ProductsProps = {
  products: Book[];
  addItem: (item: Book) => void;
};

const Products = (props: ProductsProps) => {
  return (
    <div className='products-container'>
      {props.products.map((product) => (
        <Product key={product.id} product={product} addItem={props.addItem} />
      ))}
    </div>
  );
};

export { Products };
