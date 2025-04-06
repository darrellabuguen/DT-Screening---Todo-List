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
    check_box.addEventListener("click", checkStatus);

    //create a div tag
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("id", id);

    //set the content of the task
    const p = document.createElement("p");
    p.textContent = content;
    p.classList.add("task-content");

    //create and set contents, class, and click event of delete button
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete-btn");
    delete_btn.innerHTML = "<img src='./src/assets/delete.svg' alt='Delete' >";
    delete_btn.onclick = () => { deleteTask(div.getAttribute("id"), to_do_list) };

    //append the checkbox, p, and delete button to the div tag
    div.append(check_box, p, delete_btn);

    //append the task to the list
    to_do_list.append(div);
}

const checkStatus = (event) => {
    const content = event.target.parentElement.children[1]; //select the p tag
    if (!content.classList.contains("finished")) {
        content.classList.add("finished")
    } else {
        content.classList.remove("finished")
    }
}

const deleteTask = (ids, parent) => {
    const index = tasks.findIndex(task => task.id == ids);
    parent.children[index].classList.add("removed");
    setTimeout(() => {
        parent.children[index].remove();
        tasks.splice(index, 1);
    }, 600)
}