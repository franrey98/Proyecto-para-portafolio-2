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
    todoLabel.htmlFor = 'checkbox';
    todoLabel.addEventListener('click', function(e) {
        if(todoInput.checked) {
            todoInput.checked = false;
            todoTexto.style.textDecoration = 'none';
            todoLabel.classList.remove('activo');
        } else {
            todoInput.checked = true;
            todoTexto.style.textDecoration = 'line-through';
            todoLabel.classList.add('activo')
        }
    });
    todoSpan.textContent = 'X';
    todoSpan.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });
    
    todo.classList.add('todo');
    todoLabel.classList.add('circulo');
    todoSpan.classList.add('cruz');
    
    todo.appendChild(todoInput);
    todo.appendChild(todoTexto);
    todo.appendChild(todoLabel);
    todo.appendChild(todoSpan);
    
    barraCreada.appendChild(todo)
    
    itemsRestantes()
    console.log(todos)
}


function itemsRestantes() {
    const itemLeft = document.querySelector('#itemsLeft');
    const checkbox = document.querySelector('#check');
    const tareasRestantes = todos.length;
    
    itemLeft.innerHTML = tareasRestantes + " Items Left"

    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
           itemLeft.innerHTML = tareasRestantes - 1 + " Items Left"
        } else {
            itemLeft.innerHTML = tareasRestantes + " Items Left"
        }
    });
}
