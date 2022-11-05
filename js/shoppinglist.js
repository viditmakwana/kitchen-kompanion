//shopping list code

    var toDolist = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < toDolist.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          toDolist[i].appendChild(span);
      }
  
      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
           var div = this.parentElement;
              div.style.display = "none";
          }   
      }
  
      var list = document.querySelector('ul');
      console.log(list);
      list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
              ev.target.classList.toggle('checked');
          }
      }, false);

  
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