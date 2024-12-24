import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,AboutUs, ContactUs, User, Github } from './components/index.js'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path:'about',
//         element: <AboutUs/>
//       },
//       {
//         path: 'contactUs',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element={<Home/>}/> 
      <Route path='about' element={<AboutUs/>}/>      
      <Route path='contactUs' element={<ContactUs/>}/> 
      <Route path='user/:id' element={<User/>}/> 
      <Route path='github/:userId' element={<Github/>}/> 
    </Route>
)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
