const contenedor = document.querySelector('#intDinamico');
const btnAgregar = document.querySelector('#agregarInteresados');

let contador = 1;

btnAgregar.addEventListener('click', e=> {
    let cadaDiv = document.createElement('div');
    cadaDiv.innerHTML = `<label class="form-label">Interesado N° ${contador++}</label> - <input class="form-control" name="nombre[]" placeholder="Escriba el Nombre"></input><button class="col-md-3 col-12 btn btn-secondary btn-sm mb-2" onclick="eliminar(this)">Eliminar</button>`;
    contenedor.appendChild(cadaDiv);
})

/**
 * @param {this} e
 */

const eliminar = (e) => {
    const divPadre = e.parentNode;
    contenedor.removeChild(divPadre);
    actualizarContenedor();
}

const actualizarContenedor = () => {
    let divs = contenedor.children;
    contador = 1;
    for (let i=0; i<divs.length; i++){
        divs[i].children[0].innerHTML = `Interesado N° ${contador++}`;
    }
}

