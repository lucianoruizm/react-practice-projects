import {useState} from 'react';
import Todo from './todo';

export default function TodoApp() {

    const [title, setTitle] = useState('Hello');
    const [todos, setTodos] = useState([]);
    
    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [ ...todos];
        temp.unshift(newTodo);

        setTodos(temp);

        setTitle('');
    }

    function handleUpdate(id, value){
        const temp = [ ...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id)

        setTodos(temp);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                value={title}
                />
                <input 
                onClick={handleSubmit}
                type="submit"
                value="Create To-do"
                />
            </form>
            <div>
                {
                    todos.map((item) => (
                        <Todo 
                        key={item.id} 
                        item={item} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
    )

}