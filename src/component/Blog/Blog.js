import React from 'react';


const Blog = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl py-5 font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the props in react-router?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><b>Ans:</b> The path prop specifies on what path of our app a given route is located. For an about page, for example, we might want that route to be accessible on the path '/about'. The render or component props are used to display a specific component for our path. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Who does context API works?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><b>Ans:</b> The React Context API is a way for a React app to effectively produce global variables that can be passed around.  Context is also touted as an easier, lighter approach to state management using Redux. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is use REF?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><b>Ans:</b> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;