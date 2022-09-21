import React, { useState } from 'react';
import {Product} from './components/Product'
import { useProducts } from './hooks/products';
import { IProduct } from './models';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product:IProduct) => {
    setModal(false);
    addProduct(product);
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product: IProduct) => <Product product={product} key={product.id} />)}

      {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className='fixed bottom-5 right-5 
              rounded-full bg-red-700 text-white text-2xl px-4 py-2'
              onClick={() => setModal(true)}
      >+</button>
    </div>
  );
}

export default App;
