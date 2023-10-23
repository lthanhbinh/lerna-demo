import React from 'react';
interface ProductsProps {
    productsCollection: Array<any>,
    addToCart?(product: object): void;
}

export function Products({
    productsCollection,
    addToCart
}: ProductsProps) {
    return (
      <div>
          <h1>Products</h1>
          <ul className={'products'}>
              {
                  productsCollection.map((product: any, key: any) => {
                      return <li key={key}>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          <button className={'add-to-cart'} onClick={() => addToCart(product)}>Add to cart</button>
                      </li>
                  })
              }
          </ul>
      </div>
    );
}
