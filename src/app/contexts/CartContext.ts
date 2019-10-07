import { createContext } from 'react';

import { Book } from '../models/Book';

const CartContext = createContext<Book[]>([]);
const CartProvider = CartContext.Provider;
const CartConsumer = CartContext.Consumer;

export { CartContext, CartProvider, CartConsumer };
