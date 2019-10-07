import React from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';

import { Book } from './models/Book';
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
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path='/' render={() => <Products products={products} addItem={addItem} />} />

      <Route path='/cart' render={() => <ShoppingCart cart={cart} />} />
    </div>
  );
}

export { App };
