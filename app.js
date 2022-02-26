// Variables
const textoInput = document.querySelector("#textoInput");
const sol = document.querySelector('#sol');
let todos = [];

// Eventos
eventListeners();
function eventListeners() {
    sol.addEventListener('click', cambiarModoIluminado)
    textoInput.addEventListener('keyup', enviarInput)
}

// Funciones

function cambiarModoIluminado() {
    // Imagen bg
    const fondoPaisaje = document.querySelector('#fondo');
    fondoPaisaje.classList.toggle('fondo-paisaje');
    fondoPaisaje.classList.toggle('fondo-luz');

    // Fondo
    document.body.classList.toggle('fondo-solido');
    document.body.classList.toggle('luz');
    
    // Input 
    textoInput.classList.toggle('estilo-input');
    textoInput.classList.toggle('input-blanco');

    // Barra 
    const informacionBarra = document.querySelector('#informacionBarra');
    informacionBarra.classList.toggle('barra');
    informacionBarra.classList.toggle('barra-blanca');

    // Icono 
    const sol = document.querySelector('#sol');
    sol.classList.toggle('estilo-sol');
    sol.classList.toggle('estilo-luna');
}

function enviarInput(e) {
    if(e.key === 'Enter' || e.keyCode  === 13) {
    todos.push(e.target.value);
    nuevoTodo(e.target.value)
    textoInput.value = '';
    itemsRestantes()
}
}

function nuevoTodo(value) {
    const barraCreada = document.querySelector('#barraCreada');

    const todo = document.createElement('div');
    const todoInput = document.createElement('input');
    const todoTexto = document.createElement('p');
    const todoLabel = document.createElement('label');
    const todoSpan = document.createElement('span');

    todoTexto.textContent = value;
    todoTexto.classList.add('parrafo-creado')
    
    todoInput.type = 'checkbox';
    todoInput.name = 'checkbox';
    todoInput.id = 'check';
    
    todoSpan.textContent = 'X';
    todoSpan.classList.add('cruz');
    
    todo.classList.add('todo');

    todoSpan.addEventListener('click', function(e) {
        e.target.parentElement.remove();
        todos.pop();
        itemsRestantes()
    });

    todoInput.addEventListener('change', function(){
        if(this.checked === true) {
            todos.pop();
            itemsRestantes()
        } else {
            todos.push('algo')
            itemsRestantes();
        }
    })


    todo.appendChild(todoInput);
    todo.appendChild(todoTexto);
    todo.appendChild(todoLabel);
    todo.appendChild(todoSpan);
    
    barraCreada.appendChild(todo)   
}


function itemsRestantes() {
    const itemLeft = document.querySelector('#itemsLeft');
    const tareasRestantes = todos.length;
    
    itemLeft.innerHTML = tareasRestantes + " Items Left"
}
