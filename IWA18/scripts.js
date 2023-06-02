import { updateDragging, createOrderData, state } from "./data.js";
import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */



const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {

    

};

const handleDragEnd = (event) => {};

//Help buttons
const handleHelpToggle = (event) => {

  html.help.overlay.style.display = "block";

};//

const handleHelpToggleCancel = (event) => {

  html.help.overlay.style.display = "none";
  html.other.add.focus();

};//

// Add buttons
const handleAddToggle = (event) => {

  html.add.overlay.style.display = "block";

};//

const handleAddToggleCancel = (event) => {

  html.add.overlay.style.display = "none";

  html.other.add.focus();

};//

const handleAddSubmit = (event) => {
  event.preventDefault();
  // Get form input values
  const title = html.add.title.value;
  const table = html.add.table.value;
  // Create new order object and add to state
  const id = Object.keys(state.orders).length + 1;
  const created = new Date();
  const order = { id, title, table, created };
  state.orders[id] = order;
  // Create HTML element for new order and append to Ordered column
  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);
  // Reset form and hide add overlay
  html.add.form.reset();
  html.add.overlay.close();
};//

//Edit
const handleEditToggle = (event) => {
  html.edit.form.style.display = "block";
};

const handleEditSubmit = (event) => {};

// Delete
const handleDelete = (event) => {
  html.edit.delete.style.display = "block";
};

// DOM
html.add.cancel.addEventListener("click", handleAddToggleCancel); //
html.other.add.addEventListener("click", handleAddToggle); //
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggleCancel); //
html.other.help.addEventListener("click", handleHelpToggle); //

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}

// Import relevant functions from data.js
//import { createOrderData } from './data.js';

// Import relevant functions from view.js
//import { renderOrder, updateOrder } from './view.js';

// Get DOM elements
// const addOrderButton = document.querySelector('data-add');
//const helpButton = html.help.overlay//document.querySelector('data-help-overlay');
// const helpOverlay = document.querySelector('help-overlay');
// const closeHelpButton = document.querySelector('close-help-button');
// const addOrderOverlay = document.querySelector('add-order-overlay');
// const addOrderCancelButton = document.querySelector('add-order-cancel-button');
// const addOrderAddButton = document.querySelector('add-order-add-button');
// const orderedColumn = document.querySelector('ordered-column');
// const completedColumn = document.querySelector('completed-column');
// const editOrderOverlay = document.querySelector('edit-order-overlay');
// const editOrderDeleteButton = document.querySelector('edit-order-delete-button');
// const editOrderCancelButton = document.querySelector('edit-order-cancel-button');
// const editOrderUpdateButton = document.querySelector('edit-order-update-button');

// Set initial focus on "Add Order" button
//addOrderButton.focus();

// Add click event listener to "Help" button
//helpButton.addEventListener('click', (event) => {
// helpButton.style.display = 'block';
// helpButton.focus();
//});

// Add click event listener to "Close Help" button
// closeHelpButton.addEventListener('click', () => {
//   helpOverlay.style.display = 'none';
//   addOrderButton.focus();
// });

// Add click event listener to "Add Order" button
// addOrderButton.addEventListener('click', () => {
//   addOrderOverlay.style.display = 'block';
//   addOrderOverlay.querySelector('#order-text-input').value = '';
//   addOrderOverlay.querySelector('#table-number-input').value = '';
//   addOrderOverlay.querySelector('#order-text-input').focus();
// });

// Add click event listener to "Cancel" button in "Add Order" overlay
// addOrderCancelButton.addEventListener('click', () => {
//   addOrderOverlay.style.display = 'none';
//   addOrderButton.focus();
// });

// Add click event listener to "Add" button in "Add Order" overlay
// addOrderAddButton.addEventListener('click', () => {
//   const orderText = addOrderOverlay.querySelector('#order-text-input').value;
//   const tableNumber = addOrderOverlay.querySelector('#table-number-input').value;
//   if (orderText.trim() !== '' && tableNumber.trim() !== '') {
//     const order = createOrder(orderText, tableNumber);
//     renderOrder(order, orderedColumn);
//     addOrderOverlay.style.display = 'none';
//     addOrderButton.focus();
//   }
// });

// Add click event listener to each order element
// const orders = document.querySelectorAll('.order');
// orders.forEach(order => {
//   order.addEventListener('click', () => {
//     const orderText = order.querySelector('.order-text').textContent;
//     const tableNumber = order.querySelector('.table-number').textContent;
//     editOrderOverlay.querySelector('#edit-order-text-input').value = orderText;
//     editOrderOverlay.querySelector('#edit-table-number-input').value = tableNumber;
//     editOrderOverlay.querySelector('#edit-status-select').value = order.closest('.column').id;
//     editOrderOverlay.dataset.orderId = order.id;
//     editOrderOverlay.style.display = 'block';
//     editOrderOverlay.querySelector('#edit-order-text-input').focus();
//   });
// });

// Add click event listener to "Delete" button in "Edit Order" overlay
// editOrderDeleteButton.addEventListener('click', () => {
//   const orderId = editOrderOverlay.dataset.orderId;
//   const order = document.querySelector(orderId);
//   order.remove();
//   editOrderOverlay.style.display = 'none';
//   addOrderButton.focus();
// });


html.edit.form.addEventListener('click', (event) => {
  event.preventDefault();

  orderId = event.target.dataset.id
  state.orders[orderId].title = html.edit.title.value;
  state.orders[orderId].table = html.edit.table.value;


  const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
  html.area.ordered.removeChild(existingOrderElement);

  const newOrderElement = createOrderHtml(state.orders[orderId]);
  newOrderElement.setAttribute('data-id', orderId);

});



const handleEditSubmit = (event) => {

  event.preventDefault();
// Get form input values
const title = html.edit.title.value;
const table = html.edit.table.value;
// Create new order object and add to state

/*  const id = Object.keys(state.orders).length + 1;
const created = new Date();
const order = { id, title, table, created };

state.orders[id] = order; */

// Create HTML element for new order and append to Ordered column
/* const orderElement = createOrderHtml(order);
html.area.ordered.append(orderElement); */

// Reset form and hide add overlay
/*  html.add.form.reset();
html.add.overlay.close();
html.add.overlay.style.display = "none"; */


};

html.edit.form.addEventListener("submit", handleEditSubmit);//