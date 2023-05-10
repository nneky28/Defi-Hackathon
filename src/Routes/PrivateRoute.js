import React from 'react'
import Home from '../Pages/Home'
import AuthRoute from './AuthRoute'

export default function PrivateRoute() {
  return (
   <AuthRoute exact path="/">
        <Home/>
   </AuthRoute>
  )
}
