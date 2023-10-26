import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
//import { Menu } from 'user-menu';

interface HeaderProps {
  counterCart: number;
  routes: { pathname: string; name: string; element?: React.ReactNode }[];
}

export function Header({ counterCart = 0, routes = [] }: HeaderProps) {
  return (
    <header>
      <div
        className={'left-header'}
        style={{ display: 'flex', alignItems: 'center', height: '54px' }}>
        {routes.length > 0 &&
          routes.map((item, index) => {
            return (
              <div className="submenu" style={{ margin: '0px 20px' }} key={index}>
                <NavLink to={{ pathname: item.pathname }}>{item.name}</NavLink>
              </div>
            );
          })}
      </div>
      <div>
        <div className={'header-right'}>
          <div className={'cart-block'}>Cart ({counterCart})</div>
          <div className={'log-out'}>Log Out</div>
        </div>
      </div>
    </header>
  );
}
