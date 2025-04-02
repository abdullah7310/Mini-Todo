import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function MainBody() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name: taskName,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: "Pending", // Default status
    };

    setTasks([...tasks, newTask]);

    setTaskName("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };

  // Toggle Complete/Pending
  const toggleStatus = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" } : task
      )
    );
  };

  // Delete Task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Filtering Tasks
  let filteredTasks = filter === "All" ? tasks : tasks.filter((task) => task.priority === filter);

  return (
    <div className="p-6 my-10 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Add Tasks</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <label className="font-semibold">Task Name:</label>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />

        <label className="font-semibold">Task Description:</label>
        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
          className="border p-2 rounded w-full"
        />

        <label className="font-semibold">Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />

        <label className="font-semibold">Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>

      <div className="mt-4">
        <label className="text-sm font-semibold">Filter by Priority:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded w-full mt-1"
        >
          <option value="All">All</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>

      {/* Displaying Filtered Tasks */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Tasks List</h3>
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          <div className="mt-2 space-y-2">
            {filteredTasks.map((task, ind) => (
              <div
                key={ind}
                className="border p-3 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium">{task.name}</h4>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500">
                    Due: {task.dueDate} | Priority: {task.priority}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleStatus(ind)}
                    className={`px-3 py-1 rounded text-white ${
                      task.status === "Completed" ? "bg-green-500" : "bg-blue-500"
                    }`}
                  >
                    {task.status}
                  </button>
                  <button onClick={() => handleDelete(ind)}>
                    <MdDelete size={18} className="text-red-500 hover:text-red-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainBody;
