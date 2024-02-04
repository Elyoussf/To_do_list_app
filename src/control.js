const userTask = document.querySelector('input[type="text"]');
const div = document.querySelector('div');
const mainpage = document.querySelector('main');
const update = document.querySelector('button');

userTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const text = userTask.value;

    emptyField(userTask);

    const li = addTask(text);

    div.appendChild(li);

    const child = div.childElementCount;

    if (child != 0 && mainpage.childElementCount === 3) {
      const button = document.createElement('button');
      button.innerText = "Update";
      mainpage.appendChild(button);
    }
  }
});

function emptyField(field) {
  field.value = "";
}

function addTask(text) {
  const label = document.createElement("label");
  const checkboxId = `checkbox-${div.childElementCount}`;
  label.for = checkboxId;

  const checkbox = document.createElement('input');
  checkbox.id = checkboxId;
  checkbox.name = checkboxId;
  checkbox.type = "checkbox";

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(text));

  return label;
}

update.addEventListener('click', () => {
  remove();
});

function remove() {
  const x = div.childElementCount;
  for (let i = x - 1; i >= 0; i--) {
    const taskId = `checkbox-${i}`;
    const task = document.getElementById(taskId);
    if (task.checked) {
      const container = document.querySelector(`label[for="${taskId}"]`);
      div.removeChild(container);
    }
  }
}
