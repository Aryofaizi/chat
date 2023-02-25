const titleInput = document.getElementById("title-input");
const directorInput = document.getElementById("director-input");
const yearInput = document.getElementById("year-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const display = document.getElementById("display");
let result = []
// document.addEventListener("DOMContentLoaded",renderDisplay);

function addToList(){
    if(vlaidation()){
    let list = {}
    list.title = titleInput.value;
    list.director = directorInput.value;
    list.year = yearInput.value;
    result.push(list);
    renderDisplay();
    }
}

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    addToList();
    console.log(result);
});

removeBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    removeFromList();
});


function renderDisplay(){
    if(result.length > 0){
        display.innerHTML = "";
        for(i of result){
            display.innerHTML += `<p>${i.title}</p>
            <p>${i.director}</p>
            <p>${i.year}</p>`;
        }
    }
    
}



function removeFromList() {
    let titles = []
    for(i of result){
        titles.push(i.title)
    }
    if(titles.includes(titleInput.value)){
    result.splice(titles.indexOf(titleInput.value),1);
    }console.log(result);
    renderDisplay();
}

function vlaidation(){
    if(titleInput.value.length == 0 || directorInput.value.length == 0|| yearInput.value.length == 0){
        return false;
    }else{
        return true;
    }
}