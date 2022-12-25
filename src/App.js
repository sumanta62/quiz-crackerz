import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statice from './component/Statice/Statice';
import Blog from './component/Blog/Blog';
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Topic from './component/Topic/Topic';
import Error from './component/Error/Error';


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: async ()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async ()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Home></Home>
        },
        {
          path:'/topic/:topicsId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <Topic></Topic>
        },
    
        {
          path: '/static',
         loader: async ()=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
         },
          element: <Statice></Statice>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);

  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
