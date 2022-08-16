const form = document.querySelector("form");

form.addEventListener("submit", function formInput(e) {
  e.preventDefault();
  const input = document.querySelector("input[name='inputTask']");
  const taskContainer = document.querySelector(".tasksContainer");

  if (input.value == "") {
    return alert("Campo deve ser preenchido para terefa ser cadastrada");
  }
  if (input.value != "") {
    taskContainer.insertAdjacentHTML(
      "afterbegin",
      `<div><li><input class="checkbox" type="checkbox" /> <span contentEditable>${input.value}</span>
      <i class="fa-solid fa-trash-can"></i>
     </li></div>`
    );
  }
  input.value = "";
  const deleteBtn = document.querySelector(".fa-trash-can");
  deleteBtn.addEventListener("click", function (e) {
    const deleted = e.target;
    deleted.parentNode.remove();
  });
});
