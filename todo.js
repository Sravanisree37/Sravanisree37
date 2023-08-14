// Function to add an item to the list
function addItem()
{
  var inputField=document.getElementById("inputfield");
  var inputValue=inputField.value;
  if(inputValue!="")
  {
    var listItem=document.createElement("ul");
    listItem.innerText=inputValue;
    listItem.classList.add("list-item");

  var dBtn=document.createElement("button");
  dBtn.innerText="Remove";
  dBtn.addEventListener("click",function()
  {
    listItem.remove();
  });
  listItem.appendChild(dBtn);

var eBtn=document.createElement("button");
eBtn.innerText="Edit";
eBtn.addEventListener("click",function()
{
  var newText=prompt("Enter new text:");
  if(newText!==null){
    listItem.firstChild.textContent=newText;
  }
});
listItem.appendChild(eBtn);

var Abtn=document.createElement("button");
Abtn.innerText="Add";
Abtn.addEventListener("click",function()
{
  var newSubItem=prompt("Add sublist-items");
  if (newSubItem!==null && newSubItem.trim()!=="")
  {
    var subDiv=document.createElement("div");
    subDiv.textContent=newSubItem;// 
// CREATE DELETE BUTTON-----------------------------------
    var subDeleteButton = document.createElement("button");
    subDeleteButton.innerText = "Remove";
    subDeleteButton.addEventListener("click", function() {
      subDiv.remove();
    });
    
    subDeleteButton.classList.add("sub-button"); // Apply the common class
    subDiv.appendChild(subDeleteButton);

// CREATE EDIT BUTTON------------------------------------
var eBtn1=document.createElement("button");
eBtn1.innerText="Edit";
eBtn1.addEventListener("click",function()
{
  var newText=prompt("Enter new text:");
  if(newText!==null){
    subDiv.firstChild.textContent=newText;
  }
});
subDiv.appendChild(eBtn1);
//-----------------------------------------------
    subDiv.classList.add("sub-item");
    listItem.appendChild(subDiv);
  }
});
listItem.appendChild(Abtn);

var listContainer=document.getElementById("listContainer");
listContainer.appendChild(listItem);
  inputField.value="";
}
}

/*The variable inputField is assigned the input element itself using document.getElementById("inputfield").
The variable inputValue is assigned the value of the inputField using inputField.value.

Finally, inputField.value = ""; is used to clear the value of the input box.*/


function handleKeyPress(event)
{
  if(event.keyCode==13)
  {
    addItem();
  }
}
  //if we hit enter on keyboard it should add the input value to page with the function handlekeypress
