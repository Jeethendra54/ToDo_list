const form = document.querySelector('form');
const AddTodo = document.getElementById('AddTodo');
const ul = document.querySelector('ul');

form.addEventListener('submit',e=>{

    e.preventDefault(); // prevent page to submit after click ENTER/Add

    const todo = AddTodo.value.trim(); //removing extra spaces from user input

    // Appending ToDo
    ul.innerHTML +=`<li><span>${todo}</span><i class="fa fa-trash-o"></i></li>`;

    // clearing input after appending ToDo
    AddTodo.value = '';
    // form.reset()   
})


ul.addEventListener('click',e=>{
    if(e.target.classList.contains('fa-trash-o')){
        
        // deleting ToDo
        console.log(e.target.parentElement)
        e.target.parentElement.remove(); 
        // e.target.closest('li').remove();
    }
});
