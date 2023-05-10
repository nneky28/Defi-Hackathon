import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Sample() {
    const [Title, setTitle] = useState({
        title: "",
        description: "",
      });
      const counter = useSelector((state) => state.counter);
      const isLogged = useSelector((state) => state.isLogged);
      const myTodo = useSelector((state) => state.myTodo);
      const dispatch = useDispatch();
    
      const [activeIndex, setActiveIndex] = useState();
      const [Button, setButton] = useState("Add Todo");
    
      const AddTodo = () => {
        if (Button == "Add Todo") {
          dispatch(
            // collect two parameters (type and payload)
    
            { type: "ADD_TODO", payload: { data: Title } }
          );
          setTitle({ title: "", description: "" });
        } else {
          todos[activeIndex] = Title;
          dispatch(
            // collect two parameters (type and payload)
    
            { type: "UPDATE", payload: { data: todos } }
          );
          setTitle({ title: "", description: "" });
    
          setButton("Add Todo");
        }
      };
    
      const todos = myTodo.todos;
      console.log(todos);
      const edit = (i) => {
        setTitle(todos[i]);
        setActiveIndex(i);
        setButton("Update");
      };
      const deleteTodo = (i) => {
        todos.splice(i, 1);
    
        dispatch(
          // collect two parameters (type and payload)
    
          { type: "UPDATE", payload: { data: todos } }
        );
      };
      const handleChange = (e) => {
        setTitle({ ...Title, [e.target.name]: e.target.value });
      };
  return (
    <div>
    <div className="col-lg-6">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={Title.title}
          onChange={handleChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
          description
        </label>
        <input
          type="text"
          name="description"
          value={Title.description}
          onChange={handleChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary mb-3 mt-3"
        onClick={AddTodo}
      >
        {Button}
      </button>
    </div>

    <table className="table">
      <thead>
        <th>Todos Title</th>
        <th>Todos DEscription</th>
        <th>Action</th>
      </thead>
      <tbody>
        {todos.map((item, i) => (
          <tr key="">
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <button className="btn btn-primary" onClick={() => edit(i)}>
                Edit
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
