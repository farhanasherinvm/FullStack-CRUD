import React from 'react'

function TaskList() {
  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4">Task List</h2>
    <ul className="list-group">
   
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            <strong>tittle</strong> - "✅ Done" : "⏳ Pending"
          </span>
          <div>
            <button className="btn btn-warning btn-sm me-2" >
              ✏️ Edit
            </button>
            <button className="btn btn-danger btn-sm" >
              🗑️ Delete
            </button>
          </div>
        </li>
    
    </ul>
  </div>
  )
}

export default TaskList
