//save the functions created here
//re-arrange and compile functions here into one object constructor/class to be imported


class dialogPopupRender {
    todo () {
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
  
      var dialog_todo_node_6 = document.createElement('FORM');
      dialog_todo_node_6.setAttribute('id', 'todo-date-input');
      dialog_todo_node_5.appendChild(dialog_todo_node_6);
  
      var dialog_todo_node_7 = document.createElement('LABEL');
      dialog_todo_node_7.setAttribute('class', 'todo-due-date-title');
      dialog_todo_node_7.setAttribute('for', 'due-date');
      dialog_todo_node_7.textContent = "Due Date: ";
      dialog_todo_node_6.appendChild(dialog_todo_node_7);
  
      var dialog_todo_node_8 = document.createElement('INPUT');
      dialog_todo_node_8.setAttribute('type', 'date');
      dialog_todo_node_8.setAttribute('class', 'todo-due-date-input');
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
      dialog_todo_node_14.setAttribute('name', 'todo-priority');
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
      dialog_todo_node_17.setAttribute('name', 'todo-priority');
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
      dialog_todo_node_5.appendChild(dialog_todo_node_20);
  
      var dialog_todo_node_21 = document.createElement('IMG');
      dialog_todo_node_21.setAttribute('src', './images/check.svg');
      dialog_todo_node_21.setAttribute('alt', 'check-icon');
      dialog_todo_node_20.appendChild(dialog_todo_node_21); 
    }
  
    project () {
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
      dialogPanel.appendChild(dialog_project_node_4);
  
      var dialog_project_node_5 = document.createElement('IMG');
      dialog_project_node_5.setAttribute('src', './images/check.svg');
      dialog_project_node_5.setAttribute('alt', 'check-icon');
      dialog_project_node_4.appendChild(dialog_project_node_5);
  
    }
    note () {
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
      dialog_note_node_4.setAttribute('required', '');
      dialog_note_node_2.appendChild(dialog_note_node_4);
  
      var dialog_note_node_5 = document.createElement('BUTTON');
      dialog_note_node_5.setAttribute('class', 'note-creator');
      dialog_note_node_5.setAttribute('id', 'confirm');
      dialogPanel.appendChild(dialog_note_node_5);
  
      var dialog_note_node_6 = document.createElement('IMG');
      dialog_note_node_6.setAttribute('src', './images/check.svg');
      dialog_note_node_6.setAttribute('alt', 'check-icon');
      dialog_note_node_5.appendChild(dialog_note_node_6);
    }
  }