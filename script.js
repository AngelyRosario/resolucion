const contenedor = document.querySelector('#intDinamico');
const btnAgregar = document.querySelector('#agregarInteresados');

let contador = 1;

btnAgregar.addEventListener('click', e=> {
    let cadaDiv = document.createElement('div');
    cadaDiv.innerHTML = `<div class="row"><div class="col-md-3 col-12 p-1"><label class="form-label">Interesado N° ${contador++}</label></div><div class="col-md-6 col-12 p-1"><input class="form-control" name="nombre[]" placeholder="Escriba el Nombre"></input></div><div class="col-md-3 col-12 p-1 d-md-flex justify-content-md-end"><button class="btn btn-secondary btn-sm mb-2" onclick="eliminar(this)">Eliminar</button></div></div>`;
    contenedor.appendChild(cadaDiv);
})

/**
 * @param {this} e
 */

const eliminar = (e) => {
    const divPadre = e.parentNode;
    const divPadredelPadre = divPadre.parentNode;
    const divPadredelPadredelPadre = divPadredelPadre.parentNode;
    contenedor.removeChild(divPadredelPadredelPadre);
    actualizarContenedor();
}

const actualizarContenedor = () => {
    let divs = contenedor.children;
    let divs_menor = divs.children;
    contador = 1;
    for (let i=0; i<divs_menor.length; i++){
        divs_menor[i].children[0].innerHTML = `Interesado N° ${contador++}`;
    }
}

