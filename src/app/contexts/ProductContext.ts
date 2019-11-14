import { createContext } from 'react';

import { Book } from '../models/Book';

type ProductContextType = {
  products: Book[];
  addItem: (item: Book) => void;
};

const ProductContext = createContext<ProductContextType>({ products: [], addItem: () => {} });
const ProductProvider = ProductContext.Provider;
const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer };
