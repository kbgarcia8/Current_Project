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
//parse on local storage or create empty new todo
/*const mainTodos = JSON.parse(localStorage.getItem('mainTodos')) || {
    "today" : [],
    "week" : [],
}
  
const projectTodos = [];
const notes = [];
  
//create a mock details if no object found on local storage
if (!localStorage.getItem('mainTodos')) { 
//mainTodos.today.push(createMainTodo(inputtedTodoTitle, inputtedTodoDescription, inputtedTodoDueDate, inputtedTodoPriority, inputtedTodoStatus).mainTodoObject());
mainTodos.today.push(createMainTodo("House Chores", "Water the plants, clean the bathroom and make the bed", "2024-05-21", "LOW", false).mainTodoObject());
mainTodos.today.push(createMainTodo("Get Haircut", "", "2024-05-21", "MID", false).mainTodoObject());
mainTodos.today.push(createMainTodo("Javascript Self-Learning", "Continue project: To-do list production testing and incorporate bug fixes if needed", "2024-05-21", "HIGH", false).mainTodoObject());

mainTodos.week.push(createMainTodo("Do Grocery", "Buy 2 canned tuna, 1 carton milk and 2kg chicken", "2024-05-19", "MID", false).mainTodoObject());
mainTodos.week.push(createMainTodo("Laundry", "Deliver laundry at 9AM then pickup at 5:30PM", "2024-05-25", "HIGH", true).mainTodoObject());
mainTodos.week.push(createMainTodo("Doctor's Appointment", "Go to dermatologist appointment, bring medical records", "2024-05-27", "LOW", false).mainTodoObject());
}*/

//set item and send to local storage
//localStorage.setItem("mainTodos", JSON.stringify(mainTodos));
//const mainTodos = JSON.parse(localStorage.getItem('mainTodos'))
//console.log(mainTodos);
//localStorage.removeItem("mainTodos");