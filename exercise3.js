const nameInput = document.getElementById("item-name");
const quantityInput = document.getElementById("item-quantity");
const button = document.getElementById("add-btn");
const itemList = []
const divItem = document.querySelector(".table");
const ul = divItem.firstElementChild.querySelector("ul");
const ul2 = divItem.querySelector("#ul2 ul");
const ul3 = divItem.querySelector("#ul3 ul");
button.addEventListener("click",(event)=>{
  event.preventDefault();
  addToList();

renderTable();
  console.log(itemList);
})



function renderTable(){
  nameInput.value = "";
  quantityInput.value = "";
  ul.innerHTML = "";
  ul2.innerHTML = "";
  ul3.innerHTML = "";
  for(i of itemList){
      arrangeTable(i);
  }
}

function arrangeTable(i){ 
  ul.innerHTML += `<li>${i.item_name}</li>`;
  ul2.innerHTML += `<li>${i.item_quantity}</li>`;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click",(event)=>{
  itemList.splice(itemList.indexOf(i.item_name),1);
  renderTable();
  console.log(itemList)
  });
  const li = document.createElement("li");
  li.appendChild(deleteButton);
  ul3.appendChild(li);
}

function addToList(){
  itemList.push({item_name:nameInput.value,item_quantity:quantityInput.value})
}


function removeFromlist(e){
  
}
