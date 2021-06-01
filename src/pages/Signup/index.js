import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FormSignup from '../../components/Form/FormSignup'

export default function Signup() {
    return (
        <>
            <Header isScroll={false}></Header>
            <FormSignup></FormSignup>
            <Footer></Footer>
        </>
    )
}
