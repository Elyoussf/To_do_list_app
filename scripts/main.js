const title = document.querySelector(".title");
const inputtext = document.querySelector(".inputtext");
const container = document.querySelector(".container");
const add = document.querySelector(".add_task");
const span = document.querySelector("span");
const rotationarrayanticlockwise = (arr) => {
  const n = arr.length;
  let first = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = first;
  return arr;
};
let array = ["blue", "orange", "olivedrab", "green"];
inputtext.addEventListener("input", () => {
  array = rotationarrayanticlockwise(array);
  title.style.borderTopColor = array[0];
  title.style.borderRightColor = array[1];
  title.style.borderBottomColor = array[2];
  title.style.borderLeftColor = array[3];
  title.style.color = array[0];
  container.style.borderTopColor = array[0];
  container.style.borderRightColor = array[1];
  container.style.borderBottomColor = array[2];
  container.style.borderLeftColor = array[3];
});

let Task = 0;
add.addEventListener("click", () => {
  if (inputtext.value === "") {
    alert("you entered an invalid input");
  } else {
    Task++;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = inputtext.value;
    div.classList.add("task" + String(Task));
    const button = document.createElement("button");
    button.innerText = "delete";
    button.classList.add(String(Task));
    div.append(p);
    div.append(button);
    span.append(div);
    inputtext.value = "";

    button.addEventListener("click", (e) => {
      const classe = e.target.className;
      const toRemove = document.querySelector(`.task${classe}`);
      if (toRemove) {
        toRemove.remove();
      }
    });
  }
});
