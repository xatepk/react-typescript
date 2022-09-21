import React, { useState, HTMLProps } from "react";
import { IProduct } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const product: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 4.6,
        count: 42
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');


    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if(value.trim().length === 0) {
            setError('Please enter valid title');
            return
        }
        
        product.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', product);
        onCreate(response.data);

    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
            type='text'
            className="px-4 py-2 border mb-2 w-full outline-0"
            placeholder="Enter product title ..."
            value={value}
            onChange={changeHandler}>
            </input>
            {error && <ErrorMessage error={error} />}
            <button
            type="submit" className="px-4 py-2 border bg-yellow-400 hover:opacity-80">Create</button>
        </form>
    )
}