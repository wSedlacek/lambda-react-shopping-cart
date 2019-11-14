import './products.component.scss';

import React from 'react';

import { ProductContext } from '../../contexts/ProductContext';
import { Product } from './components/product/product.component';

const Products = () => {
  const { products, addItem } = React.useContext(ProductContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export { Products };
