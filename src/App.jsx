
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Components/LayOut/Layout'
import About from "./Pages/About"
import Pricing from './Pages/Pricing'
import Features from './Pages/Features'
let router =createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Features' element={<Features/>}></Route>
  </Route>
))

function App() {

  return (
     <>
     <RouterProvider router={router}/>
     </>
  )
}

export default App
