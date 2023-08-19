import Modal from "../Modal/Modal";
import "./PracticeCrud.css";
import React, {useState, useEffect} from "react";

// const URL = "https://jsonplaceholder.typicode.com/todos";


function Timer() {
    const [todos, setTodos] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [selectedInput, setSelectedInput] = useState('')
    const [selectedInputContent, setSelectedInputContent] = useState('')
    // useEffect (() => {
    //     const fetchData = async() => {
    //         const data = await fetch(URL);
    //         const json = await data.json();
    //         setTodos(json.slice(0, 10));
    //     };

    //     fetchData();
    // }, []);

    // console.log(todos);

    const closeModal = () => {
        setIsModalActive(false);
    };

    const openModal = () => {
        setIsModalActive(true);
    };

    const addTodoItem = (value) => {
        let newTodoItem = {
            id: todos.length + 1,
            title: value,
            complited: false,
        };

        // setTodos((prevValue) => {
        //   let oldTodos = prevValue;
        //   oldTodos.push(newTodoItem);

        //   return oldTodos;
        // });

        setTodos((prevValue) => [...prevValue, newTodoItem]);
        // setTodos([...todos, newTodoItem]);
        closeModal();
    };

    const deleteTodoItem = (todoID) => {
        setTodos((prevValue) => {
            const filteredTodoItems = prevValue.filter((todoItem) => {
                return todoItem.id !== todoID;
            });

            return filteredTodoItems;
        });

    };
    const editTodo = (id) => {
        setSelectedInput(id);
    }
    const saveTodo = (id) => {
        let newObj = {
            id: selectedInput,
            title: selectedInputContent,
        }

        const filteredTodos = todos.filter(({id}) =>id !== selectedInput)
        filteredTodos.push(newObj);
        filteredTodos.sort((a,b)=> a.id - b.id)

        setTodos(filteredTodos);
        setSelectedInput("");
    }
    return (
        <div className="app">
            <Modal isActive={isModalActive} saveAction={addTodoItem}/>
            <h1>TODO</h1>
            <button onClick={openModal}>Add new todo Item</button>
            <div className="todos">
                {todos &&
                    todos.map((todo) => {
                        return (
                            <div
                                className="todo"
                                key={todo.id}
                                onDoubleClick={() => deleteTodoItem(todo.id)}
                            >
                                <p>{todo.id}</p>
                                <input
                                    type="text"
                                    disabled={selectedInput !== todo.id}
                                    defaultValue={todo.title}
                                    // value={selectedInputContent}
                                    onChange={(e) => setSelectedInputContent(e.target.value)}
                                />
                                <button
                                    className="edit-btn" onClick={() => {
                                    if (selectedInput !== todo.id) {
                                        editTodo(todo.id)
                                    } else {
                                        saveTodo()
                                    }
                                }}>{selectedInput !== todo.id ? "Edit" : "Save"}
                                </button>
                                <input type="checkbox" checked={todo.complited}/>
                            </div>)
                    })}
            </div>
        </div>
    );
}

export default Timer;
