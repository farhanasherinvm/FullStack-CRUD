// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchTasks,deleteTask } from '../../Redux/taskSlice';

// const TaskList=({onEdit}) => {
//   const dispatch=useDispatch();
  
//   // const {tasks, loading, error}=useSelector(state=>state.tasks)
//   const { tasks = [], loading, error } = useSelector(state => state.tasks);


//   useEffect(()=>{
//     dispatch(fetchTasks())
//   },[dispatch])

//   if (loading) return <p>loading tasks....</p>
//   if (error) return <p>Error:{error}</p>
//   return (
//     <div className="container mt-4">
//     <h2 className="text-center mb-4">Task List</h2>
//     <ul className="list-group">
//         {tasks.map(task=>(
//         <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
//           <span>
//             <strong>{task.title}</strong> - {task.completed? "✅ Done" : "⏳ Pending"}
//           </span>
//           <div>
//             <button onClick={() => onEdit(task)} className="btn btn-warning btn-sm me-2" >
//               ✏️ Edit
//             </button>
//             <button onClick={() => dispatch(deleteTask(task.id))}className="btn btn-danger btn-sm" >
//               🗑️ Delete
//             </button>
//           </div>
//         </li>
//     ))}
//     </ul>
//   </div>
//   )
// }

// export default TaskList



// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useDispatch, useSelector} from 'react-redux'
// // import { fetchTasks } from "../../Redux/taskSlice";
// // const TaskList = () => {
// //   const dispatch = useDispatch();
// //   const { tasks, loading, error } = useSelector((state) => state.tasks);

// //   useEffect(() => {
// //       dispatch(fetchTasks());  // Fetch tasks when component loads
// //   }, [dispatch]);

// //   if (loading) return <p>Loading tasks...</p>;
// //   if (error) return <p>Error: {error}</p>;

// // return (
// //   <div>
// //   {tasks.length === 0 ? (
// //       <p>No tasks available</p>
// //   ) : (
// //       tasks.map(task => (
// //           <div key={task.id} className="task-item">
// //               <h3>{task.title}</h3>
// //               <p>{task.description}</p>
// //           </div>
// //       ))
// //   )}
// // </div>
// // );
// // };

// // export default TaskList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/tasks/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;