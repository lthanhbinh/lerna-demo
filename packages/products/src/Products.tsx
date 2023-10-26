import React, { useEffect, useState } from 'react';
interface ProductsProps {
  addProductToCart?(product: object): void;
}

const products = [
  {
    id: 1,
    name: 'Elegance Hair Gel',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    price: 9.99,
    stock: 10567
  },
  {
    id: 2,
    name: 'Elegance Hair Serum',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    price: 14.99,
    stock: 9956
  },
  {
    id: 3,
    name: 'Elegance Hair Shampoo',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    price: 7.99,
    stock: 5689
  },
  {
    id: 4,
    name: 'Elegance Hair Shampoo',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.',
    price: 10.99,
    stock: 5689
  },
  {
    id: 5,
    name: 'Elegance Hair Shampoo 2',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.',
    price: 10.99,
    stock: 5689
  },
  {
    id: 6,
    name: 'Elegance Hair Shampoo 2',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.',
    price: 10.99,
    stock: 5689
  }
];

export function Products({ addProductToCart }: ProductsProps) {
  return (
    <div>
      <h1>Products</h1>
      <ul className={'products'}>
        {products.map((product: any, key: any) => {
          return (
            <li key={key}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <button className={'add-to-cart'} onClick={() => addProductToCart(product)}>
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
      <a href="/app">Application</a>
    </div>
  );
}
