const tasks = [];
let id = 0;
const getKey = (event) => {
    const key = event.key;
    if (key == "Enter") {
        addTask(event.target.value);
    }
}

const addTask = (task) => {
    const task_input = document.getElementById("task-input");
    const content = task || task_input.value;

    if (task_input.value == "") return alert("Cannot add blank value in to-do list");

    id += 1;    //increment the id if not input field is not empty

    //add the task in the array
    tasks.push({ id: id, content: content });

    console.log(tasks)

    //clear the input field
    task_input.value = "";
}