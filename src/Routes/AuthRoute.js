import React from 'react'
import { useNavigate } from 'react-router-dom'
import IndexRoutes from './Index';


export default function AuthRoute({ children, exact, ...rest }) {
    const navigate = useNavigate();
    const token = true
  return (
    <IndexRoutes
    {...rest}
    exact
    render={({ location }) =>
      token
        ? children
        : navigate(`/auth/login?next_url=${location.pathname}`)
    }
    />
  )
}
