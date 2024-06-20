//save the main activity or invoke of functions here

//functions and class
//main panel
class mainPanelRender {
  homeSummary () {
    
    const childNodes = mainPanel.childNodes;

    Array.from(childNodes).forEach(child => {
      mainPanel.removeChild(child);
    });

    var mainpanel_summary_node_2 = document.createElement('DIV');
    mainpanel_summary_node_2.setAttribute('class', 'home-summary');
    mainPanel.appendChild(mainpanel_summary_node_2);

    var mainpanel_summary_node_3 = document.createElement('P');
    mainpanel_summary_node_3.setAttribute('class', 'home-summary-title');
    mainpanel_summary_node_3.textContent = "Summary of Tasks";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_3);

    var mainpanel_summary_node_5 = document.createElement('P');
    mainpanel_summary_node_5.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_5.textContent = "Overall Tasks Done: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_5);

    var mainpanel_summary_node_7 = document.createElement('P');
    mainpanel_summary_node_7.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_7.textContent = "Total Tasks Today: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_7);

    var mainpanel_summary_node_9 = document.createElement('P');
    mainpanel_summary_node_9.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_9.textContent = "Total Tasks Overdue: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_9);

    var mainpanel_summary_node_11 = document.createElement('P');
    mainpanel_summary_node_11.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_11.textContent = "Total Tasks this Week: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_11);

    var mainpanel_summary_node_13 = document.createElement('P');
    mainpanel_summary_node_13.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_13.textContent = "Total Projects: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_13);

    var mainpanel_summary_node_15 = document.createElement('P');
    mainpanel_summary_node_15.setAttribute('class', 'home-summary-texts');
    mainpanel_summary_node_15.textContent = "Total Notes: 0";
    mainpanel_summary_node_2.appendChild(mainpanel_summary_node_15);
    
  }
  todo () {
    const childNodes = mainPanel.childNodes;
    
    Array.from(childNodes).forEach(child => {
      mainPanel.removeChild(child);
    });
    mainPanel.setAttribute('style', 'padding: 2vh; flex-direction: column; overflow-y: auto; ');
  }
  notes () {
    const childNodes = mainPanel.childNodes;

    Array.from(childNodes).forEach(child => {
      mainPanel.removeChild(child);
    });
    mainPanel.setAttribute('style', 'padding: 2vh; flex-direction: column; overflow-y: auto; ');
  }
}
//function to push created and processed item to mainTodos object/task
function createMainTodo(title, description, date, priority,status) {
  return {
    title: title,
    description: description,
    date: date,
    priority: priority,
    status: status,
    mainTodoObject () {
      const todoObject = {
        "title": title,
        "description": description,
        "date": date,
        "priority": priority,
        "status": status
      }
      return todoObject;
    },
  };
}
//function to display todo catalogs
function displayTodoCatalogEntry (index, title, date, category, description, priority, status) {
  //console.log(title);
  var todo_entry_node_2 = document.createElement('DIV');
  todo_entry_node_2.setAttribute('class', 'todo-catalog');
  todo_entry_node_2.setAttribute('id', `todo-entry${index}`);
  mainPanel.appendChild(todo_entry_node_2);

  var todo_entry_node_3 = document.createElement('INPUT');
  todo_entry_node_3.setAttribute('type', 'checkbox');
  todo_entry_node_3.setAttribute('name', `todo-entry${index}-checkbox`);
  todo_entry_node_3.setAttribute('id', `todo-entry${index}-checkbox`);
  if (status == true) {
    todo_entry_node_3.setAttribute('checked', '');
  }
  todo_entry_node_2.appendChild(todo_entry_node_3);

  var todo_entry_node_4 = document.createElement('P');
  if (status == false) {
    todo_entry_node_4.setAttribute('class', 'todo-catalog-title-default');
  } else if (status == true) {
    todo_entry_node_4.setAttribute('class', 'todo-catalog-title-checked');
  }
  todo_entry_node_4.setAttribute('id', `todo-entry${index}-title`);
  todo_entry_node_4.textContent = `${title}`; //todo title
  todo_entry_node_2.appendChild(todo_entry_node_4);

  var todo_entry_node_6 = document.createElement('BUTTON');
  todo_entry_node_6.setAttribute('class', 'todo-catalog-view-details-btn');
  todo_entry_node_6.setAttribute('id', `todo-entry${index}-view-details`);
  todo_entry_node_6.textContent = "Details";
  todo_entry_node_2.appendChild(todo_entry_node_6);

  var todo_entry_node_8 = document.createElement('P');
  todo_entry_node_8.setAttribute('class', 'todo-catalog-due');
  todo_entry_node_8.setAttribute('id', `todo-entry${index}-catalog-due`);
  todo_entry_node_8.textContent = `${date}`; //todo due date
  todo_entry_node_2.appendChild(todo_entry_node_8);

  var todo_entry_node_10 = document.createElement('IMG');
  todo_entry_node_10.setAttribute('src', './images/editor.svg');
  todo_entry_node_10.setAttribute('class', 'todo-entry-edit-button');
  todo_entry_node_10.setAttribute('id', `todo-entry${index}-edit`);
  todo_entry_node_10.setAttribute('alt', 'edit-todo-entry-icon');
  todo_entry_node_2.appendChild(todo_entry_node_10);

  var todo_entry_node_11 = document.createElement('IMG');
  todo_entry_node_11.setAttribute('src', './images/delete.svg');
  todo_entry_node_11.setAttribute('class', 'todo-entry-delete-button');
  todo_entry_node_11.setAttribute('id', `todo-entry${index}-delete`);
  todo_entry_node_11.setAttribute('alt', 'delete-todo-entry');
  todo_entry_node_2.appendChild(todo_entry_node_11);
  //details dialog panel
  var todo_entry_node_12 = document.createElement('DIALOG');
  todo_entry_node_12.setAttribute('class', 'todo-catalog-view-details-popup');
  todo_entry_node_12.setAttribute('id', `todo-entry${index}-details`);
  todo_entry_node_2.appendChild(todo_entry_node_12);

  var todo_entry_node_13 = document.createElement('DIV');
  todo_entry_node_13.setAttribute('class', 'details-panel');
  todo_entry_node_13.setAttribute('id', `todo-entry${index}-details-panel`);
  todo_entry_node_12.appendChild(todo_entry_node_13);

  var todo_entry_node_14 = document.createElement('DIV');
  todo_entry_node_14.setAttribute('class', 'details-panel-title');
  todo_entry_node_14.setAttribute('id', `todo-entry${index}-title`);
  todo_entry_node_14.textContent = `${title}`; //todo title
  todo_entry_node_13.appendChild(todo_entry_node_14);

  var todo_entry_node_16 = document.createElement('SPAN');
  todo_entry_node_16.setAttribute('class', 'details-panel-label');
  todo_entry_node_16.textContent = "Category: ";
  todo_entry_node_13.appendChild(todo_entry_node_16);

  var todo_entry_node_17 = document.createElement('P');
  todo_entry_node_17.setAttribute('id', `todo-entry${index}-project`);
  todo_entry_node_17.textContent = `${category}`; //todo first array index/PROJECT
  todo_entry_node_13.appendChild(todo_entry_node_17);

  var todo_entry_node_19 = document.createElement('BR');
  todo_entry_node_13.appendChild(todo_entry_node_19);

  var todo_entry_node_20 = document.createElement('SPAN');
  todo_entry_node_20.setAttribute('class', 'details-panel-label');
  todo_entry_node_20.textContent = "Description: ";
  todo_entry_node_13.appendChild(todo_entry_node_20);

  var todo_entry_node_21 = document.createElement('P');
  todo_entry_node_21.setAttribute('id', `todo-entry${index}-description`);
  todo_entry_node_21.textContent = `${description}`; //todo description
  todo_entry_node_13.appendChild(todo_entry_node_21);

  var todo_entry_node_23 = document.createElement('BR');
  todo_entry_node_13.appendChild(todo_entry_node_23);

  var todo_entry_node_24 = document.createElement('SPAN');
  todo_entry_node_24.setAttribute('class', 'details-panel-label');
  todo_entry_node_24.textContent = "Due Date: ";
  todo_entry_node_13.appendChild(todo_entry_node_24);

  var todo_entry_node_25 = document.createElement('P');
  todo_entry_node_25.setAttribute('id', `todo-entry${index}-details-due`);
  todo_entry_node_25.textContent = `${date}`; //todo due date
  todo_entry_node_13.appendChild(todo_entry_node_25);

  var todo_entry_node_27 = document.createElement('BR');
  todo_entry_node_13.appendChild(todo_entry_node_27);

  var todo_entry_node_28 = document.createElement('SPAN');
  todo_entry_node_28.setAttribute('class', 'details-panel-label');
  todo_entry_node_28.textContent = "Priority: ";
  todo_entry_node_13.appendChild(todo_entry_node_28);

  var todo_entry_node_29 = document.createElement('P');
  todo_entry_node_29.setAttribute('id', `todo-entry${index}-priority`);
  todo_entry_node_29.textContent = `${priority}`; //todo priority
  todo_entry_node_13.appendChild(todo_entry_node_29);

  var todo_entry_node_31 = document.createElement('BR');
  todo_entry_node_13.appendChild(todo_entry_node_31);

  var todo_entry_node_32 = document.createElement('BUTTON');
  todo_entry_node_32.setAttribute('class', 'close-todo-details-btn');
  todo_entry_node_32.textContent = "Close";
  todo_entry_node_13.appendChild(todo_entry_node_32);

  //edit dialog panel 
  var edit_todo_entry_node_1 = document.createElement('DIALOG');
  edit_todo_entry_node_1.setAttribute('class', 'edit-todo-popup');
  edit_todo_entry_node_1.setAttribute('id', `edit-todo-entry${index}`);
  todo_entry_node_2.appendChild(edit_todo_entry_node_1);

  var edit_todo_entry_node_2 = document.createElement('FORM');
  edit_todo_entry_node_2.setAttribute('class', 'edit-todo-popup-form');
  edit_todo_entry_node_2.setAttribute('id', `edit-todo-entry${index}-form`);
  edit_todo_entry_node_1.appendChild(edit_todo_entry_node_2);

  var edit_todo_entry_node_3 = document.createElement('DIV');
  edit_todo_entry_node_3.setAttribute('class', 'edit-todo');
  edit_todo_entry_node_2.appendChild(edit_todo_entry_node_3);

  var edit_todo_entry_node_4 = document.createElement('DIV');
  edit_todo_entry_node_4.setAttribute('class', 'edit-todo-header');
  edit_todo_entry_node_3.appendChild(edit_todo_entry_node_4);

  var edit_todo_entry_node_5 = document.createElement('P');
  edit_todo_entry_node_5.textContent = "EDIT TODO";
  edit_todo_entry_node_4.appendChild(edit_todo_entry_node_5);

  var edit_todo_entry_node_7 = document.createElement('DIV');
  edit_todo_entry_node_7.setAttribute('class', 'edit-todo-panel');
  edit_todo_entry_node_3.appendChild(edit_todo_entry_node_7);

  var edit_todo_entry_node_8 = document.createElement('DIV');
  edit_todo_entry_node_8.setAttribute('class', 'todo-text-input');
  edit_todo_entry_node_7.appendChild(edit_todo_entry_node_8);

  var edit_todo_entry_node_9 = document.createElement('TEXTAREA');
  edit_todo_entry_node_9.setAttribute('class', 'todo-edit-title');
  edit_todo_entry_node_9.setAttribute('id', `edit-todo-entry${index}-title`);
  edit_todo_entry_node_9.setAttribute('name', 'edit-todo-title');
  edit_todo_entry_node_9.setAttribute('maxlength', '40');
  edit_todo_entry_node_9.setAttribute('placeholder', 'Task Title: Pay bills');
  edit_todo_entry_node_9.setAttribute('required', '');
  edit_todo_entry_node_9.textContent = `${title}`;
  edit_todo_entry_node_8.appendChild(edit_todo_entry_node_9);

  var edit_todo_entry_node_10 = document.createElement('TEXTAREA');
  edit_todo_entry_node_10.setAttribute('class', 'todo-edit-description');
  edit_todo_entry_node_10.setAttribute('id', `edit-todo-entry${index}-description`);
  edit_todo_entry_node_10.setAttribute('name', 'edit-todo-description');
  edit_todo_entry_node_10.setAttribute('maxlength', '1000');
  edit_todo_entry_node_10.setAttribute('placeholder', 'Description: Electric Bills, Wi-Fi, etc.');
  //edit_todo_entry_node_10.setAttribute('required', ''); due to some todo has no description
  edit_todo_entry_node_10.textContent = `${description}`;
  edit_todo_entry_node_8.appendChild(edit_todo_entry_node_10);

  var edit_todo_entry_node_11 = document.createElement('DIV');
  edit_todo_entry_node_11.setAttribute('class', 'todo-edit-date-and-prio-input');
  edit_todo_entry_node_7.appendChild(edit_todo_entry_node_11);

  var edit_todo_entry_node_12 = document.createElement('LABEL');
  edit_todo_entry_node_12.setAttribute('class', 'todo-edit-due-date-title');
  edit_todo_entry_node_12.setAttribute('for', `edit-todo-entry${index}-due-date`);
  edit_todo_entry_node_12.textContent = "Due Date: ";
  edit_todo_entry_node_11.appendChild(edit_todo_entry_node_12);

  var edit_todo_entry_node_13 = document.createElement('INPUT');
  edit_todo_entry_node_13.setAttribute('type', 'date');
  edit_todo_entry_node_13.setAttribute('class', 'todo-edit-due-date-input');
  edit_todo_entry_node_13.setAttribute('id', `edit-todo-entry${index}-due-date`);
  edit_todo_entry_node_13.setAttribute('name', 'edit-todo-entry-due-date');
  edit_todo_entry_node_13.setAttribute('required', '');
  edit_todo_entry_node_13.setAttribute('value', `${date}`);
  edit_todo_entry_node_12.appendChild(edit_todo_entry_node_13);

  var edit_todo_entry_node_14 = document.createElement('DIV');
  edit_todo_entry_node_14.setAttribute('class', 'priority-input-edit-todo');
  edit_todo_entry_node_11.appendChild(edit_todo_entry_node_14);

  var edit_todo_entry_node_15 = document.createElement('P');
  edit_todo_entry_node_15.setAttribute('class', 'edit-todo-priority-title');
  edit_todo_entry_node_15.textContent = "Prioritry Level: ";
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_15);

  var edit_todo_entry_node_16 = document.createElement('INPUT');
  edit_todo_entry_node_16.setAttribute('type', 'radio');
  edit_todo_entry_node_16.setAttribute('class', 'todo-priority-low');
  edit_todo_entry_node_16.setAttribute('id', `edit-todo-entry${index}-priority-low`);
  edit_todo_entry_node_16.setAttribute('name', `edit-todo-entry${index}-priority`);
  edit_todo_entry_node_16.setAttribute('value', 'LOW');
  edit_todo_entry_node_16.setAttribute('required', '');
  if (priority == "LOW") {
  edit_todo_entry_node_16.setAttribute('checked', '');
  }
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_16);

  var edit_todo_entry_node_17 = document.createElement('LABEL');
  edit_todo_entry_node_17.setAttribute('class', 'todo-priority-label-low');
  edit_todo_entry_node_17.setAttribute('for', `edit-todo-entry${index}-priority-low`);
  edit_todo_entry_node_17.textContent = "LOW";
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_17);

  var edit_todo_entry_node_19 = document.createElement('INPUT');
  edit_todo_entry_node_19.setAttribute('type', 'radio');
  edit_todo_entry_node_19.setAttribute('class', 'todo-priority-mid');
  edit_todo_entry_node_19.setAttribute('id', `edit-todo-entry${index}-priority-mid`);
  edit_todo_entry_node_19.setAttribute('name', `edit-todo-entry${index}-priority`);
  edit_todo_entry_node_19.setAttribute('value', 'MID');
  edit_todo_entry_node_19.setAttribute('required', '');
  if (priority == "MID") {
    edit_todo_entry_node_19.setAttribute('checked', '');
  }
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_19);

  var edit_todo_entry_node_20 = document.createElement('LABEL');
  edit_todo_entry_node_20.setAttribute('class', 'todo-priority-label-mid');
  edit_todo_entry_node_20.setAttribute('for', `edit-todo-entry${index}-priority-mid`);
  edit_todo_entry_node_20.textContent = "MID";
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_20);

  var edit_todo_entry_node_22 = document.createElement('INPUT');
  edit_todo_entry_node_22.setAttribute('type', 'radio');
  edit_todo_entry_node_22.setAttribute('class', 'todo-priority-high');
  edit_todo_entry_node_22.setAttribute('id', `edit-todo-entry${index}-priority-high`);
  edit_todo_entry_node_22.setAttribute('name', `edit-todo-entry${index}-priority`);
  edit_todo_entry_node_22.setAttribute('value', 'HIGH');
  edit_todo_entry_node_22.setAttribute('required', '');
  if (priority == "HIGH") {
    edit_todo_entry_node_22.setAttribute('checked', '');
  }
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_22);

  var edit_todo_entry_node_23 = document.createElement('LABEL');
  edit_todo_entry_node_23.setAttribute('class', 'todo-priority-label-high');
  edit_todo_entry_node_23.setAttribute('for', `edit-todo-entry${index}-priority-high`);
  edit_todo_entry_node_23.textContent = "HIGH";
  edit_todo_entry_node_14.appendChild(edit_todo_entry_node_23);

  var edit_todo_entry_node_25 = document.createElement('BUTTON');
  edit_todo_entry_node_25.setAttribute('class', 'todo-editor');
  edit_todo_entry_node_25.setAttribute('id', 'confirm');
  edit_todo_entry_node_25.setAttribute('type', 'submit');
  edit_todo_entry_node_25.setAttribute('value', 'default');
  edit_todo_entry_node_11.appendChild(edit_todo_entry_node_25);

  var edit_todo_entry_node_26 = document.createElement('IMG');
  edit_todo_entry_node_26.setAttribute('src', './images/check.svg');
  edit_todo_entry_node_26.setAttribute('alt', 'check-icon');
  edit_todo_entry_node_25.appendChild(edit_todo_entry_node_26);

  var edit_todo_entry_node_27 = document.createElement('BUTTON');
  edit_todo_entry_node_27.setAttribute('class', 'cancel');
  edit_todo_entry_node_27.setAttribute('id', 'cancel-edit-todo');
  edit_todo_entry_node_27.textContent = "X";
  edit_todo_entry_node_11.appendChild(edit_todo_entry_node_27);
}
//function to popup dialog for edit of todo catalog entry
function editTodoCatalogEntry () {

}
//function to render todo catalogs, add eventlistener to open/close details dialog, delete entry and check if textbox is toggled
function renderTodos (activeTab, mainTodos) {
  if (activeTab != "MY HOME" && activeTab != "MY NOTES") {
    //For use to loop through keys of mainTodos => categories
    const todoCategories = Object.keys(mainTodos);
    //console.log(todoCategories);
    for (todoCategory of todoCategories) {
      //console.log(todoCategory);
      const todoCategoryPattern = new RegExp(todoCategory, 'i');
      if (activeTab.match(todoCategoryPattern)) {
        //console.log(todoCategory);
        const currentObject = mainTodos[`${todoCategory}`];
        //console.log(currentObject.length);
        if (currentObject.length == 0) {
          var mainpanel_todo_node = document.createElement('SPAN');
          mainpanel_todo_node.setAttribute('class', 'todo-empty-currentobject-message');
          mainpanel_todo_node.textContent = "No todo added here yet click the \"+\" button to add."
          mainPanel.appendChild(mainpanel_todo_node);
        }
        currentObject.forEach(function(entry, index) {
          //console.log(entry);
          let category = `${todoCategory}`;
          displayTodoCatalogEntry (index, entry.title, entry.date, category, entry.description, entry.priority, entry.status);
        });
        //todo entry details dialog open
        const showTodoDetailsBtns = document.querySelectorAll('.todo-catalog-view-details-btn');
        showTodoDetailsBtns.forEach(function(showTodoDetailsBtn, index) {
          const dialogTodoDetails = document.querySelector(`#todo-entry${index}-details`);
          showTodoDetailsBtn.addEventListener("click", function(e) {
            e.preventDefault();
            dialogTodoDetails.showModal();
          });
        });
        //todo entry details dialog close
        const closeTodoDetailsBtns = document.querySelectorAll('.close-todo-details-btn');
        closeTodoDetailsBtns.forEach(function(closeTodoDetailsBtn, index) {
          const dialogTodoDetails = document.querySelector(`#todo-entry${index}-details`);
          closeTodoDetailsBtn.addEventListener("click", function(e) {
            e.preventDefault();
            dialogTodoDetails.close();
          });
        });
        //Change class if checkbox is toggled
        const todoEntryCheckBoxes = document.querySelectorAll("input[type=checkbox]");
        //console.log(todoEntryCheckBoxes);
        todoEntryCheckBoxes.forEach(function (todoEntryCheckBox, index) {
          todoEntryCheckBox.addEventListener('change', function(e) {
            if (this.checked) {
              console.log("Checkbox is checked..");
              const checkedbox = e.target;
              //console.log(checkedbox);

              //get all childNodes of todo catalog entry
              const toLineThroughEntryChildren = checkedbox.parentNode.childNodes;
              //Run through each childnodes
              toLineThroughEntryChildren.forEach(function(toLineThroughEntryChild, index) {
                if(toLineThroughEntryChild.classList.contains('todo-catalog-title-default')) {
                  //change class to strikethrough once box is checked
                  toLineThroughEntryChild.classList.remove('todo-catalog-title-default');
                  toLineThroughEntryChild.classList.add('todo-catalog-title-checked');
                  for (let i = 0; i < currentObject.length; i++) {
                    if(currentObject[i].title == toLineThroughEntryChild.textContent) {
                      //change status to true => meaning checked
                      currentObject[i].status = true;
                    }
                  }
                }
              });
            } else {
              console.log("Checkbox is not checked..");
              const uncheckedbox = e.target;
              //console.log(uncheckedbox);

              //get all childNodes of todo catalog entry
              const toLineThroughEntryChildren = uncheckedbox.parentNode.childNodes;
              //Run through each childnodes
              toLineThroughEntryChildren.forEach(function(toLineThroughEntryChild, index) {
                if(toLineThroughEntryChild.classList.contains('todo-catalog-title-checked')) {
                  //change class to strikethrough once box is checked
                  toLineThroughEntryChild.classList.remove('todo-catalog-title-checked');
                  toLineThroughEntryChild.classList.add('todo-catalog-title-default');
                  
                  for (let i = 0; i < currentObject.length; i++) {
                    if(currentObject[i].title == toLineThroughEntryChild.textContent) {
                      //change status to true => meaning checked
                      currentObject[i].status = false;
                    }
                  }
                }
              });
            }
          });
        });
        //todo entry delete catalog button
        const deleteTodoBtns = document.querySelectorAll('.todo-entry-delete-button');
        deleteTodoBtns.forEach(function(deleteTodoBtn, index) {
          deleteTodoBtn.addEventListener("click", function(e) {
            
            const clickedDelete = e.target;
            const clickedTodoEntry = clickedDelete.parentNode.id;
            const tobeRemovedTodoCatalog = document.getElementById(`${clickedTodoEntry}`);
        
            //get all childNodes of todo catalog entry
            const clickedTodoEntryChildren = clickedDelete.parentNode.childNodes;
            //splice respective entry on object
            clickedTodoEntryChildren.forEach(function(clickedTodoEntryChild, index) {
              if(clickedTodoEntryChild.classList.contains('todo-catalog-title-default')||
              clickedTodoEntryChild.classList.contains('todo-catalog-title-checked')) {
                //console.log(clickedTodoEntryChild);
                //console.log(clickedTodoEntryChild.textContent);
                for (let i = 0; i < currentObject.length; i++) {
                  if(currentObject[i].title == clickedTodoEntryChild.textContent) {
                    console.log(`Successfully removed ${currentObject[i]} entry`);
                    currentObject.splice(i, 1);
                  }
                }
              }
            });

            mainPanel.removeChild(tobeRemovedTodoCatalog);
            console.log(currentObject);
          });
        });
        //edit todo entry popup
        const editTodoBtns = document.querySelectorAll('.todo-entry-edit-button');
        editTodoBtns.forEach(function(editTodoBtn, index) {
          const dialogEditTodo = document.querySelector(`#edit-todo-entry${index}`);
          editTodoBtn.addEventListener("click", function(e) {
            const toEditCatalogEntryElements = editTodoBtn.parentNode.childNodes;
            //const dialogEditTodo = document.querySelector(`#edit-todo-entry`);
            //console.log(dialogEditTodo);
            e.preventDefault();
            dialogEditTodo.showModal();
          });
        });
        //todo edit dialog close
        const closeEditBtns = document.querySelectorAll('#cancel-edit-todo');
        closeEditBtns.forEach(function(closeEditBtn, index) {
          const dialogEditTodo = document.querySelector(`#edit-todo-entry${index}`);
          closeEditBtn.addEventListener("click", function(e) {
            e.preventDefault();
            dialogEditTodo.close();
          });
        });
        //todo edit form submit
        const EditTodoForms = document.querySelectorAll('.edit-todo-popup-form');
        EditTodoForms.forEach(function(EditTodoForm, index) {
          //console.log(EditTodoForm);
          EditTodoForm.removeEventListener('submit', submitEditTodo);
          EditTodoForm.addEventListener("submit", (e) => submitEditTodo(e, index, currentObject));
          /*for check wether if re-displayTodoEntries are placed inside the submitEditTodo or outside (inside event
          listener)*/
        });
      }
    }
  }
}
//create addtional tab at the navigation bar with respect to available keys on mainTodos object and add eventlistener to each tab and whenever there is a new one
function createProjectTab (mainTodos) {
  const projectTab = document.querySelector('.projects');
  const projectTabChilren = projectTab.childNodes;
  const dontMatchEmpty = new RegExp("\\n");
  const displayedProjectTabs =[];
  //Check all project tab category displayed on projectsTab
  for (projectTabChild of projectTabChilren) {
    //needed to unmatch newlines due to childNodes include #text -> new lines on HTML
    if (!projectTabChild.textContent.match(dontMatchEmpty)) {
      displayedProjectTabs.push(projectTabChild.textContent.toLowerCase());
    }
  }
  //console.log(displayedProjectTabs);
  //For use to loop through keys of mainTodos => categories
  const todoCategories = Object.keys(mainTodos);
  for (todoCategory of todoCategories) {
    if (!displayedProjectTabs.includes(`${todoCategory}`)) {
      //if current key in object is not yet displayed and excluding today and week
      if (todoCategory != "today" && todoCategory != "week") {
        const toDisplayTodoCategory = todoCategory.toUpperCase();
        var add_project_tab_node = document.createElement('LI');
        add_project_tab_node.setAttribute('class', 'main-panel-menu-projects-item');
        add_project_tab_node.textContent = `${toDisplayTodoCategory}`;
        projectTab.appendChild(add_project_tab_node);
        console.log (`Displayed new Project Tab for category ${todoCategory}`);
        console.log(`Updated keys of mainTodos object ${todoCategories}`);
      }
    } else {
      console.log(`${todoCategory} already has a displayed Project Tab`);
    }
  }
  //event listener for project/category tabs
  const projectCategoryTabs = document.querySelectorAll(".main-panel-menu-projects-item");
  projectCategoryTabs.forEach(function(projectCategoryTab, index) {
    //clone element to fix redundancy of previous eventlisteners
    //const projectCategoryTabClone = projectCategoryTab.cloneNode(true);
    //projectCategoryTab.parentNode.replaceChild(projectCategoryTabClone, projectCategoryTab);
    //projectCategoryTabClone.addEventListener("click", function() {
    projectCategoryTab.addEventListener("click", function(e) {
      //To know which tab is active
      //const activeProjectCategoryTab = projectCategoryTabClone.textContent;
      activeProjectCategoryTab = projectCategoryTab.textContent;
      const activeProjectCategoryTabPattern = new RegExp(`${activeProjectCategoryTab}`, 'i');
      console.log(activeProjectCategoryTab);

      projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
        projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
      });

      //if (!projectCategoryTab.classList.contains('main-panel-menu-projects-item-active')) {
        projectCategoryTab.classList.add('main-panel-menu-projects-item-active');
      //}
      mainPanelOpen.todo();
      renderTodos (activeProjectCategoryTab, mainTodos);
        return activeProjectCategoryTab;
    });
  });
}
//pop-up dialog
class dialogPopupRender {
  renderCreateTodoDialog () {
    const childNodes = dialogPanel.childNodes;

    Array.from(childNodes).forEach(child => {
      dialogPanel.removeChild(child);
    });
    
    var dialog_todo_node_2 = document.createElement('DIV');
    dialog_todo_node_2.setAttribute('class', 'todo-text-input');
    dialogPanel.appendChild(dialog_todo_node_2);

    var dialog_todo_node_3 = document.createElement('TEXTAREA');
    dialog_todo_node_3.setAttribute('class', 'todo-create-new-title');
    dialog_todo_node_3.setAttribute('id', 'edit-new-todo-title');
    dialog_todo_node_3.setAttribute('name', 'new-todo-title');
    dialog_todo_node_3.setAttribute('maxlength', '40');
    dialog_todo_node_3.setAttribute('placeholder', 'Task Title: Pay bills');
    dialog_todo_node_3.setAttribute('required', '');
    dialog_todo_node_2.appendChild(dialog_todo_node_3);

    var dialog_todo_node_4 = document.createElement('TEXTAREA');
    dialog_todo_node_4.setAttribute('class', 'todo-create-new-description');
    dialog_todo_node_4.setAttribute('id', 'edit-new-todo-description');
    dialog_todo_node_4.setAttribute('name', 'new-todo-description');
    dialog_todo_node_4.setAttribute('maxlength', '1000');
    dialog_todo_node_4.setAttribute('placeholder', 'Description: Electric Bills, Wi-Fi, etc.');
    dialog_todo_node_4.setAttribute('required', '');
    dialog_todo_node_2.appendChild(dialog_todo_node_4);

    var dialog_todo_node_5 = document.createElement('DIV');
    dialog_todo_node_5.setAttribute('class', 'todo-date-and-prio-input');
    dialogPanel.appendChild(dialog_todo_node_5);

    var dialog_todo_node_7 = document.createElement('LABEL');
    dialog_todo_node_7.setAttribute('class', 'todo-due-date-title');
    dialog_todo_node_7.setAttribute('for', 'due-date');
    dialog_todo_node_7.textContent = "Due Date: ";
    dialog_todo_node_5.appendChild(dialog_todo_node_7);

    var dialog_todo_node_8 = document.createElement('INPUT');
    dialog_todo_node_8.setAttribute('type', 'date');
    dialog_todo_node_8.setAttribute('class', 'todo-due-date-input');
    dialog_todo_node_8.setAttribute('id', 'due-date');
    dialog_todo_node_8.setAttribute('name', 'due-date');
    dialog_todo_node_8.setAttribute('required', '');
    dialog_todo_node_7.appendChild(dialog_todo_node_8);

    var dialog_todo_node_9 = document.createElement('DIV');
    dialog_todo_node_9.setAttribute('class', 'priority-input-todo');
    dialog_todo_node_5.appendChild(dialog_todo_node_9);

    var dialog_todo_node_10 = document.createElement('P');
    dialog_todo_node_10.setAttribute('class', 'todo-priority-title');
    dialog_todo_node_10.textContent = "Priority Level: ";
    dialog_todo_node_9.appendChild(dialog_todo_node_10);

    var dialog_todo_node_11 = document.createElement('INPUT');
    dialog_todo_node_11.setAttribute('type', 'radio');
    dialog_todo_node_11.setAttribute('class', 'todo-priority-low');
    dialog_todo_node_11.setAttribute('id', 'todo-priority-low');
    dialog_todo_node_11.setAttribute('name', 'todo-priority');
    dialog_todo_node_11.setAttribute('value', 'LOW');
    dialog_todo_node_11.setAttribute('required', '');
    dialog_todo_node_9.appendChild(dialog_todo_node_11);

    var dialog_todo_node_12 = document.createElement('LABEL');
    dialog_todo_node_12.setAttribute('class', 'todo-priority-label-low');
    dialog_todo_node_12.setAttribute('for', 'todo-priority-low');
    dialog_todo_node_12.textContent = "LOW";
    dialog_todo_node_9.appendChild(dialog_todo_node_12);

    var dialog_todo_node_14 = document.createElement('INPUT');
    dialog_todo_node_14.setAttribute('type', 'radio');
    dialog_todo_node_14.setAttribute('class', 'todo-priority-mid');
    dialog_todo_node_14.setAttribute('id', 'todo-priority-mid');
    dialog_todo_node_14.setAttribute('name', 'todo-priority');
    dialog_todo_node_14.setAttribute('value', 'MID');
    dialog_todo_node_14.setAttribute('required', '');
    dialog_todo_node_9.appendChild(dialog_todo_node_14);

    var dialog_todo_node_15 = document.createElement('LABEL');
    dialog_todo_node_15.setAttribute('class', 'todo-priority-label-mid');
    dialog_todo_node_15.setAttribute('for', 'todo-priority-mid');
    dialog_todo_node_15.textContent = "MID";
    dialog_todo_node_9.appendChild(dialog_todo_node_15);

    var dialog_todo_node_17 = document.createElement('INPUT');
    dialog_todo_node_17.setAttribute('type', 'radio');
    dialog_todo_node_17.setAttribute('class', 'todo-priority-high');
    dialog_todo_node_17.setAttribute('id', 'todo-priority-high');
    dialog_todo_node_17.setAttribute('name', 'todo-priority');
    dialog_todo_node_17.setAttribute('value', 'HIGH');
    dialog_todo_node_17.setAttribute('required', '');
    dialog_todo_node_9.appendChild(dialog_todo_node_17);

    var dialog_todo_node_18 = document.createElement('LABEL');
    dialog_todo_node_18.setAttribute('class', 'todo-priority-label-high');
    dialog_todo_node_18.setAttribute('for', 'todo-priority-high');
    dialog_todo_node_18.textContent = "HIGH";
    dialog_todo_node_9.appendChild(dialog_todo_node_18);

    var dialog_todo_node_20 = document.createElement('BUTTON');
    dialog_todo_node_20.setAttribute('class', 'todo-creator');
    dialog_todo_node_20.setAttribute('id', 'confirm');
    dialog_todo_node_20.setAttribute('type', 'submit');
    dialog_todo_node_20.setAttribute('value', 'default');
    dialog_todo_node_5.appendChild(dialog_todo_node_20);

    var dialog_todo_node_21 = document.createElement('IMG');
    dialog_todo_node_21.setAttribute('src', './images/check.svg');
    dialog_todo_node_21.setAttribute('alt', 'check-icon');
    dialog_todo_node_20.appendChild(dialog_todo_node_21);

    var dialog_todo_node_22 = document.createElement('BUTTON');
    dialog_todo_node_22.setAttribute('class', 'cancel');
    dialog_todo_node_22.setAttribute('id', 'cancel-create-todo');
    dialog_todo_node_22.textContent = "X";
    dialog_todo_node_5.appendChild(dialog_todo_node_22);
  }
  renderCreateProjectDialog () {
    const childNodes = dialogPanel.childNodes;

    Array.from(childNodes).forEach(child => {
      dialogPanel.removeChild(child);
    });

    var dialog_project_node_2 = document.createElement('DIV');
    dialog_project_node_2.setAttribute('class', 'project-text-input');
    dialogPanel.appendChild(dialog_project_node_2);

    var dialog_project_node_3 = document.createElement('TEXTAREA');
    dialog_project_node_3.setAttribute('class', 'project-create-new-title');
    dialog_project_node_3.setAttribute('id', 'edit-new-project-title');
    dialog_project_node_3.setAttribute('name', 'new-project-title');
    dialog_project_node_3.setAttribute('maxlength', '40');
    dialog_project_node_3.setAttribute('placeholder', 'Project Title: Debugging the school\'s LILO system');
    dialog_project_node_3.setAttribute('required', '');
    dialog_project_node_2.appendChild(dialog_project_node_3);

    var dialog_project_node_4 = document.createElement('BUTTON');
    dialog_project_node_4.setAttribute('class', 'project-creator');
    dialog_project_node_4.setAttribute('id', 'confirm');
    dialog_project_node_4.setAttribute('type', 'submit');
    dialog_project_node_4.setAttribute('value', 'default');
    dialogPanel.appendChild(dialog_project_node_4);

    var dialog_project_node_5 = document.createElement('IMG');
    dialog_project_node_5.setAttribute('src', './images/check.svg');
    dialog_project_node_5.setAttribute('alt', 'check-icon');
    dialog_project_node_4.appendChild(dialog_project_node_5);

    var dialog_project_node_6 = document.createElement('BUTTON');
    dialog_project_node_6.setAttribute('class', 'cancel');
    dialog_project_node_6.setAttribute('id', 'cancel-create-project');
    dialog_project_node_6.textContent = "X";
    dialogPanel.appendChild(dialog_project_node_6);

  }
  renderCreateNoteDialog () {
    const childNodes = dialogPanel.childNodes;

    Array.from(childNodes).forEach(child => {
      dialogPanel.removeChild(child);
    });
    
    var dialog_note_node_2 = document.createElement('DIV');
    dialog_note_node_2.setAttribute('class', 'note-text-input');
    dialogPanel.appendChild(dialog_note_node_2);

    var dialog_note_node_3 = document.createElement('TEXTAREA');
    dialog_note_node_3.setAttribute('class', 'note-create-new-title');
    dialog_note_node_3.setAttribute('id', 'edit-new-note-title');
    dialog_note_node_3.setAttribute('name', 'new-note-title');
    dialog_note_node_3.setAttribute('maxlength', '40');
    dialog_note_node_3.setAttribute('placeholder', 'Note Title: My Summer Vacation Bucketlist');
    dialog_note_node_3.setAttribute('required', '');
    dialog_note_node_2.appendChild(dialog_note_node_3);

    var dialog_note_node_4 = document.createElement('TEXTAREA');
    dialog_note_node_4.setAttribute('class', 'note-create-new-description');
    dialog_note_node_4.setAttribute('id', 'edit-new-note-description');
    dialog_note_node_4.setAttribute('name', 'new-note-description');
    dialog_note_node_4.setAttribute('maxlength', '1000');
    dialog_note_node_4.setAttribute('placeholder', 'Description: These are the things I want to do this summer...');
    //dialog_note_node_4.setAttribute('required', ''); --> should not be required can submit todo without a description
    dialog_note_node_2.appendChild(dialog_note_node_4);

    var dialog_note_node_5 = document.createElement('BUTTON');
    dialog_note_node_5.setAttribute('class', 'note-creator');
    dialog_note_node_5.setAttribute('id', 'confirm');
    dialog_note_node_5.setAttribute('type', 'submit');
    dialog_note_node_5.setAttribute('value', 'default');
    dialogPanel.appendChild(dialog_note_node_5);

    var dialog_note_node_6 = document.createElement('IMG');
    dialog_note_node_6.setAttribute('src', './images/check.svg');
    dialog_note_node_6.setAttribute('alt', 'check-icon');
    dialog_note_node_5.appendChild(dialog_note_node_6);

    var dialog_note_node_7 = document.createElement('BUTTON');
    dialog_note_node_7.setAttribute('class', 'cancel');
    dialog_note_node_7.setAttribute('id', 'cancel-create-note');
    dialog_note_node_7.textContent = "X";
    dialogPanel.appendChild(dialog_note_node_7);
  }
}
//eventlistner only functions
function cancelAdd(e) {
  console.log("Adding canceled");
  e.preventDefault();
  dialogCreateNew.close();
}
function submitTodo(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const inputtedTodoTitle = document.getElementById("edit-new-todo-title").value;
  const inputtedTodoDescription = document.getElementById("edit-new-todo-description").value;
  const inputtedTodoDueDate = document.getElementById("due-date").value;
  const inputtedTodoPriority = document.querySelector('input[name=todo-priority]:checked').value;
  //initially this false, meaning not done/ongoing
  const inputtedTodoStatus = false;
  console.log(activeProjectCategoryTab);
  //process values with what are parsed in the dialog to be added to todo object
  const parsedTodoInput = createMainTodo(inputtedTodoTitle, inputtedTodoDescription, inputtedTodoDueDate, inputtedTodoPriority, inputtedTodoStatus);
  if (!mainPanelWindow.match(projectTabIsActivePattern) && mainPanelWindow != "MY HOME" && mainPanelWindow != "MY NOTES") {
    sortToCategory (mainTodos, parsedTodoInput, mainPanelWindow);
    dialogCreateNew.close();
    mainPanelOpen.todo();
    renderTodos (mainPanelWindow, mainTodos);
  } else if (mainPanelWindow.match(projectTabIsActivePattern) && mainPanelWindow != "MY HOME" && mainPanelWindow != "MY NOTES") {
    sortToCategory (mainTodos, parsedTodoInput, activeProjectCategoryTab);
    dialogCreateNew.close();
    mainPanelOpen.todo();
    renderTodos (activeProjectCategoryTab, mainTodos);
  }
}
function submitProject(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const inputtedProjetTitle = document.getElementById("edit-new-project-title").value;
  console.log(inputtedProjetTitle);
  console.log("project title submitted successfully");
  dialogCreateNew.close();
  const todoCategories = Object.keys(mainTodos);
  if (!todoCategories.includes(inputtedProjetTitle.toLowerCase())) {
    mainTodos[`${inputtedProjetTitle.toLowerCase()}`] = [];
    createProjectTab (mainTodos);
  }
}
function submitNote (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const inputtedNoteTitle = document.getElementById("edit-new-note-title").value;
  const inputtedNoteDescription = document.getElementById("edit-new-note-description").value;
  console.log(inputtedNoteTitle);
  console.log(inputtedNoteDescription);
  console.log("note title and note description submitted successfully");
  dialogCreateNew.close();
}
function submitEditTodo(e, index, currentObject) {
  const dialogEditTodo = document.querySelector(`#edit-todo-entry${index}`);
  e.preventDefault(); // Prevent the default form submission behavior
  const modifiedTodoTitle = document.getElementById(`edit-todo-entry${index}-title`).value;
  const modifiedTodoDescription = document.getElementById(`edit-todo-entry${index}-description`).value;
  const modifiedTodoDueDate = document.getElementById(`edit-todo-entry${index}-due-date`).value;
  const modifiedTodoPriority = document.querySelector(`input[name=edit-todo-entry${index}-priority]:checked`).value;
  console.log(modifiedTodoPriority);
  console.log(currentObject[index].priority);
  console.log(currentObject[index]);
  const currentObjectIteration = currentObject[index];
  
  if (currentObject[index].title != modifiedTodoTitle) {
    currentObject[index].title = modifiedTodoTitle;
  } else {console.log("Title not edited");}
  if (currentObject[index].description != modifiedTodoDescription) {
    currentObject[index].description = modifiedTodoDescription;
  } else {console.log("Description not edited");}
  if (currentObject[index].date != modifiedTodoDueDate) {
    currentObject[index].date = modifiedTodoDueDate;
  } else {console.log("Due date not edited");}
  if (currentObject[index].priority != modifiedTodoPriority) {
    currentObject[index].priority = modifiedTodoPriority;
  } else {console.log("Priority Level not edited");}
  
  dialogEditTodo.close();
}
//to submit on the right key depending on what is the current active tab when the create button was clicked
function sortToCategory (mainTodos, parsedTodoInput ,currentMainPanelWindow) {
  //For use to loop through keys of mainTodos => categories
  const todoCategories = Object.keys(mainTodos);
  for (todoCategory of todoCategories) {
    const todoCategoryPattern = new RegExp(currentMainPanelWindow, 'i');
    const isKeyThere = `${todoCategory}` in mainTodos;
    if (todoCategory.match(todoCategoryPattern) && isKeyThere == true) {
      mainTodos[`${todoCategory}`].push(parsedTodoInput.mainTodoObject());
      console.log(parsedTodoInput);
      console.log(`Added to ${todoCategory} please check updated object below`);
      console.log(mainTodos);
    } else if (!todoCategory.match(todoCategoryPattern) && isKeyThere == true) {console.log(`${todoCategory} is currently not the designated category of todo to be added`);
    } else if (!todoCategory.match(todoCategoryPattern) && isKeyThere == false) {console.log("No category for currently active tab in mainTodos Object");}
  }
}
//variable declarations for dialog for creating new todo, project and note
const openCreate = document.getElementById("adder");
const dialogCreateNewForm = document.querySelector("#create-task-dialog");
const dialogCreateNew = document.getElementById("create-task");
const dialogPanel = document.querySelector(".create-new-panel");
const dialogNavigationBtns = document.querySelectorAll(".create-new-menu");
const dialogAddTodoBtn = document.querySelector("#create-new-selection1");
const dialogAddProjectBtn = document.querySelector("#create-new-selection2");
const dialogAddNoteBtn = document.querySelector("#create-new-selection3");
const confirmCreate = document.getElementById("confirm");
const dialogPopupOpen = new dialogPopupRender();
//variable declarations for main panel
const mainPanel = document.querySelector(".workspace-panel");
const mainPanelNavigationBtns = document.querySelectorAll(".main-panel-menu, .main-panel-menu-projects");
const mainPanelHomeBtn = document.querySelector("#main-panel-selection1");
const mainPanelTodayBtn = document.querySelector("#main-panel-selection2");
const mainPanelWeekBtn = document.querySelector("#main-panel-selection3");
const mainPanelNoteBtn = document.querySelector("#main-panel-selection4");
const mainPanelProjectTab= document.querySelector("#main-panel-selection5");
const mainPanelOpen = new mainPanelRender();

//parse on local storage or create empty new mainTodos, projectTodos, notes
const mainTodos = JSON.parse(localStorage.getItem('mainTodos')) || {
  "today" : [],
  "week" : [],
}

const projectTodos = JSON.parse(localStorage.getItem('projectTodos')) || [];
const notes = JSON.parse(localStorage.getItem('notes')) || [];

//create a mock details if no object found on local storage
if (!localStorage.getItem('mainTodos')) { 
  //mainTodos.today.push(createMainTodo(inputtedTodoTitle, inputtedTodoDescription, inputtedTodoDueDate, inputtedTodoPriority, inputtedTodoStatus).mainTodoObject());
  mainTodos.today.push(createMainTodo("House Chores", "Water the plants, clean the bathroom and make the bed", "2024-05-21", "LOW", false).mainTodoObject());
  mainTodos.today.push(createMainTodo("Get Haircut", "", "2024-05-22", "MID", false).mainTodoObject());
  mainTodos.today.push(createMainTodo("Javascript Self-Learning", "Continue project: To-do list production testing and incorporate bug fixes if needed", "2024-05-23", "HIGH", true).mainTodoObject());
  
  mainTodos.week.push(createMainTodo("Do Grocery", "Buy 2 canned tuna, 1 carton milk and 2kg chicken", "2024-05-19", "MID", false).mainTodoObject());
  mainTodos.week.push(createMainTodo("Laundry", "Deliver laundry at 9AM then pickup at 5:30PM", "2024-05-25", "HIGH", true).mainTodoObject());
  mainTodos.week.push(createMainTodo("Doctor's Appointment", "Go to dermatologist appointment, bring medical records", "2024-05-27", "LOW", false).mainTodoObject());

  mainTodos["gym"] = [];
  mainTodos.gym.push(createMainTodo("BB Grocery", "Buy Protein Shake at Shoppee", "2024-06-10", "HIGH", true).mainTodoObject());
  mainTodos.gym.push(createMainTodo("Meal Prep", "Prepare meal prep for this week", "2024-06-12", "LOW", false).mainTodoObject());
  mainTodos.gym.push(createMainTodo("Statistics Update", "Weigh in then update calorie intaks", "2024-06-15", "LOW", false).mainTodoObject());

  mainTodos["work"] = [];
  mainTodos.work.push(createMainTodo("Script", "Create script request of client for SEO", "2024-06-13", "HIGH", true).mainTodoObject());
  mainTodos.work.push(createMainTodo("Ticket CleanUp", "Dobule check unresolved tickets from last week", "2024-06-21", "LOW", false).mainTodoObject());
  mainTodos.work.push(createMainTodo("1-on-1", "1 on 1 discussion with Boss", "2024-06-18", "HIGH", false).mainTodoObject());

  mainTodos["school"] = [];
  mainTodos.school.push(createMainTodo("Lecture 1", "Finish Lecture 1 on Engr Management", "2024-06-25", "MID", true).mainTodoObject());
  mainTodos.school.push(createMainTodo("Thesis", "Prepare thesis title and chapter 1-3", "2024-06-22", "HIGH", false).mainTodoObject());
  mainTodos.school.push(createMainTodo("Add Course", "Add 3 more units to next sem target courses", "2024-06-27", "HIGH", false).mainTodoObject());
}
//Create project tabs initially parsed or created
createProjectTab (mainTodos);


let mainPanelWindow = null;
let activeProjectCategoryTab = null;
const projectTabIsActivePattern = new RegExp("projects", 'i');
/*MAIN PANEL*/
//Render home summary upon open of page
mainPanelOpen.homeSummary();
mainPanelHomeBtn.classList.add('main-panel-menu-active');
//adding event listener to main nav bar
mainPanelNavigationBtns.forEach(function(mainPanelNavigationBtn, index) {
  mainPanelNavigationBtn.addEventListener("click", function() {
    //To know which tab is active
      mainPanelWindow = mainPanelNavigationBtn.textContent;
      //console.log(mainPanelWindow);
      //to clear -active class on project tab category
      const projectCategoryTabs = document.querySelectorAll(".main-panel-menu-projects-item");
      if (mainPanelWindow == "MY HOME") {
        console.log(mainPanelWindow+" menu active again");
        /*try {
            //put removeEventListener here to prevent redundant eventlisters for editDialog
          } finally {*/
          //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
          if (!mainPanelHomeBtn.classList.add('main-panel-menu-active') && 
              (mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
              mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
              mainPanelNoteBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelHomeBtn.classList.add('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
              }
              mainPanelOpen.homeSummary();
              //to clear -active class on project tab category
              projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
              });
        //}
      } else if (mainPanelWindow == "TODAY") {
          console.log(mainPanelWindow+" menu active");
          /*try {
            //put removeEventListener here to prevent redundant eventlisters for editDialog
          } finally {*/
            //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
            if (!mainPanelTodayBtn.classList.add('main-panel-menu-active') && 
              (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
              mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
              mainPanelNoteBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelTodayBtn.classList.add('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
              }
              mainPanelOpen.todo();
              renderTodos (mainPanelWindow, mainTodos);
              projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
              });
          //}
      } else if (mainPanelWindow == "WEEK") {
          console.log(mainPanelWindow+" menu active");
          /*try {
            //put removeEventListener here to prevent redundant eventlisters for editDialog
          } finally {*/
              //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
              if (!mainPanelWeekBtn.classList.add('main-panel-menu-active') && 
              (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
              mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
              mainPanelNoteBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelWeekBtn.classList.add('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
              }
              mainPanelOpen.todo();
              renderTodos (mainPanelWindow, mainTodos);
              projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
              });
            //}
      } else if (mainPanelWindow.match(projectTabIsActivePattern)) {
        console.log("Projects menu tab is active");
        //let projectCategoryTabs = document.querySelectorAll(".main-panel-menu-projects-item");
        //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
        if (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
          mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
          mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
          mainPanelNoteBtn.classList.contains('main-panel-menu-active')) {
          mainPanelHomeBtn.classList.remove('main-panel-menu-active');
          mainPanelTodayBtn.classList.remove('main-panel-menu-active');
          mainPanelWeekBtn.classList.remove('main-panel-menu-active');
          mainPanelNoteBtn.classList.remove('main-panel-menu-active');
        }
        
      } else if (mainPanelWindow == "MY NOTES") {
          console.log(mainPanelWindow+" menu active");
          /*try {
            //put removeEventListener here to prevent redundant eventlisters for editDialog
          } finally {*/
              //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
              if (!mainPanelNoteBtn.classList.add('main-panel-menu-active') && 
              (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
              mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
              mainPanelWeekBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelNoteBtn.classList.add('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
              }
              mainPanelOpen.notes();
              projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
              });
            //}
      } else {
          console.log("No main panel menu assigned to clicked navigation button");
      }
      return mainPanelWindow;
  });
});
  
/*DIALOG PANEL*/
//dialog function to add todo, project and note
openCreate.addEventListener("click", () => {
  console.log(mainPanelWindow+" main panel is detected");
  dialogCreateNew.showModal();
    console.log("Dialog is open");
    //initially making TODO nav button active
    dialogPopupOpen.renderCreateTodoDialog();
    dialogAddTodoBtn.classList.add('create-new-menu-active');
    //add button for close (OPTIONAL-default is esc button)
    const cancelAddBtn = document.querySelector("#cancel-create-todo");
    cancelAddBtn.addEventListener("click", cancelAdd);
    //event listener to process inputs
    dialogCreateNewForm.addEventListener("submit", submitTodo);
    
    //adding event listener to dialog nav bar
    dialogNavigationBtns.forEach(function(dialogNavigationBtn, index) {
      dialogNavigationBtn.addEventListener("click", function() {
          let dialogWindow = dialogNavigationBtn.textContent;
          if (dialogWindow == "TO-DO") {
              console.log(dialogWindow+" menu active again");
              try {
              dialogCreateNewForm.removeEventListener('submit', submitTodo);
              dialogCreateNewForm.removeEventListener('submit', submitProject);
              dialogCreateNewForm.removeEventListener('submit', submitNote);
              } finally {
                //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                if (!dialogAddTodoBtn.classList.add('create-new-menu-active') && 
                (dialogAddProjectBtn.classList.contains('create-new-menu-active')||
                dialogAddNoteBtn.classList.contains('create-new-menu-active'))) {
                  dialogAddTodoBtn.classList.add('create-new-menu-active');
                  dialogAddProjectBtn.classList.remove('create-new-menu-active');
                  dialogAddNoteBtn.classList.remove('create-new-menu-active');
                }
                dialogPopupOpen.renderCreateTodoDialog();
                
                //add button for close (OPTIONAL-default is esc button)
                const cancelAddBtn = document.querySelector("#cancel-create-todo");
                cancelAddBtn.addEventListener("click", cancelAdd);
                //event listener to process inputs
                dialogCreateNewForm.addEventListener("submit", submitTodo);
                
              }
          } else if (dialogWindow == "PROJECT") {
              console.log(dialogWindow+" menu active");
              try {
                dialogCreateNewForm.removeEventListener('submit', submitTodo);
                dialogCreateNewForm.removeEventListener('submit', submitProject);
                dialogCreateNewForm.removeEventListener('submit', submitNote);
              } finally {
                //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                if (!dialogAddProjectBtn.classList.add('create-new-menu-active') && 
                (dialogAddTodoBtn.classList.contains('create-new-menu-active')||
                dialogAddNoteBtn.classList.contains('create-new-menu-active'))) {
                  dialogAddProjectBtn.classList.add('create-new-menu-active');
                  dialogAddTodoBtn.classList.remove('create-new-menu-active');
                  dialogAddNoteBtn.classList.remove('create-new-menu-active');
                }
                dialogPopupOpen.renderCreateProjectDialog();
                //add button for close (OPTIONAL-default is esc button)
                const cancelAddBtn = document.querySelector("#cancel-create-project");
                cancelAddBtn.addEventListener("click", cancelAdd);
                //event listener to process inputs
                dialogCreateNewForm.addEventListener("submit", submitProject);
              }
          } else if (dialogWindow == "NOTE") {
              console.log(dialogWindow+" menu active");
              try {
                dialogCreateNewForm.removeEventListener('submit', submitTodo);
                dialogCreateNewForm.removeEventListener('submit', submitProject);
                dialogCreateNewForm.removeEventListener('submit', submitNote);
                } finally {
                  //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                  if (!dialogAddNoteBtn.classList.add('create-new-menu-active') && 
                  (dialogAddProjectBtn.classList.contains('create-new-menu-active')||
                  dialogAddTodoBtn.classList.contains('create-new-menu-active'))) {
                    dialogAddNoteBtn.classList.add('create-new-menu-active');
                    dialogAddProjectBtn.classList.remove('create-new-menu-active');
                    dialogAddTodoBtn.classList.remove('create-new-menu-active');
                  }
                  dialogPopupOpen.renderCreateNoteDialog();
                  //add button for close (OPTIONAL-default is esc button)
                  const cancelAddBtn = document.querySelector("#cancel-create-note");
                  cancelAddBtn.addEventListener("click", cancelAdd);
                  //event listener to process inputs
                  dialogCreateNewForm.addEventListener("submit", submitNote);
                }
          } else {
              console.log("No dialog menu assigned to clicked navigation button");
          }
      });
      
    });
});

