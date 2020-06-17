// Add new item to grocery list
var target;
var addItem, newEl, newText, elList, inputItem;                                // Variable declarations
elList = document.getElementById('shoppingList');                   // Get shopping list
addItem = document.querySelector('a');                              // Get add item link

function addListItem(e) {
    e.preventDefault();                                             // Prevent link action
    newEl = document.createElement('li');
    if (document.getElementById('itemInput').value != "") {         // New <li> element if valid item entered     
        newText = document.createTextNode(document.getElementById('itemInput').value);                   // New text node
   
        newEl.appendChild(newText);                                     // Add text to <li>
        // elList.appendChild(newEl);                                   // Add <li> to end of list - alternative
        
        var trashImage = document.createElement('img');                 // New image tag
        trashImage.src = "Trash-can-icon.png";                          // Connect source file to image tag
        trashImage.className="trash";                                   // Connect styling to image
        //var src = document.getElementById("header");
        newEl.appendChild(trashImage);                                  // Add trash can image to list entry

        elList.insertBefore(newEl, elList.firstChild);                  // Add <li> item to start of list
        document.getElementById('itemInput').value = "";                // Clear last item from input box
        document.getElementById('itemInput').focus();                   // Set focus on item input box
    }
    
    
}

function getTarget(e) {                          // Declare function
    if (!e) {                                      // If there is no event object
        e = window.event;                            // Use old IE event object
    }
    return e.target || e.srcElement;               // Get the target of event
}

// Remove item Function
function removeListItem(e) {
   

   
    // Remove item from the list
    //var target;           // Declare variables
    target = getTarget(e);                         // Get the item clicked link

    if (target.nodeName.toLowerCase() == "img") {  // If user clicked on an a element
        elListItem = target.parentNode;              // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
    }

    // Prevent the link from taking you elsewhere
    if (e.preventDefault) {                        // If preventDefault() works
        e.preventDefault();                          // Use preventDefault() 
    } else {                                       // Otherwise
        e.returnValue = false;                       // Use old IE version
    }
}


addItem.addEventListener('click', addListItem, false);                  // Listen for new entry added button clicked

// Set up event listener for delete item event
var elRemove = document.getElementById('shoppingList');                  // Get shopping list
elRemove.addEventListener('click', function (e) {                        // Add listener on click
    removeListItem(e);                                                         // It calls removeItem()
}, false);// Use bubbling phase for flow 

//var elRemove = document.getElementById('shoppingList');                  // Get shopping list
//elRemove.addEventListener('click', removeListItem, false);

//var elRemove = document.querySelector('trash');
//elRemove.addEventListener('click', removeListItem, false);
//document.querySelector('img').addEventListener('click', removeListItem, false);