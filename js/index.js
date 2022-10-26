const USERS = ["Sally", "Andrew", "Margot"];
var curr_user = USERS[0];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("foodlist").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// JavaScript code
function search() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('food');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}



function showDropDown() {
  var space = document.getElementById("dropdown");
  owner = document.createElement("h3");
  owner.textContent = "Owner: ";
  owner.setAttribute("style", "padding-top: 40px; padding-left: 5px;")

  drop = document.createElement("select");
  drop.setAttribute("name", "owner");
  drop.setAttribute("id", "drop");

  for (i = 0; i < USERS.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", USERS[i]);
    op.textContent = USERS[i];
    drop.appendChild(op);
  }
  
  owner.appendChild(drop);
  space.appendChild(owner);

}

function removePopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 0;");
}

function addPopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 1;");
}


function changeUser() {
  if (curr_user == "Sally") {
    curr_user = USERS[1];
  } else if (curr_user == "Andrew") {
    curr_user = USERS[2];
  } else {
    curr_user = "Sally";
  }

  var elem = document.getElementById("currUserHeader");
  elem.innerHTML = "Log a new purchase as " + curr_user;
}

function currUser() {
  document.getElementById("currUser").innerHTML = curr_user;
  return curr_user;
}

function getCurrUser() {
  return curr_user;
}

function searchKeyPress(e)
{
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('food');
  
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
  
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13)
  {
      document.getElementById('btnSearch').click();
      return false;
  }
  return true;
}

function resetTable() {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "";
      
  }
}

function doSomething() {
  document.getElementById("test").innerHTML = document.getElementById('searchbar').value;
  
  filter = document.getElementById('searchbar').value.toLowerCase();

  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

//   var x = document.getElementById("table").rows[1].cells;
//       x[0].innerHTML = "NEW CONTENT";

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
      td = table.rows[i].cells[1];
      
      
      if (td) {
          txtValue = td.innerHTML.toLowerCase();
          document.getElementById("test2").innerHTML = txtValue;
          if (txtValue == filter) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}