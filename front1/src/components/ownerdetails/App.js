// import React, { useState, Fragment } from 'react'
// // import AddUserForm from './AddUserForm'
// import Ownerdetails from './Ownerdetails'
// import EditUserForm from './EditUserForm'
// import UserTable from './UserTable'
// // import "./styles.css"


// const App = () => {
// 	// Data
// 	const usersData = [
// 		{ id: 1, name: 'Anna', username: 'anna145' },
// 		{ id: 2, name: 'Cris', username: 'cris231' },
// 		{ id: 3, name: 'Benford', username: 'ben123' },
// 	]

// 	const initialFormState = { id: null, name: '', username: '' }

// 	// Setting state
// 	const [ users, setUsers ] = useState(usersData)
// 	const [ currentUser, setCurrentUser ] = useState(initialFormState)
// 	const [ editing, setEditing ] = useState(false)

// 	// CRUD operations
// 	const addUser = user => {
// 		user.id = users.length + 1
// 		setUsers([ ...users, user ])
// 	}

// 	const deleteUser = id => {
// 		setEditing(false)

// 		setUsers(users.filter(user => user.id !== id))
// 	}

// 	const updateUser = (id, updatedUser) => {
// 		setEditing(false)

// 		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
// 	}

// 	const editRow = user => {
// 		setEditing(true)

// 		setCurrentUser({ id: user.id, name: user.name, username: user.username })
// 	}

// 	return (
// 		<div className="container">
// 			<h1>CRUD App with Hooks</h1>
// 			<div className="flex-row">
// 				<div className="flex-large">
// 					{editing ? (
// 						<Fragment>
// 							<h2>Edit user</h2>
// 							<EditUserForm
// 								editing={editing}
// 								setEditing={setEditing}
// 								currentUser={currentUser}
// 								updateUser={updateUser}
// 							/>
// 						</Fragment>
// 					) : (
// 						<Fragment>
// 							<h3>Add user</h3>
// 							<Ownerdetails addUser={addUser} />
// 						</Fragment>
// 					)}
// 				</div>
// 				<div className="flex-large">
// 					<h2>View users</h2>
// 					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default App;