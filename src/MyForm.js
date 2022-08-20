import { useState } from 'react'

function MyForm({ addTask }) {
	const [userInput, setUserInput] = useState('')

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}

	const hendleSubmit = (e) => {
		e.preventDefault()
		addTask(userInput)
		setUserInput("")
	}

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			hendleSubmit(e)
		}
	}

	return (
		<form onSubmit={hendleSubmit}>
			<input 
				value={userInput}
				type="text"
				onChange={handleChange}
				onKeyDown={handleKeyPress}
				placeholder="Add Task"
			/>
			<button>Save</button>
		</form>
	)
}

export default MyForm