import React, {useState} from 'react';
import './todo.css';


export function ToDo() {
    const [firstname, setFirstname] = useState('');
    const [lasttname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [showModal, setShowModal] = useState( )
  return(
       <div className="user">
        <h2 className="user__title">User details</h2>
        <button className='add'>Add User</button>
        <form action="#" className="form">
            <h3 className='form__title'>User details</h3>
           <label >Firstname</label>
           <input type="text" />
           <label >Lastname</label>
           <input type="text" />
           <label >Username</label>
           <input type="text" />
           <label >Age</label>
           <input type="number" />
           <label >Salary</label>
           <input type="text" />
           <button type="submit" className='submit'>Submit</button>
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