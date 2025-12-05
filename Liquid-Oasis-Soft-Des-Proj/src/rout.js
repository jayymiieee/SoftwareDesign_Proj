import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import ForgetPassword from './forgetpassword'
import Home from './home'
import Menu from './Menu'
import Payment from './payment'


const Rout = () => {
    return (
        <>
            <Routes>
            <Route path='/' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/forgetpassword' element={<ForgetPassword />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/Menu' element={<Menu />}></Route>
                <Route path='/payment' element={<Payment />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default Rout