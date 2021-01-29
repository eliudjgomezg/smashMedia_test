import React from 'react'

import TodoList from '../components/todo_list'
import Navbar from '../components/navbar'
import Welcome from '../components/welcome'
import ContactList from '../components/contact_list'
import Users from '../components/users'
import Error from '../components/error'
import Fetch from '../components/fetch'
import Footer from '../components/footer'

function Home() {
	return (
		<>
			<Navbar />
			<Welcome />
			<TodoList />
			<ContactList />
			<Users />
			<Error />
			<Fetch />
			<Footer />
		</>
	)
}

export default Home
