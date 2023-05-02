import React, {useState} from 'react';
import './todo.css';


export function ToDo() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState(()=> {
        const storedItems = localStorage.getItem('todos');
        return storedItems ? JSON.parse(storedItems):[];
    })
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if(!firstname.trim()) return alert('Enter the Firstname');
      if(!lastname.trim()) return alert('Enter the Firstname');
      if(!username.trim()) return alert('Enter the Firstname');
      if(!age.trim()) return alert('Enter the Firstname');
      if(!salary.trim()) return alert('Enter the Firstname');

      setTodos([...todos, {id:Date.now(), fname:firstname, lname:lastname, uname:username, age:age, money:salary}]);



      setFirstname('');
      setLastname('');
      setUsername('');
      setAge('');
      setSalary('');

    }
    localStorage.setItem('todos', JSON.stringify(todos))
  return(
       <div className="user">
        <h2 className="user__title">User details</h2>
        <button className='add'>Add User</button>
        <form  className="form" onSubmit={handleSubmit}>
            <h3 className='form__title'>User details</h3>
           <label >Firstname</label>
           <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
           <label >Lastname</label>
           <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
           <label >Username</label>
           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
           <label >Age</label>
           <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
           <label >Salary</label>
           <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)}/>
           <button type="submit" className='submit' >Submit</button>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
       </div>
  )
}