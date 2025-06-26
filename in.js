function ab() {
  var orderText = document.getElementsByClassName("in")[0].value.trim();
  var name = document.getElementsByClassName("username")[0].value.trim();

  if (orderText !== "" && name !== "") {
    var orderBox = document.getElementsByClassName("orders")[0];

    var orderDiv = document.createElement("div");
    orderDiv.style.marginTop = "10px";

    var newOrder = document.createElement("span");
    newOrder.innerText = name + ": " + orderText;  // ✅ Corrected here

    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function () {
      orderBox.removeChild(orderDiv);
    };

    orderDiv.appendChild(newOrder);
    orderDiv.appendChild(delBtn);
    orderBox.appendChild(orderDiv);

    // Clear input fields
    document.getElementsByClassName("in")[0].value = "";
    document.getElementsByClassName("username")[0].value = "";
  } else {
    alert("Please enter both name and order.");
  }
}
