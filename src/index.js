document.addEventListener("DOMContentLoaded", () => {
   const form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset()
   })
})

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = 'x';
  p.textContent = `${todo} `;
  document.querySelector('#list').appendChild(p);
  p.appendChild(btn);
  btn.addEventListener('click', handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}