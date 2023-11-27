//Va a agregar tareas, va a coger objeto tareas y lo añade aqui a tareasManager, va a hacer todo , modificar elimintar etc..
//Aqui usaremos LOCALSTORAGE
//Importamos ya Tarea para tenerlo listo
// Sale en oscuro porque no hemos creado nada

 import {Tarea} from './tareas.js';
 export class TareasManager{

    //Constructor por parametros una variable que esta en el main
    constructor(listaTareas){
        //Por cada clase creamos uns constructor por parametros y que tenga metodos
        //En este array se almacenan las tareas
        this.arregloTareas = [];
        //Al no tener base de datos le metemos un contador que defina el numero de tareas que defina el array
        this.contador = 0;
        //Este va a almacenar la lista la tareas, almacenara la estructura de cada tarea, almacenara el codigo HTML5
        this.listaTareas = listaTareas;
    }

    //Primero agregamos tareas,hacemos un metodo agregar tareas
    //Le pasamos la descripcion de tarea que viene de tareas.js
    agregarTarea(descripcion){
        //cada vez que agregamos una tarea sumamos +1 al contador
        //Ponemos this porque es una clase, cualquier instancia de esta clase
        this.contandor ++;
        //Antes de meterlo al array hay que crear una tarea, creamos una nueva 
        //Le pasamos por parametro this contador porque es atributo en tarea.js, la descripcion al principio esta vacia
        const nuevaTarea = new Tarea(this.contandor,descripcion);
        //Una vez elevado el contador a 1 y tenemos la instancia de la tarea con su id agregamos la tarea
        this.arregloTareas.push(nuevaTarea);
        //Tenemos que tener un get y set para el contador para almacenar en el LocalStorage
        this.setContador();
        //Necesitamos tambien añadir las tareas al localStorage
        this.setArregloTareas();
        


    }


}
