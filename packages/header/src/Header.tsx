import React from 'react';

interface HeaderProps {
  counterCart: number,
}

export function Header( {
  counterCart = 0
}: HeaderProps) {
    return (
        <header>
            <div className={'left-header'}>
              <ul>
                <li><a href={'/app'}>App</a></li>
                <li><a href={'/dashboard'}>Dashboard</a></li>
                <li><a href={'/products'}>Products</a></li>
              </ul>
            </div>
            <div className={'header-right'}>
              <div className={'cart-block'}>Cart ({counterCart})</div>
              <div className={'log-out'}>Log Out</div>
            </div>
        </header>
    );
}
