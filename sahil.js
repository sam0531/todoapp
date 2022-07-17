let card1 = document.getElementById("circle");
var topcontainer = document.getElementsByClassName("topcontainer")[0];
card1.addEventListener("click", () => {
  document.getElementsByClassName("alert")[0].style.display = "flex";
  topcontainer.className = "top_container";
});
var addCard1 = document.getElementById("Cancel1");
addCard1.addEventListener("click", () => {
  document.getElementsByClassName("alert")[0].style.display = "none";
  topcontainer.className = "no_blur";
});
var set = new Set();
var array = [];
var sign = false;
var value_id;
var map = new Map();

var addCard = document.getElementById("Add1");
addCard.addEventListener("click", () => {
  let card_heading = document.getElementById("botn").value;
  createObj(card_heading);
  closepopup();
  topcontainer.className = "no_blur";
});
function createObj(card_heading) {
  document.getElementById("container1").style.display = "none";
  var obj = {
    title: card_heading,
    id: Date.now(),
    map,
  };
  set.add(obj);
  createcardAndAppend(obj.id);
}
function closepopup() {
  document.getElementsByClassName("alert")[0].style.display = "none";
}
function createcardAndAppend() {
  var Card = document.getElementsByClassName("card")[0].cloneNode(true);
  display(Card);
}
function display(card) {
  document.getElementById("container1").style.display = "none";
  set.forEach((Element) => {
    card.id = Element.id;
    card.getElementsByClassName("card-heading")[0].innerHTML = Element.title;
    card
      .getElementsByClassName("card-heading")[0]
      .setAttribute("value", Element.id);
    card.setAttribute("value", Element.id);
    card.style.display = "block";
    card
      .getElementsByClassName("deletebtn")[0]
      .setAttribute("value", Element.id);
    card
      .getElementsByClassName("addbtn")[0]
      .setAttribute("value", Element.id);
    card
      .querySelector(".deletebtn")
      .setAttribute("onClick", "deleteCard(this.value)");
    card
      .querySelector(".addbtn")
      .setAttribute("onClick", "addSubtask(this.value)");
  });
  if (sign) card.style.display = "none";
  else card.style.display = "block";
  document.getElementById("outer-container").appendChild(card);
}
function deleteCard(value) {
  var remove= document.getElementById(value);
  for (item of set) {
    for (prop in obj) {
      if (item.id == value) set.delete(item);
      break;
    }
  }
  remove.parentNode.removeChild(remove);
  if (set.size == 0) {
    document.getElementById("container1").style.display = "block";
  }
}
let addTodo = document.getElementById("Add2");
addTodo.addEventListener("click", () => {
  var doc = document
    .getElementsByClassName("innerButton")[0]
    .cloneNode(true);
  var doc1 = document.getElementById("botn1").value;
  doc.innerText = doc1;
  doc.style.display = "block";
  doc.setAttribute("id", Date.now());
  doc.setAttribute("value", Date.now());
  doc.setAttribute("style", "margin-left: 10px;");
  var doc3 = document.createElement("button");
  doc3.setAttribute("id", `abc-${Date.now()}`);
  doc3.setAttribute("value", Date.now());
  doc3.setAttribute("onclick", "completedTask(this.value)");
  doc3.innerText = "done";
  doc3.setAttribute("class", "completeButton");
  doc.appendChild(doc3);
  doc.setAttribute("onClick", "completedTask(this.value)");
  for (obj of set) {
    for (prop in obj) {
      if (obj.id == value_id) {
        obj.map.set(doc1, Date.now());
        break;
      }
    }
  }
  document
    .getElementById(value_id)
    .getElementsByClassName("items")[0]
    .appendChild(doc)
    .appendChild(doc3);
  document.getElementsByClassName("alert")[1].style.display = "none";
});
function addSubtask(value) {
  document.getElementsByClassName("alert")[1].style.display = "block";
  value_id = value;
}
let closeList = document.getElementById("Cancel2");
closeList.addEventListener("click", () => {
  document.getElementsByClassName("alert")[1].style.display = "none";
});
function completedTask(value) {
  document.getElementById(value).style.textDecoration = "line-through";
  document.getElementById(value).style.color = "pink";
  document.getElementById(`abc-${value}`).remove();
}
function headerFunction(val) {
  var card_header;
  for (let ele of set) {
    for (let id in ele) {
      if (ele[id] == val) {
        card_header = ele.title;
        break;
      }
    }
  }
  document.querySelector(".upper-box1").style.display = "none";
  document.querySelector(".upper-inbox").style.display = "block";
  for (let ele of set) {
    if (ele.id == val) {
      document.getElementById(`${ele.id}`).style.display = "block";
    } else {
      document.getElementById(`${ele.id}`).style.display = "none";
    }
  }
  document.getElementById("heading").innerText = card_header;
  document.getElementById("heading").style.display = "block";
  sign = true;
}
document.getElementsByClassName("Displayall")[0].addEventListener("click", () => {
    sign = false;
    document.querySelector(".upper-box1").style.display = "block";
    document.querySelector(".upper-inbox").style.display = "none";
    for (let ele of set) {
      document.getElementById(ele.id).style.display = "block";
    }
    document.getElementById("heading").style.display = "none";
  });