import React from 'react'
import ContactList from '../components/contact_list'
import Navbar from '../components/navbar'
import Welcome from '../components/welcome'

function Home() {
    return (
        <>
            <Navbar />
            <Welcome />
            <ContactList />
        </>
    )
}

export default Home
