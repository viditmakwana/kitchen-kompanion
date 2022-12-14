const USERS = ["Sally", "Andrew", "Margot"];
const LOCATIONS = ["Fridge", "Cabinet"];
var ingredients = new Map();
var sandwich = new Array("Bread", "Mayo", "Tomato", "Lettuce", "Ham");
var omelette = new Array("Eggs", "Cheese", "Tomato", "Milk");
var fruit = new Array("Apple", "Watermelon", "Orange", "Blueberries");

ingredients.set("Cheese", ["2022-11-04", USERS[0], LOCATIONS[0]]);
ingredients.set("Milk", ["2022-10-31", USERS[1], LOCATIONS[1]]);
ingredients.set("Eggs", ["2022-10-27", USERS[0], LOCATIONS[0]]);
ingredients.set("Tomato", ["2022-10-28", USERS[0], LOCATIONS[1]]);

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

/* LOCATIONS NOT NEEDED RIGHT NOW */

//   drop = document.createElement("select");
//   drop.setAttribute("name", "location");
//   drop.setAttribute("id", "loc-drop");

//   for (i = 0; i < LOCATIONS.length; i++) {
//     op = document.createElement("option");
//     op.setAttribute("value", LOCATIONS[i]);
//     op.textContent = LOCATIONS[i];
//     drop.appendChild(op);
//   }
  
//   loc.appendChild(drop);
//   space.appendChild(loc);

// }

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
  exp.textContent = "Exp. Date: ";
  exp.setAttribute("style", "padding-left: 5px; font-size: 20px;");
  
  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("value", "2022-12-01");
  input.setAttribute("style", "font-size: 18px;")

  // month = document.createElement("select");
  // month.setAttribute("name", "month");
  // month.setAttribute("id", "month-drop");
  // month.setAttribute("style", "font-size: 16px;");

  // op = document.createElement("option");
  // op.setAttribute("value", "");
  // op.disabled = true;
  // op.selected = true;
  // op.hidden = true;
  // op.textContent = "MM";
  // month.appendChild(op);
  // for (i = 0; i < months.length; i++) {
  //   op = document.createElement("option");
  //   op.setAttribute("value", months[i]);
  //   op.textContent = months[i];
  //   month.appendChild(op);
  // }

  // day = document.createElement("select");
  // day.setAttribute("name", "day");
  // day.setAttribute("id", "day-drop");
  // day.setAttribute("style", "font-size: 16px;");

  // op = document.createElement("option");
  // op.setAttribute("value", "");
  // op.disabled = true;
  // op.selected = true;
  // op.hidden = true;
  // op.textContent = "DD";
  // day.appendChild(op);
  // for (i = 0; i < days.length; i++) {
  //   op = document.createElement("option");
  //   op.setAttribute("value", days[i]);
  //   op.textContent = days[i];
  //   day.appendChild(op);
  // }

  // year = document.createElement("select");
  // year.setAttribute("name", "year");
  // year.setAttribute("id", "year-drop");
  // year.setAttribute("style", "font-size: 16px;");

  // op = document.createElement("option");
  // op.setAttribute("value", "");
  // op.disabled = true;
  // op.selected = true;
  // op.hidden = true;
  // op.textContent = "YYYY";
  // year.appendChild(op);
  // for (i = 0; i < years.length; i++) {
  //   op = document.createElement("option");
  //   op.setAttribute("value", years[i]);
  //   op.textContent = years[i];
  //   year.appendChild(op);
  // }

  // exp.appendChild(month);
  // exp.appendChild(day);
  // exp.appendChild(year);
  exp.appendChild(input);

  space.appendChild(exp);

}

function quantity() {
  var amount = Array.from({length: 50}, (_, i) => i + 1);
  var space = document.getElementById("quantity-name");
  quant = document.createElement("h3");
  quant.setAttribute("style", "font-size: 20px;");
  quant.textContent = "Quantity*: ";

  q = document.createElement("select");
  q.setAttribute("name", "quantity");
  q.setAttribute("id", "quant-drop");
  q.setAttribute("style", "font-size: 20px;");

  op = document.createElement("option");
  op.setAttribute("value", "");
  op.disabled = true;
  op.selected = true;
  op.hidden = true;
  op.textContent = "--";

  q.appendChild(op);
  for (i = 0; i < amount.length; i++) {
    op = document.createElement("option");
    op.setAttribute("value", amount[i]);
    op.textContent = amount[i];
    q.appendChild(op);
  }

  quant.appendChild(q);
  space.appendChild(quant);

}

function editIngredient() {
  removeOwner();
  addPopup();
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

    var qtyName = document.getElementById('quant-drop');
    qtyName.options[qtyName.selectedIndex].value;
  }

  }

function showKeyboard() {
  var keyboard = document.getElementById("keyboard");
  keyboard.setAttribute("style", "top: 275px; position: relative; opacity: 1; visibility: visible;");
  document.getElementById("buttons").setAttribute("style", "opacity: 0; visibility: hidden;");
}
  
function hideKeyboard() {
  var keyboard = document.getElementById("keyboard");
  keyboard.setAttribute("style", "opacity: 0; visibility: hidden;");
  document.getElementById("buttons").setAttribute("style", "opacity: 1; visibility: visible;");
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
    if (diff < 3) {
      txt = document.createTextNode(diff + " days!!");
    } else {
    txt = document.createTextNode(diff + " days");
    }
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
    if (diff < 3) {
      txt = document.createTextNode(diff + " days!!");
    } else {
    txt = document.createTextNode(diff + " days");
    }
    td.appendChild(txt);
    tr.appendChild(td);
    table.appendChild(tr);
  }

}


function removePopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 0; visibility: hidden;");
  hideKeyboard();
}

function addPopup() {
  var popup = document.getElementById("popup");
  popup.setAttribute("style", "opacity: 1; visibility: visible; top: 190px;");
  showKeyboard();
}

function addRemPopup() {
  var popup = document.getElementById("rem-popup");
  popup.setAttribute("style", "opacity: 1; visibility: visible;");
  showKeyboard();
}

function removeRemPopup() {
  var popup = document.getElementById("rem-popup");
  popup.setAttribute("style", "opacity: 0; visibility: hidden;");
  hideKeyboard();
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
        var qty = document.getElementById('quant-drop');
        qty = qty.options[qty.selectedIndex].value;

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
            addRow('table', inputValue, qty, shared, month + "-" + day + "-" + year);
         //   listIngredients(true, inputValue, pmonth + "-" + pday + "-" + pyear);
        }


    }
}

function searchKeyPress(e) {
    let input = document.getElementById('searchbar').value;
    if (input === "") {
      hideKeyboard();
    }
    input=input.toLowerCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
   /* for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
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
    hideIngredients();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "";

    }
}

function showIngredients() {
  button = document.getElementById("listIng");
  button.setAttribute("style", "opacity: 1; visibility: visible; margin-top: 20px;");

}

function hideIngredients() {
  button = document.getElementById("listIng");
  button.setAttribute("style", "opacity: 0; visibility: hidden;");
}


function doSomething() {
    hideKeyboard();
    showIngredients();
    filter = document.getElementById('searchbar').value.toLowerCase();


    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = table.rows[i].cells[0];
        

        if (td) {
            txtValue = td.innerHTML.toLowerCase();
            equalEnough = false;
            if (txtValue == filter || txtValue.substring(0, filter.length) == filter || filter.substring(0, txtValue.length) == txtValue ) {
              equalEnough = true;
            }
            
            if (equalEnough) {
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

    /* shows exp date in days */
    exp = new Date(inputExpDate).setUTCHours(0, 0, 0, 0);
    today = new Date().setUTCHours(0, 0, 0, 0);
    diff = exp - today;
    diff = Math.ceil(diff / (1000 * 3600 * 24));

    exp = document.createElement("div");

    icon1 = document.createElement("i");
    icon1.setAttribute("style", "padding-left: 10px; color: red; opacity: 0;");
    icon1.className = "fa fa-exclamation";
    icon2 = document.createElement("i");
    icon2.className = "fa fa-exclamation";
    icon2.setAttribute("style", "color: red; opacity: 0;");
    icon3 = document.createElement("i");
    icon3.className = "fa fa-exclamation";
    icon3.setAttribute("style", "color: red; opacity: 0;");

    if (diff == 1) {
      txt = document.createTextNode("1 day");
      icon1.setAttribute("style", "padding-left: 18px; color: red; opacity: 1;");
      icon2.setAttribute("style", "color: red; opacity: 1;");
      icon3.setAttribute("style", "color: red; opacity: 1;");
    } else if (diff < 2) {
      txt = document.createTextNode(diff + " days");
      icon1.setAttribute("style", "padding-left: 12px; color: red; opacity: 1;");
      icon2.setAttribute("style", "color: red; opacity: 1;");
      icon3.setAttribute("style", "color: red; opacity: 1;");
    } else {
      txt = document.createTextNode(diff + " days");
      exp.appendChild(txt);
    }

    exp.appendChild(txt);
    exp.appendChild(icon1);
    exp.appendChild(icon2);
    exp.appendChild(icon3);

    row.insertCell(1).innerHTML= inputQty;
    row.insertCell(2).innerHTML= shared;
    row.insertCell(3).appendChild(exp); //inputExpDate;

   // row.setAttribute("onclick", showOwner());
    addRowHandlers(owner);


    /* clear input after adding row */
    document.getElementById('ingredient-name').value = '';
    document.getElementById('quant-drop').selectedIndex = 0;
    document.getElementById('shared').checked = false;
    document.getElementById('year-drop').selectedIndex = 0;
    document.getElementById('month-drop').selectedIndex = 0;
    document.getElementById('day-drop').selectedIndex = 0;

    return false; // stop submission
}

function removeIngredient(index) {
  document.getElementById("table").deleteRow(index);
}

function removeSharedItem() {

  filter = document.getElementById('ingredient-name-rem').value.toLowerCase();


    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    found = false;

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        td = table.rows[i].cells[0];
        

        if (td) {
            txtValue = td.innerHTML.toLowerCase();
            console.log(txtValue);
            equalEnough = false;
            if (txtValue == filter || txtValue.substring(0, filter.length) == filter || filter.substring(0, txtValue.length) == txtValue ) {
              equalEnough = true;
            }
            
            if (equalEnough) {
              removeIngredient(i);
              removeRemPopup();
              found = true;
            }
        }
    }

    if (!found) {
      alert("No ingredient found!");
    }
  
}

function addRowHandlers(owner) {
  var table = document.getElementById("table");
  var rows = table.getElementsByTagName("tr");
  //for (i = 1; i < rows.length; i++) {
      var currentRow = table.rows[1]; // since only the topmost row is updated
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
 // }
}

//recipe code

function sandwichBut()
 {
  document.getElementById('header').innerHTML = "working";
  var check = true;

  sandwich.forEach(function (item, index) {
    if(!ingredients.has(item)) {
      check = false;
    }
  })

    if(check == false) {
      document.getElementById('sandwich').style.backgroundColor = 'red';
      document.getElementById('sandwich').style.color = 'red';
    }
    
}