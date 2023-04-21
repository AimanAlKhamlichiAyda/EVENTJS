
//EJERCICIO-1
function mostrarTexto() {
    const textoIngresado = document.getElementById('input-text').value;
    const textoMostrado = document.getElementById('texto-mostrado');
    textoMostrado.innerText = textoIngresado;
}

//EJERCICIO-2
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const mensajeError = document.getElementById('mensaje-error');
    if (nombre === '') {
        mensajeError.style.display = 'block';
        return false;
    } else {
        mensajeError.style.display = 'none';
        return true;
    }
}
//EJERCICIO-3
function crearBotones() {
    const numeroIngresado = document.getElementById('input-numero').value;
    const botones = document.getElementById('botones');
    botones.innerHTML = '';
    for (let i = 1; i <= numeroIngresado; i++) {
        const boton = document.createElement('button');
        boton.innerText = i;
        if (i % 2 === 0) {
            boton.style.backgroundColor = 'blue';
        } else {
            boton.style.backgroundColor = 'green';
        }
        if (i % 10 === 0) {
            boton.style.backgroundColor = 'red';
        }
        botones.appendChild(boton);
    }
}

//EJERCICIO-4
const usuarios = [];

function agregarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const edad = document.getElementById('edad').value;
    const usuario = {
        nombre,
        email,
        contraseña,
        edad
    };
    usuarios.push(usuario);
    mostrarUsuarios();
}

function mostrarUsuarios() {
    const usuariosDiv = document.getElementById('usuarios');
    usuariosDiv.innerHTML = '';
    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Contraseña:</strong> ${usuario.contraseña}</p>
        <p><strong>Edad:</strong> ${usuario.edad}</p>
        <hr>
      `;
        usuariosDiv.appendChild(usuarioDiv);
    });
}



//EJERCICIO-5
const inputDiv = document.getElementById('input-div');
const clearBtn = document.getElementById('clear-btn');
let texto = '';

document.addEventListener('keydown', function (event) {

    if (/^[a-z]$/i.test(event.key)) {
        texto += event.key;
        inputDiv.innerHTML = texto;
    }
});

clearBtn.addEventListener('click', function () {
    texto = '';
    inputDiv.innerHTML = texto;
});





