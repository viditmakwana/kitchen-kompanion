  $(document).ready(function () {
    var url = $(this).data('url');
     var name = url.queryKey['name'];
     var expiry = url.queryKey['expiry'];
     document.getElementById("ingredientName").innerHTML = name;
     document.getElementById("expirationDate").innerHTML = "Expires in: " + expiry;
  });

//   document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("ingredientName").innerHTML = "name";
//     document.getElementById("expirationDate").innerHTML = "Expires in: ";
//   });