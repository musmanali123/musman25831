function addItem() {
  const mainDiv = document.getElementById("main");
  let inputValue = document.getElementById("inputb").value;
  const randomId = Math.ceil(Math.random() * 9999);
  mainDiv.innerHTML += `
    <div class="item" id="${randomId}"> 
        <input type="text" class="item_input" value="${inputValue}" disabled>
        <button onclick="editItem(${randomId})" class="editbutton">Edit</button>
        <button onclick="removeItem(${randomId})" class="removebutton">Remove</button>
    </div>`;

  inputValue.value = " ";
}

function removeItem(itemId) {
  const itemToDelete = document.getElementById(itemId);
  const parentDiv = document.createElement("div");
  parentDiv.appendChild(itemToDelete);
  parentDiv.removeChild(itemToDelete);
}

function editItem(itemId) {
     const itemToEdit = document.getElementById(itemId);
          const element = itemToEdit.firstElementChild;
  if (!element.hasAttribute("itemToEdit")) {
         return element.setAttribute("itemToEdit", true);
     }
     return element.removeAttribute('itemToEdit')
 }

 //C# code for Pascal's Triangle

 Fu//nction to print first
 // n lines of Pascal's Triangle
function printPascal(n) {
  for (var line = 0; line < n; line++) {
    for (var i = 0; i <= line; i++) {
      console.log(line, i);
    }
  }
}
// Link for details of this function
// https://www.geeksforgeeks.org/space-and-time-efficient-binomial-coefficient/
function binomialCoeff(n, k) {
  var num = 1;
  if (k > n - k) {
    k = n - k;
  }
  for (var i = 0; i < k; ++i) {
    num *= n - i;
    num /= i + 1;
  }
  return num;
}

// Driver code
var n = 7;
printPascal(n);

/*This code is contributed by vt_m.*/
