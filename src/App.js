import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import About from './components/About';
import { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	}
	else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (item) => {
		setTodos(todos.filter((e) => {
			return e !== item;
		}))
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	const addTodo = (title, desc, category) => {
		let sno;
		if (todos.length === 0) {
			sno = 0;
		}
		else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const myTodo = {
			sno: sno,
			title: title,
			desc: desc,
			category: category
		}
		setTodos([...todos, myTodo]);
	}

	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	return (
		<>
			<BrowserRouter>
				<Header title="Todo List" searchBar={false} />
					<Routes>
						<Route exact path="/" element={
							<>
								<AddTodo addTodo={addTodo} />
								<Todos todos={todos} onDelete={onDelete} />
							</>
						}>
						</Route>
						<Route exact path="/about" element={<About />} />
					</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
