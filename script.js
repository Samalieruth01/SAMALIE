// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  // Append the button to the list item and the item to the list
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

// Add event listener for the button
addTaskButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
