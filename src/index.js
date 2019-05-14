const formEl = document.querySelector('#create-task-form')
const ul = document.querySelector('#tasks')


function addTask(task) {
  const li = document.createElement('li')
  
    li.innerHTML = `
      <li>${task} <button class='delete-btn'>X</button></li>
    `
    const select = document.querySelector('select')
      if (select.value === "high-priority") {
        li.className = "high-priority"
      }
      if (select.value === "medium-priority") {
        li.className = "medium-priority" 
      }
      if (select.value === "low-priority") {
        li.className = "low-priority"     
      }
    
      ul.append(li)

    const deleteBtn = li.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', function (event) {
      li.remove()
    })
  
}

addTask('running')



  formEl.addEventListener('submit', function(event) {
    event.preventDefault()

    const task = formEl["new-task-description"].value

    addTask(task)
    formEl.reset()

  })
