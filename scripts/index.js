
class Activity {
    constructor(idDeCadaActividad, title, description, imgUrl) {
        this.idDeCadaActividad = idDeCadaActividad;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.idGuia = 0;
    }

    createActivity(title, description, imgUrl) {
        const idAInsertarEnCadaActividad = ++this.idGuia
        const newActivity = new Activity(idAInsertarEnCadaActividad, title, description, imgUrl);
        this.activities.push(newActivity); // Agregar la nueva actividad al arreglo
    }
    
    getAllActivities() {
        return this.activities; // Devolver el arreglo de actividades
    }

    deleteActivity(idABorrar) {
        this.activities = this.activities.filter(activity => activity.idDeCadaActividad !== idABorrar);
    }
}

const repositorio1 = new Repository();

// console.log(repositorio1)
// repositorio1.createActivity('Tenis', 'El Tenis es agradable', 'img:Tenis');
// repositorio1.createActivity('Basket', 'El Basket es agradable', 'img:Basket');
// repositorio1.createActivity('Rugby', 'El Rugby es agradable', 'img:Rugby');



// 4. Seleccionar el botón

// *Revisar (y usar) el método MAP y retorne la tarjeta

// 5. HANDLER --> Cuando se ejecute la función 

// - Tome los valores de los inputs
// - Checkear que los valores tengan algo ("") ... si a algun input le falta, disparar un alert()

const buttonAgregar = document.getElementById("button-agregar");


//Funcion CB para el boton de agregar tarjeta
const cbButtonAgregar = () => {

    const inputTitleValue = document.getElementById("input-title").value;
    const inputDescriptionValue = document.getElementById("input-description").value;
    const inputImagenUrlValue = document.getElementById("input-imagen-url").value;

    // Primera revisión: Que no hayan espacios vacíos
    //if (inputTitleValue != "" && inputDescriptionValue != "" && inputImagenUrlValue != "") {
    if (true) {    
        repositorio1.createActivity(inputTitleValue, inputDescriptionValue, inputImagenUrlValue);

        
        // Selecciona la sección contenedor-tarjetas
        const contenedorTarjetas = document.querySelector('.contenedor-tarjetas');

        // Crear la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        
        // Crear el contenido de la tarjeta
        const contenido = document.createElement('div');
        contenido.classList.add('contenido');
        
        // Crear la imagen
        const imagen = document.createElement('img');
        imagen.src = `${inputImagenUrlValue}`;
        imagen.alt = 'Imagen 1';
        
        // Crear el título de la tarjeta
        const tituloTarjeta = document.createElement('h2');
        tituloTarjeta.classList.add('titulo-tarjeta');
        tituloTarjeta.textContent = `${inputTitleValue}`;

        // Crear la descripción de la tarjeta
        const descripcionTarjeta = document.createElement('p');
        descripcionTarjeta.classList.add('description-card');
        descripcionTarjeta.textContent = `${inputDescriptionValue}`;

        // Agregar la imagen al contenido de la tarjeta
        contenido.appendChild(imagen);

        // Agregar el título y la descripción al contenido de la tarjeta
        contenido.appendChild(tituloTarjeta);
        contenido.appendChild(descripcionTarjeta);

        // Agregar el contenido a la tarjeta
        tarjeta.appendChild(contenido);

        // Agregar la tarjeta a la sección contenedor-tarjetas
        contenedorTarjetas.appendChild(tarjeta);

        document.getElementById("input-title").value = "";
        document.getElementById("input-description").value = "";
        document.getElementById("input-imagen-url").value = "";

        
        const sectionContenedorTarjetas = document.getElementsByClassName('contenedor-tarjetas')[0];
        

        //Funcion para eliminar tarjeta
        const eliminarTarjeta = () => {
            // repositorio1.deleteActivity(1)
            // console.log(sectionContenedorTarjetas)
            sectionContenedorTarjetas.removeChild(tarjeta)
        }
        

        tarjeta.addEventListener("click", (event) => {
            console.log(event.target)
        })

        //Eliminar tarjeta
        tarjeta.addEventListener("click", eliminarTarjeta)


    } else {
        alert('Hay registros pendientes. Por favor complete la información')
    }
    
    /*
    if (inputTitleValue == "") {
        alert('Falta el titulo de la actividad')    
    } else if (inputDescriptionValue == "") {
            alert('Falta la descripción de la actividad')
    } else if(inputImagenUrlValue == "") {
            alert('Falta la url de la imagen')
    } else if (inputTitleValue == "" || inputDescriptionValue == "" || inputImagenUrlValue == "") {
        alert('Faltan datos por ingresar')
    }*/


}

buttonAgregar.addEventListener("click", cbButtonAgregar);










