import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {

  // Declare state
  const [todo, setTodo] = useState([]);

  // Fetch TODO from API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  // Even action
  const deleteTodo = (id) => {
    alert(`Delete TODO id: ${id}`)
  }
  const editTodo = (id) => {
    alert(`Edit TODO id: ${id}`)
  }
  const detailsTodo = (id) => {
    alert(`Details TODO id: ${id}`)
  }


  // TODO List Mapping
  const todoList = todo.map((list, index) => {
    const todoStatus = list['completed'] ? 'Completed' : 'Not Complete';
    const todoStatusClass = list['completed'] ? 'table-success' : 'table-warning';
    return (
      <tr>
        <td>{list['userId']}</td>
        <td>{list['id']}</td>
        <td>{list['title']}</td>
        <td className={todoStatusClass}>{todoStatus}</td>
        <td>
          <div className="d-flex gap-3 justify-content-evenly">
            <button onClick={deleteTodo.bind(this, (list['id']))} className='btn btn-danger'>Delete</button>
            <button onClick={editTodo.bind(this, (list['id']))} className='btn btn-warning'>Edit</button>
          </div>
        </td>
        <td><button onClick={detailsTodo.bind(this, list['id'])} className='btn btn-success'>Details</button></td>
      </tr>
    )
  })

  return (
    <div className="todo-lists">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {todoList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner;
