import React from 'react';
import {Product} from './components/Product'
import { useProducts } from './hooks/products';
import { IProduct } from './models';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';

function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product: IProduct) => <Product product={product} key={product.id} />)}

      <Modal />
    </div>
  );
}

export default App;
