const USERS = ["Sally", "Andrew", "Margot"];
const LOCATIONS = ["Fridge", "Cabinet"];
var ingredients = new Map();
ingredients.set("Cheese", ["2022-11-04", USERS[0], LOCATIONS[0]]);
ingredients.set("Bread", ["2022-10-31", USERS[1], LOCATIONS[1]]);
ingredients.set("Cucumber", ["2022-10-27", USERS[0], LOCATIONS[0]]);
ingredients.set("Baguette", ["2022-10-28", USERS[0], LOCATIONS[1]]);

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
  let input = document.getElementById('searchbar').value;
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

/*               Add Ingredient                */

function ownerDropDown() {
  var space = document.getElementById("owner-dropdown");
  owner = document.createElement("h3");
  owner.textContent = "Owner: ";
  owner.setAttribute("style", "padding-top: 40px; padding-left: 5px;")

  drop = document.createElement("select");
  drop.setAttribute("name", "owner");
  drop.setAttribute("id", "owner-drop");

  for (i = 0; i < USERS.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", USERS[i]);
    op.textContent = USERS[i];
    drop.appendChild(op);
  }
  
  owner.appendChild(drop);
  space.appendChild(owner);

}

function locationDropDown() {
  var space = document.getElementById("loc-dropdown");
  loc = document.createElement("h3");
  loc.textContent = "Location: ";
  loc.setAttribute("style", "padding-top: 40px; padding-left: 5px;")

  drop = document.createElement("select");
  drop.setAttribute("name", "location");
  drop.setAttribute("id", "loc-drop");

  for (i = 0; i < LOCATIONS.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", LOCATIONS[i]);
    op.textContent = LOCATIONS[i];
    drop.appendChild(op);
  }
  
  loc.appendChild(drop);
  space.appendChild(loc);

}

function purchDate() {
  var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  var days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", 
              "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
              "27", "28", "29", "30", "31"];
  var years = ["2022", "2023", "2024", "2025", "2026"];
  var space = document.getElementById("purch-date");
  purch = document.createElement("h3");
  purch.textContent = "Purchase Date: ";
  purch.setAttribute("style", "padding-top: 40px; padding-left: 5px;")

  month = document.createElement("select");
  month.setAttribute("name", "pmonth");
  month.setAttribute("id", "pmonth-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "MM";
  month.appendChild(op);
  for (i = 0; i < months.length; i++) {
      op = document.createElement("option");
      op.setAttribute("value", months[i]);
      op.textContent = months[i];
      month.appendChild(op);
  }

  day = document.createElement("select");
  day.setAttribute("name", "pday");
  day.setAttribute("id", "pday-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "DD";
  day.appendChild(op);
  for (i = 0; i < days.length; i++) {
      op = document.createElement("option");
      op.setAttribute("value", days[i]);
      op.textContent = days[i];
      day.appendChild(op);
  }

  year = document.createElement("select");
  year.setAttribute("name", "pyear");
  year.setAttribute("id", "pyear-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "YYYY";
  year.appendChild(op);
  for (i = 0; i < years.length; i++) {
      op = document.createElement("option");
      op.setAttribute("value", years[i]);
      op.textContent = years[i];
      year.appendChild(op);
  }

  purch.appendChild(month);
  purch.appendChild(day);
  purch.appendChild(year);

  space.appendChild(purch);

}

function expDate() {
  var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  var days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", 
              "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
              "27", "28", "29", "30", "31"];
  var years = ["2022", "2023", "2024", "2025", "2026"];
  var space = document.getElementById("exp-date");
  exp = document.createElement("h3");
  exp.textContent = "Expiration Date: ";
  exp.setAttribute("style", "padding-top: 40px; padding-left: 5px;")

  month = document.createElement("select");
  month.setAttribute("name", "month");
  month.setAttribute("id", "month-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "MM";
  month.appendChild(op);
  for (i = 0; i < months.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", months[i]);
    op.textContent = months[i];
    month.appendChild(op);
  }

  day = document.createElement("select");
  day.setAttribute("name", "day");
  day.setAttribute("id", "day-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "DD";
  day.appendChild(op);
  for (i = 0; i < days.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", days[i]);
    op.textContent = days[i];
    day.appendChild(op);
  }

  year = document.createElement("select");
  year.setAttribute("name", "year");
  year.setAttribute("id", "year-drop");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "YYYY";
  year.appendChild(op);
  for (i = 0; i < years.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", years[i]);
    op.textContent = years[i];
    year.appendChild(op);
  }

  exp.appendChild(month);
  exp.appendChild(day);
  exp.appendChild(year);

  space.appendChild(exp);

}

function addIngredient() {
  var inputValue = document.getElementById("ingredient-name").value;
  if (inputValue === '') {
    alert("You must enter an ingredient!");
  } else {
    var owner = document.getElementById("owner-drop");
    owner = owner.options[owner.selectedIndex].value;

    var day = document.getElementById("day-drop");
    day = day.options[day.selectedIndex].value;

    var month = document.getElementById("month-drop");
    month = month.options[month.selectedIndex].value;

    var year = document.getElementById("year-drop");
    year = year.options[year.selectedIndex].value;

    var loc = document.getElementById("loc-drop");
    loc = loc.options[loc.selectedIndex].value;

    date = month + "-" + day + "-" + year;
    exp = new Date(date).setUTCHours(0, 0, 0, 0);
    today = new Date().setUTCHours(0, 0, 0, 0);
    diff = (exp >= today);
    console.log(exp);
    console.log(today);
    console.log(diff);

    if (isNaN(diff) || !diff) {
      alert("Enter a valid date!")
    } else {
      ingredients.set(inputValue, [date, USERS[0], LOCATIONS[0]]);
      removePopup();
      listIngredients(false, null, null);
    }

    var qtyName = document.getElementById('quantity-name');

    // 👇️ clear input field
    qtyName.value = '';
  }

  console.log(diff)
  

}

function listIngredients(addShared, sharedItem, sharedExp) {
  var table = document.getElementById("myTable").innerHTML = "";
  table = document.getElementById("myTable");
  tr = document.createElement("tr");
  tr.className = "header";
  th = document.createElement("th");
  th.setAttribute = ("style", "width:60%;");
  var txt = document.createTextNode("Food Item");
  th.appendChild(txt);
  tr.appendChild(th);
  th = document.createElement("th");
  th.setAttribute = ("style", "width:40%;");
  var txt = document.createTextNode("Expiration Date");
  th.appendChild(txt);
  tr.appendChild(th);
  table.appendChild(tr);

  for (let i = 0; i < ingredients.size; i++) {
    tr = document.createElement("tr");
    tr.className = "clickable";
    ing = [...ingredients][i][0];
    exp = new Date([...ingredients][i][1][0]).setUTCHours(0, 0, 0, 0);
    today = new Date().setUTCHours(0, 0, 0, 0);
    diff = exp - today;
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    onclk = `location.href='ingredients.html'+'?name='+'${ing}'+'&expiry='+'${diff}';`;
    tr.setAttribute("onclick", onclk);
    td = document.createElement("td");
    txt = document.createTextNode(ing);
    td.appendChild(txt);
    tr.appendChild(td);
    td = document.createElement("td");
    txt = document.createTextNode(diff + " days");
    td.appendChild(txt);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  /* Add shared item to table */
  /* STILL NEED TO SET INGREDIENTS IN THE MAP like ingredients.set("Baguette", ["2022-10-28", USERS[0], LOCATIONS[1]]);  */
  if (addShared) {
    tr = document.createElement("tr");
    tr.className = "clickable";
    exp = new Date(sharedExp).setUTCHours(0, 0, 0, 0);
    today = new Date().setUTCHours(0, 0, 0, 0);
    diff = sharedExp - today;
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    onclk = `location.href='ingredients.html'+'?name='+'${sharedItem}'+'&expiry='+'${diff}';`;
    tr.setAttribute("onclick", onclk);
    td = document.createElement("td");
    txt = document.createTextNode(sharedItem);
    td.appendChild(txt);
    tr.appendChild(td);
    td = document.createElement("td");
    txt = document.createTextNode(diff + " days");
    td.appendChild(txt);
    tr.appendChild(td);
    table.appendChild(tr);
  }

}


function removePopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 0; visibility: hidden;");
}

function addPopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 1; visibility: visible;");
}


/*                   Shared Items                 */
/*function changeUser() {
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
*/
var curr_user = "Sally";
function changeUser() {
    if (curr_user == "Sally") {
        curr_user = USERS[1];
    } else if (curr_user == "Andrew") {
        curr_user = USERS[2];
    } else {
        curr_user = "Sally";
    }
  //  var elem = document.getElementById("test");
   // elem.innerHTML = "Log a new purchase as " + curr_user;
}

function currUser() {
document.getElementById("currUser").innerHTML = curr_user;
return curr_user;
}

function getCurrUser() {
return curr_user;
}

function addSharedItem() {
    var inputValue = document.getElementById("ingredient-name").value;
    ///document.getElementById("test").innerHTML = inputValue;
    if (inputValue === '') {
        alert("You must enter an ingredient!");
    } else {
        //var owner = document.getElementById("owner-drop");
        //owner = owner.options[owner.selectedIndex].value;
        var qty = document.getElementById("quantity-name").value;

        var day = document.getElementById("day-drop");
        day = day.options[day.selectedIndex].value;

        var month = document.getElementById("month-drop");
        month = month.options[month.selectedIndex].value;

        var year = document.getElementById("year-drop");
        year = year.options[year.selectedIndex].value;

        if (document.getElementById("shared").checked) {
          shared = "yes";
        } else {
          shared = "no";
        }

        date = month + "-" + day + "-" + year;
        exp = new Date(date).setUTCHours(0, 0, 0, 0);
        today = new Date().setUTCHours(0, 0, 0, 0);
        diff = (exp >= today);
        console.log(exp);
        console.log(today);
        console.log(diff);

        if (isNaN(diff) || !diff) {
        alert("Enter a valid date!")
        } else {
            ingredients.set(inputValue, [date, USERS[0], LOCATIONS[0]]);
            removePopup();
            addRow('table', inputValue, qty, shared, day + "/" + month + "/" + year);
         //   listIngredients(true, inputValue, pmonth + "-" + pday + "-" + pyear);
        }


    }
}

function searchKeyPress(e) {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
   // let x = document.getElementsByClassName('food');
    
   /* for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }*/

    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        doSomething()
     //   document.getElementById('btnSearch').click();
     //   return false;
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
    filter = document.getElementById('searchbar').value.toLowerCase();


    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = table.rows[i].cells[0];
        

        if (td) {
            txtValue = td.innerHTML.toLowerCase();
            
            if (txtValue == filter) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function showOwner(owner) {
  var popup = document.getElementById("owner-popup");
  document.getElementById("owner").innerHTML = owner;
  popup.setAttribute("style", "opacity: 1; visibility: visible;");
}

function removeOwner() {
  var popup = document.getElementById("owner-popup");
  popup.setAttribute("style", "opacity: 0; visibility: hidden;");
}

function addRow(list, inputItem, inputQty, shared, inputExpDate) { 
    var table = document.getElementById(table);

    var table = document.getElementById("table");
  //  document.getElementById("test").innerHTML = getCurrUser();

    var rowCount = table.rows.length;
    var row = table.insertRow(1);// (rowCount);
    
    // row.insertCell(0).innerHTML= getCurrUser();
    owner = getCurrUser();
    row.insertCell(0).innerHTML= inputItem;

    row.insertCell(1).innerHTML= inputQty;
    row.insertCell(2).innerHTML= shared;
    row.insertCell(3).innerHTML= inputExpDate;

   // row.setAttribute("onclick", showOwner());
    addRowHandlers(owner);

    return false; // stop submission
}

function addRowHandlers(owner) {
  var table = document.getElementById("table");
  var rows = table.getElementsByTagName("tr");
  for (i = 1; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = 
          function(row) 
          {
              return function() { 
                                      var cell = row.getElementsByTagName("td")[0];
                                      var id = cell.innerHTML;
                                      showOwner(owner);
                                      //alert("id:" + id);
                               };
          };

      currentRow.onclick = createClickHandler(currentRow);
  }
}