import { createContext } from 'react';

import { Book } from '../models/Book';

type CartContextType = {
  cart: Book[];
  removeItem: (item: Book) => void;
};

const CartContext = createContext<CartContextType>({ cart: [], removeItem: () => {} });
const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

export { CartContext, CartProvider, CartConsumer };
