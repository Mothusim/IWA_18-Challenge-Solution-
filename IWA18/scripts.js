import {
  updateDragging,
  createOrderData,
  state,
  TABLES,
  COLUMNS,
} from "./data.js";
import { html, updateDraggingHtml, moveToColumn } from "./view.js";

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

const handleDragStart = (event) => {};

const handleDragEnd = (event) => {};

//Help buttons
const handleHelpToggle = (event) => {
  //

  html.help.overlay.style.display = "block";
};

const handleHelpToggleCancel = (event) => {
  //

  html.help.overlay.style.display = "none";
  html.other.add.focus();
};

// Add buttons
const handleAddToggle = (event) => {
  //

  html.add.overlay.style.display = "block";
};
const handleAddToggleCancel = (event) => {
  //

  html.add.overlay.style.display = "none";

  html.other.add.focus();
};

const handleAddSubmit = (event) => {
  event.preventDefault();

  const ordered = document.querySelector('[data-column="ordered"]');

  const random1 = Math.floor(Math.random() * 10000000000000000);
  const random2 = Math.floor(Math.random() * 10000000000000000);
  const timestamp = new Date().getTime();
  return `${random1}-${timestamp}-${random2}`;

  ordered.className = "order";
  ordered.draggable = true;
  ordered.dataset.id = id;

  const hours = random1.getHours().toString().padStart(2, "0");
  const minutes = random2.getMinutes().toString().padStart(2, "0");

  const element = document.createElement("div");
  element.className = "order";
  element.draggable = true;
  element.dataset.id = id;

  const info = document.querySelector("input");

  html.add.overlay.style.display = "none";

  ordered.textContent = `
    <div class="order__title" data-order-title>${title}</div>
    
    <dl class="order__details">
        <div class="order__row">
            <dt>Table:</dt>
            <dd class="order__value" data-order-table>${table}</dd>
        </div>

        <div class="order__row">
            <dt>Ordered:</dt>
            <dd class="order__value">${hours}:${minutes}</dd>
        </div>
    </dl>
`;
  info.value = "";

  //html.other.add.focus()
};

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
