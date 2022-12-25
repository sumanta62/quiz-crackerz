import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="flex items-center h-screen p-16 bg-gray-900 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                       <button>
                       <NavLink rel="noopener noreferrer" to="/" className="px-8 border border-indigo-600 py-3 font-semibold rounded ">Back to homepage</NavLink>
                       </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;