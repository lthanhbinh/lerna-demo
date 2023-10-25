import React from 'react';

interface UserMenuProps {
  counterCart: number;
}
export function Menu({ counterCart }: UserMenuProps) {
  return (
    <div className={'header-right'}>
      <div className={'cart-block'}>Cart ({counterCart})</div>
      <div className={'log-out'}>Log Out</div>
    </div>
  );
}
