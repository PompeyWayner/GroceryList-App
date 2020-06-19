// *** Retreive all list items to calculate total items ***
function totalItems() {
    var listItems = document.querySelectorAll('li');                            // All <li> elements

    // Calculate total selected list items
    var i, selected = 0;                                                             
    for (i = 0; i < listItems.length; i++) {                                    // Loop through elements
        if (listItems[i].className === 'selected_item') {
            selected += 1;
        }
    }

    // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
    var heading = document.querySelector("h4");                                 // Retreive bar element
    var headingText = heading.firstChild.nodeValue;                             // Retreive h4 text
    var totalItems = listItems.length;                                          // No. of <li> elements in shopping list
    if (totalItems > 0) {
        var newHeading = 'Items selected ' + '<span>' + selected + '</span>' + ' out of ' + '<span>' + totalItems + '</span>'; // Content
        heading.innerHTML = newHeading;               // Update h4 using innerHTML (not textContent) because it contains markup
    } else {
        heading.innerHTML = 'Empty List';
    }
}

// *** Add new item to grocery list ***
var addItem, newEl, newText, elList, inputItem;                                 // Variable declarations
elList = document.getElementById('shoppingList');                               // Get shopping list
addItem = document.querySelector('a');                                          // Get add item link

function addListItem(e) {
    e.preventDefault();                                                        // Prevent link action
    newEl = document.createElement('li');
    if (document.getElementById('itemInput').value != "") {                    // New <li> element if valid item entered     
        newText = document.createTextNode(document.getElementById('itemInput').value);                   // New text node
   
        newEl.appendChild(newText);                                     // Add text to <li>
        // elList.appendChild(newEl);                                   // Add <li> to end of list - alternative
        newEl.className = "selected_item";                              // Connect class to display correct selected item colour
        
        var trashImage = document.createElement('img');                 // New image tag
        trashImage.src = "Trash-can-icon.png";                          // Connect source file to image tag
        trashImage.className="trash";                                   // Connect styling to image
        //var src = document.getElementById("header");
        newEl.appendChild(trashImage);                                  // Add trash can image to list entry

        elList.insertBefore(newEl, elList.firstChild);                  // Add <li> item to start of list
        document.getElementById('itemInput').value = "";                // Clear last item from input box
        document.getElementById('itemInput').focus();                   // Set focus on item input box
        totalItems();
    }   
}

addItem.addEventListener('click', addListItem, false);                  // Listen for new entry added button clicked


// *** Remove item from Grocery List ***

function getTarget(e) {                             // Declare function
    if (!e) {                                       // If there is no event object
        e = window.event;                          // Use old IE event object
    }
    return e.target || e.srcElement;               // Get the target of event
}

function removeListItem(e) {
    var target;                                    // Declare variables
    target = getTarget(e);                         // Get the item clicked link

    if (target.nodeName.toLowerCase() == "img") {    // If user clicked on an image element
        elListItem = target.parentNode;              // Get its li element
        elList = elListItem.parentNode;              // Get the ul element
        elList.removeChild(elListItem);              // Remove list item from list
        totalItems();
    }

    // Prevent the link from taking you elsewhere
    if (e.preventDefault) {                        // If preventDefault() works
        e.preventDefault();                          // Use preventDefault() 
    } else {                                       // Otherwise
        e.returnValue = false;                       // Use old IE version
    }
}

// Set up event listener for delete item event
var elRemove = document.getElementById('shoppingList');                  // Get shopping list
elRemove.addEventListener('click', function (e) {                        // Add listener on click
    removeListItem(e);                                                   // It calls removeItem()
}, false);// Use bubbling phase for flow 

// *** Toggle list item ***
function toggleListItem(e) {
    var target;                                                         // Declare variables
    target = getTarget(e);                                              // Get the item clicked link

    if (target.nodeName.toLowerCase() == "li") {                        // If user clicked on a list element
        
        // Test whether list item is already selected
        if (e.target.className == 'selected_item') {                
            e.target.classList.remove('selected_item');
            e.target.classList.add('unselected_item');
        } else {
            e.target.classList.remove('unselected_item');
            e.target.classList.add('selected_item');
        }
        totalItems();
    }
}

// Listener to toggle between selected items in list
var elToggle = document.getElementById('shoppingList');                  // Get shopping list
elToggle.addEventListener('click', function (e) {                        // Add listener on click
    toggleListItem(e);                                                   // It calls toggleItem()
}, false);// Use bubbling phase for flow 


    
