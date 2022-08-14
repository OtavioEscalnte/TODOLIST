const form = document.querySelector("form");

form.addEventListener("submit", function formInput(e) {
  e.preventDefault();
  const input = document.querySelector("input[name='inputTask']");
  const taskContainer = document.querySelector(".tasksContainer");

  taskContainer.insertAdjacentHTML(
    "afterbegin",
    `<div><li> <span contentEditable>${input.value}</span>
    <i class="fa-solid fa-trash-can"></i>
   </li></div>`
  );

  const deleteBtn = document.querySelector(".fa-trash-can");
  deleteBtn.addEventListener("click", function (e) {
    const deleted = e.target;
    deleted.parentNode.remove();
  });
});
