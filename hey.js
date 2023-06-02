const editFormSubmit = document.querySelector('[form="edit-form"]')

const handleEditSubmit = (event) => {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const table = formData.get('table');
    const column = formData.get('column');
  
    // Get order element to be edited
    const editId = html.edit.delete.id;
    const order = document.querySelector(`[data-id="${editId}"]`);
  
    // Update order title and table
    order.querySelector('[data-order-title]').textContent = title;
    order.querySelector('[data-order-table]').textContent = table;
  
    // Move order to new column
    const newColumn = document.querySelector(`[data-column="${column}"]`);
    moveToColumn(editId, newColumn);
  
    // Reset form and hide overlay
    event.target.reset();
    html.edit.overlay.style.display = 'none';
  };