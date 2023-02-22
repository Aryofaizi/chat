const nameInput = document.getElementById("item-name");
const quantityInput = document.getElementById("item-quantity");
const button = document.getElementById("add-btn");
const itemList = []
button.addEventListener("click",(event)=>{
  event.preventDefault();
  addToList();
})

function arrangeTable(){

}

function addToList(){
  itemList.push(nameInput.value);
}