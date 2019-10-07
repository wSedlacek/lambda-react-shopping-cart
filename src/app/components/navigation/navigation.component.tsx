import './navigation.component.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { Book } from '../../models/Book';

type NavigationProps = {
  cart: Book[];
};

const Navigation = (props: NavigationProps) => {
  return (
    <div className='navigation'>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/cart'>
        Cart <span>{props.cart.length}</span>
      </NavLink>
    </div>
  );
};

export { Navigation };
