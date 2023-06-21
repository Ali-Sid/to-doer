document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");



  /**
   * Handles the keydown event on the taskInput element.
   * If the Enter key is pressed, a new task is created.
   */

  taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const task = taskInput.value;
      if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.prepend(checkbox);

        const text = checkbox.nextElementSibling;



        /**
         * Handles the change event on the checkbox.
         * If the checkbox is checked, the task is marked as completed and moved to the bottom of the list.
         * If the checkbox is unchecked, the task is marked as incomplete and moved to the top of the list.
         */

        checkbox.addEventListener("change", function() {
          if (checkbox.checked) {
            listItem.classList.add('completed')
            taskList.appendChild(listItem);
          } else {
            listItem.classList.remove('completed')
            taskList.insertBefore(listItem, taskList.firstChild);
          }
        });

        const deleteButton = document.createElement("span");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "&#10006;";
        listItem.appendChild(deleteButton);


         /**
         * Handles the click event on the deleteButton.
         * Removes the task from the list.
         * */

        deleteButton.addEventListener("click", function() {
          listItem.remove();
        });

        taskInput.value = "";
      }
    }
  });
});
