import { useState } from "react"


export default function Todo({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){
        const [newValue, setNewValue] = useState(item.item);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleChange}
                value={newValue}
                />
                <button onClick={handleClickUpdateTodo}>Update</button>
            </form>
        )
    }

    function TodoElement(){
        return (
            <div>
                <span>{item.title}</span>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        )
    }

    return (
        <div>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    )

}