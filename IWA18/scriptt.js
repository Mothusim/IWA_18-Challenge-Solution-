import {updateDragging, createOrderData, state} from "./data.js";

import {createOrderHtml, html, updateDraggingHtml, moveToColumn} from "./view.js";


//setting the focus on the Add button whenever the web page is reloaded

window.onload = function () {
  html.other.add.focus();
};


// Add buttons

const handleAddToggle = (event) => {
  html.add.overlay.style.display = "block";
};


const handleAddToggleCancel = (event) => {
  html.add.overlay.style.display = "none";
  html.other.add.focus();
};


const handleAddSubmit = (event) => {
  event.preventDefault();
 
  const title = html.add.title.value;
  const table = html.add.table.value;
  const col = document.querySelector('[data-column="ordered"]')
  
  const id = Object.keys(state.orders).length+1;
 
  const created = new Date();
  const order = { id, title, table, created };

  state.orders[id] = order;

 
  const orderElement = createOrderHtml(order);
  col.append(orderElement);

  html.add.form.reset();
  //html.add.overlay.close();
  html.add.overlay.style.display = "none";
};



// Help buttons

const handleHelpToggle = (event) => {
  html.help.overlay.style.display = "block";
};

const handleHelpToggleCancel = (event) => {
  html.help.overlay.style.display = "none";

  html.other.add.focus();
};



// Edit buttons

const handleEditToggle = (event) => {
  
  event.preventDefault()

  if (event.target.classList.contains('order')) {

        html.edit.overlay.style.display = 'block'
        html.edit.title.value = state.orders[event.target.dataset.id].title
        html.edit.table.value = state.orders[event.target.dataset.id].table

        // delete button
        const t = event.target.dataset.id

        html.edit.delete.addEventListener('click', (event) => {

            console.log(t)
            
            const p = document.querySelector(`[data-id="${t}"]`)
        
            p.remove()
        
            html.edit.overlay.style.display = "none"; 
        })



        // edit submit button
       const editFormSubmit = document.querySelector('[form="edit-form"]')

        editFormSubmit.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(state.orders[t].title)
         
            
            html.edit.title.value = state.orders[t].title

            
            html.edit.table.value = state.orders[t].table

           
           
           
         });
  }
}

const handleEditToggleCancel = (event) => {
  html.edit.overlay.style.display = "none";

  html.add.form.reset();
  html.other.add.focus();
};


// Dragging

let toBeDragged

const handleDragStart = (event) => {
  
  toBeDragged= event.target
  
};

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

const handleDragDrop = (event) => {
  event.preventDefault();
  event.target.append(toBeDragged);
};

const handleDragEnd = (event) => {

  const background = event.target.closest("section");
  background.style.backgroundColor = "";

};



// DOM
html.add.cancel.addEventListener("click", handleAddToggleCancel); //
html.other.add.addEventListener("click", handleAddToggle); //
html.add.form.addEventListener("submit", handleAddSubmit); //

html.area.ordered.addEventListener("click", handleEditToggle);//
html.edit.cancel.addEventListener("click", handleEditToggleCancel); //
//editFormSubmit.addEventListener('click', handleEditSubmit)

html.help.cancel.addEventListener("click", handleHelpToggleCancel); //
html.other.help.addEventListener("click", handleHelpToggle); //

for (const htmlArea of Object.values(html.area)) {
   htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
}