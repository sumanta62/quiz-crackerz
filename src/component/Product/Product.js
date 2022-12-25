import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {

    const { name, logo, total } = product;
//    console.log(product)
    
    return (
        <div className='product'>
            <div className=" bg-slate-800 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h6 className=" font-semibold text-white tracking-wide">Name: {name}</h6>
                        <p className="text-white"><small>Total: {total} </small></p>
                    </div>
                   <Link to={`/topic/${product.id}`}> <button  type="button" className="flex items-center justify-center w-full hover:bg-slate-500 hover:text-white p-3 font-semibold tracking-wide rounded-md bg-indigo-500 dark:text-gray-900">Quiz Practice</button></Link>
                </div>
            </div>

        </div>
        
    );
};

export default Product;