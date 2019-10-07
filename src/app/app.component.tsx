import React from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';

import { Book } from './models/Book';

import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';

import { Navigation } from './components/navigation/navigation.component';
import { Products } from './components/products/products.component';
import { ShoppingCart } from './components/shopping-cart/shopping-cart.component';

function App() {
  const [products] = React.useState<Book[]>(data);
  const [cart, setCart] = React.useState<Book[]>([]);

  const addItem = (item: Book) => {
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <CartProvider value={cart}>
        <Navigation />
        <Route path='/cart' component={ShoppingCart} />
      </CartProvider>

      <ProductProvider value={{ products, addItem }}>
        <Route exact path='/' component={Products} />
      </ProductProvider>
    </div>
  );
}

export { App };
