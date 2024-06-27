document.getElementById('todoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const listitem = document.getElementById('todolist');
  const todoText = listitem.value.trim();
  if (todoText !== '') {
    addTodoText(todoText);
    listitem.value = '';
  }
});

function addTodoText(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(removeButton);
  document.getElementById('todo-list').appendChild(li);
}
