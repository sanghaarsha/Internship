const add_btn = document.getElementById("add");
const new_input = document.getElementById("input");
const list = document.getElementById("list");

function addNewItem() {
    const new_value = new_input.value; // get the value of the input field
    if (new_value) {
        const new_list_item = document.createElement("li"); // create a new list item
        new_list_item.textContent = new_value; // set the text content of the new list item
        list.appendChild(new_list_item); // append the new list item to the list
        new_input.value = ""; // reset the input field
    }
}

// add event listener to the add button
add_btn.addEventListener("click", () => {
    addNewItem();
});

// add event listener to the input field
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addNewItem();
    }
});
