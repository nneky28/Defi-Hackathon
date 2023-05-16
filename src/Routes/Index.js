import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Details from '../Pages/Details'
import Withdraw from '../Pages/Withdraw'


export default function IndexRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/withdraw' element={<Withdraw/>}/>
        </Routes>
    </BrowserRouter>
  )
}
