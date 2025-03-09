import React from 'react'

function TaskForm() {
  return (
    <div>
    <h2>"Edit Task" : "Create Task"</h2>
    <form >
        <input type="text" placeholder="Title"  required />
        <textarea placeholder="Description" required />
        <label>
            <input type="checkbox" />
            Completed
        </label>
        <button type="submit"> Task</button>
    </form>
</div>
  )
}

export default TaskForm
