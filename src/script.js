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
    const to_do_list = document.querySelector(".to-do-list");
    const content = task || task_input.value;

    if (task_input.value == "") return alert("Cannot add blank value in to-do list");

    id += 1;    //increment the id if not input field is not empty

    //add the task in the array
    tasks.push({ id: id, content: content });

    //create a new html element
    createElement(id, content, to_do_list);

    //clear the input field
    task_input.value = "";
}

const createElement = (id, content, to_do_list) => {
    //create a checkbox
    const check_box = document.createElement("input");
    check_box.setAttribute("type", "checkbox");

    //create a div tag
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("id", id);

    //set the content of the task
    const p = document.createElement("p");
    p.textContent = content;
    p.classList.add("task-content");

    //append the checkbox, p, and delete button to the div tag
    div.append(check_box, p);

    //append the task to the list
    to_do_list.append(div);
}