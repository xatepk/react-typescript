import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import {Product} from './components/Product'
// import {products} from './data/products'
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true);
      const responce = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(responce.data)
      setLoading(false);
      
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message)
      
    }
    
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
