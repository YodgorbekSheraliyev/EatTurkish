export const Todos = ({todos, setTodos}) => {

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
        localStorage.setItem('todos', JSON.stringify(filteredTodos))
    }
    
    const handleEditTodo = (todo) => {
        const editText = prompt('Edit !', todo.text);
        const foundIndex = todos.findIndex((item) => item.id === id);
        todos[foundIndex].text = editText;
        setTodos([...todos])
        localStorage.setItem('todos', JSON,stringify(todos));
    }

    const handleCompletedTodo = (evt, id) => {
        const foundIndex = todos.findIndex(todo => todo.id === id);
        todos[foundIndex].isCompleted = evt.target.checked;
        setTodos([...todos])
    }





}