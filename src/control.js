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

        const child = div.childElementCount
        

        if (child!=0 && (mainpage.childElementCount===3)){
            const button = document.createElement('button');
            button.innerText = "Update";
            mainpage.appendChild(button)
        }
    }
});
function emptyField(field) {
    field.value = "";
}
let howmanychild = div.childElementCount;
function addTask(text) {
    const label = document.createElement("label");
    label.for=`${howmanychild}`
    const checkbox = document.createElement('input');
    checkbox.id=`${howmanychild}`
    checkbox.name=`${howmanychild}`
    checkbox.type = "checkbox";

    label.appendChild(checkbox);
    label.innerHTML+=text;
   
    return label;
}
  


update.addEventListener('click',()=>{
    remove();
})
function remove(){
    
}
