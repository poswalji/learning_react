import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './componants/Contact/Contact.jsx'

import User from './componants/User/User.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const  router=createBrowserRouter([
 contact",
    path:'/',
    element:<Layout/>,
    children:[
      {path:"",element:<Home/>},
    {path:"about",
      element:<About/>
    }, 
    {path:"
      
      element:<Contact/>
    },
    
    {path:"user/:userid",
      element:<User/>
    }
  ]
  }
])
// createRoutesFromElements(
//   <Route path='/' Element={<Layout/>}>
// <Route path='' Element={<Home/>}/>
// <Route path='about' Element={<About/>}/>
// <Route path='contact' Element={<Contact/>}/>


//   </Route>
// )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
