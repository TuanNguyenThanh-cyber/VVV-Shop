import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FormLogin from '../../components/Form/FormLogin'

export default function Login() {
    return (
        <>
           <Header isScroll={false}></Header>
           <FormLogin></FormLogin>
           <Footer></Footer> 
        </>
    )
}
