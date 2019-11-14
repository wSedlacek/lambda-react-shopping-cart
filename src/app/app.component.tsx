import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as uuid from 'uuid';

import { data } from './data';
import { Book } from './models/Book';

import { useLocalStorage } from './hooks/local-storage.hook';

import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';

import { Navigation } from './components/navigation/navigation.component';
import { Products } from './components/products/products.component';
import { ShoppingCart } from './components/shopping-cart/shopping-cart.component';

function App() {
  const [products] = React.useState<Book[]>(data);
  const [cart, setCart] = useLocalStorage<Book[]>('cart', []);

  const addItem = (item: Book) => {
    const newItem: Book = { ...item, uuid: uuid.v1() };
    setCart([...cart, newItem]);
  };

  const removeItem = (item: Book) => {
    setCart(cart.filter((book) => book.uuid !== item.uuid));
  };

  return (
    <>
      <Router>
        <CartProvider value={{ cart: cart, removeItem: removeItem }}>
          <Navigation />
          <Route path='/cart' component={ShoppingCart} />
        </CartProvider>

        <ProductProvider value={{ products, addItem }}>
          <Route exact path='/' component={Products} />
        </ProductProvider>
      </Router>
    </>
  );
}

export { App };
