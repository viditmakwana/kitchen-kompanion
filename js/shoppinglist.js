//shopping list code

  
  function addShoppingItem(){
      var li = document.createElement("li");
      var inputValue = document.getElementById("shoppinglistinput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("ul").appendChild(li);
      document.getElementById("shoppinglistinput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }   
      }
    }