import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const products = useLoaderData();
   
    return (
        <div>
            <div className="bg-img flex">
                <div className="bg-text">
                    <h6 className='text-white'>WEB REACT TEMPLATE</h6>
                    <h1 className='lg:text-5xl md:text-3xl text-2xl text-white py-2'>Evaluate your abilities by taking our complimentary and confidential online quizzes.</h1>
                    <p className='text-gray-200'>When you finish the quiz, you can go through each question with the correct answer. The test is not official, it's just a nice way to see how much you know, or don't know, about JavaScript.</p>
                </div>
            </div>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        products.data.map(product => <Product key={product.id} product={product} ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;