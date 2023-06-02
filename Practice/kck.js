

// Get all the necessary DOM elements
const addOrderButton = document.getElementById("add-order-btn");
const helpIcon = document.getElementById("help-icon");
const helpOverlay = document.getElementById("help-overlay");
const closeOverlayButtons = document.querySelectorAll(".overlay-close-btn");
const orderOverlay = document.getElementById("order-overlay");
const orderInputs = orderOverlay.querySelectorAll("input");
const orderTableSelect = document.getElementById("order-table");
const orderedColumn = document.getElementById("ordered-column");
const preparingColumn = document.getElementById("preparing-column");
const servedColumn = document.getElementById("served-column");
const columns = document.querySelectorAll(".column");

let uniqueId = 0; // Initialize unique ID counter

// Set focus to "Add Order" button on page load
window.onload = function() {
  addOrderButton.focus();
}

// Add event listeners to DOM elements
addOrderButton.addEventListener("click", showOrderOverlay);
helpIcon.addEventListener("click", showHelpOverlay);
closeOverlayButtons.forEach(button => button.addEventListener("click", closeOverlay));
orderOverlay.addEventListener("submit", addOrder);
columns.forEach(column => {
  column.addEventListener("dragover", allowDrop);
  column.addEventListener("dragleave", removeDropHighlight);
  column.addEventListener("drop", handleDrop);
});

// Show the "Add Order" overlay
function showOrderOverlay() {
  // Reset the input fields
  orderInputs.forEach(input => input.value = "");
  orderTableSelect.selectedIndex = 0;
  
  // Show the overlay
  orderOverlay.style.display = "block";
  orderInputs[0].focus();
}

// Show the "Help" overlay
function showHelpOverlay() {
  // Show the overlay
  helpOverlay.style.display = "block";
}

// Close any overlay
function closeOverlay() {
  // Hide the overlay
  this.parentElement.parentElement.style.display = "none";
  
  // Return focus to "Add Order" button
  addOrderButton.focus();
}

// Add a new order to the "Ordered" column
function addOrder(event) {
  // Prevent form submission
  event.preventDefault();
  
  // Get the order details
  const foodOrder = orderInputs[0].value.trim();
  const tableNumber = orderTableSelect.value;
  const orderTime = new Date().toLocaleTimeString();
  
  // Create a new order element
  const newOrder = document.createElement("div");
  newOrder.classList.add("order");
  newOrder.dataset.id = ++uniqueId;
  newOrder.dataset.table = tableNumber;
  newOrder.dataset.time = orderTime;
  newOrder.draggable = true;
  newOrder.addEventListener("dragstart", handleDragStart);
  newOrder.addEventListener("dragend", removeDropHighlight);
  
  // Create order content
  const orderContent = document.createElement("p");
  orderContent.textContent = `${foodOrder} - Table ${tableNumber} - ${orderTime}`;
  newOrder.appendChild(orderContent);
  
  // Add the order to the "Ordered" column
  orderedColumn.appendChild(newOrder);
  
  // Close the overlay
  closeOverlay.call(closeOverlayButtons[0]);
}

// Handle drag and drop events
let draggedOrder = null;

function handleDragStart(event) {
  draggedOrder = event.target;
}

function handleDragEnter(event) {
  event.preventDefault();
  event.target.classList.add("drop-highlight");
}

function handleDragLeave(event) {
  event.preventDefault();
  event.target.classList.remove("drop-highlight");
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  removeDropHighlight(event);
  const column = event.target.closest(".column");
  const orderContainer = draggedOrder.closest(".order-container");
  const orderId = orderContainer.dataset.orderId;
  const newColumn = getColumnByStatus(column.dataset.status);
  updateOrderStatus(orderId, newColumn.dataset.status);
  newColumn.appendChild(orderContainer);
}

function updateOrderStatus(orderId, newStatus) {
  orders.forEach(order => {
    if (order.id === orderId) {
      order.status = newStatus;
    }
  });
  saveOrders();
}

// Load orders from local storage
let orders = loadOrders();

// Display orders on the page
displayOrders();

// Add event listeners
document.getElementById("add-order-button").addEventListener("click", openAddOrderOverlay);
document.getElementById("close-overlay-button").addEventListener("click", closeOverlay);
document.getElementById("add-order-overlay-form").addEventListener("submit", handleAddOrderSubmit);
document.getElementById("orders-container").addEventListener("click", handleOrderClick);
document.getElementById("edit-order-overlay-form").addEventListener("submit", handleEditOrderSubmit);
columns.forEach(column => {
  column.addEventListener("dragenter", handleDragEnter);
  column.addEventListener("dragleave", handleDragLeave);
  column.addEventListener("dragover", handleDragOver);
  column.addEventListener("drop", handleDrop);
});
document.body.addEventListener("dragend", removeDropHighlight);



const chosenDivs = document.querySelectorAll('[data-area="ordered"]');

// Create a variable to store the chosen div
let chosenDiv;

// Add a click event listener to each chosenDiv
chosenDivs.forEach((div) => {
  div.addEventListener("click", () => {
    chosenDiv = div;
    showOverlay();
  });
});

// Add a click event listener to the delete button on the overlay
document.querySelector("[data-edit-delete]").addEventListener("click", () => {
  // Get the ID of the chosen div
  const chosenDivId = chosenDiv.dataset.id;

  // Select and remove the chosen div from the parent div
  const parentDiv = document.querySelector(".order");
  const chosenDivToRemove = document.querySelector(
    `[data-id="${chosenDivId}"]`
  );
  chosenDivToRemove.parentNode.removeChild(chosenDivToRemove);

  hideOverlay();
});

// Function to show the overlay
function showOverlay() {
  document.querySelector("[data-edit-overlay]").style.display = "block";
}

// Function to hide the overlay
function hideOverlay() {
  document.querySelector("[data-edit-overlay]").style.display = "none";
}