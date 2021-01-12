import {
  Q, addClass, create, append, setContent, on
} from './Utils.js'

addClass(document.body, 'bg-gray-300')

const app = Q('#app')
addClass(app, 'w-3/4 bg-white mx-auto mt-4 rounded-md p-4')

/**
 * Paradigma: forma de pensar respecto a un tema
 * En programación existen muchos, pero discutiremos 2
 * 🥑 Orientado a objetos: Las entidades del mundo que se percibe se categorizan o modelan de forma abstracta como "clases", de las que se derivan modelos concretos o con valores específicos ("objetos")
 * 🥑 Funcional: Las entidades del mundo que se percibe deben ser modeladas de forma matemática a través de una función, la cual es una relación matemática entre dos conjuntos de datos. En otras palabras, la función procesa un conjunto de datos de entrada y devuelve un conjunto de datos (llamados, de salida).
 */

// Modelo de objeto primitivo y concreto en JS
const tel = {
  precio: 10,
  ram: 0,
  modelo: 'unonu',
  tamano: 'pequeño',
  tieneCamara: false
}

/* Forma 1: Tradicional en ES5 (usa una función como clase) */
function TelefonoES5(precio, ram, almacenamiento, modelo, tieneCamara) {
  //Atributos de clase o características
  this.precio = precio
  this.ram = ram
  this.almacenamiento = almacenamiento
  this.modelo = modelo
  this.tieneCamara = tieneCamara
  this.version = 'ES5' // La clase puede tener atributos por defecto

  //métodos de clase o comportamiento
  this.hacerLlamada = function() {
    alert('ring... desde ' + this.version)
  }

  this.colgarLlamada = function() {
    alert('end... desde ' + this.version)
  }
}

/**
 * Cuando se dice que Javascript es un lenguaje orientado a prototipos, no es cierto, en realidad, se está haciendo referencia al hecho de que todos los objetos en Javascript tienen un objeto en común llamado Prototype (atributo "__proto__") que contiene muchos atributos comunes a todos los objetos en Javascript, sean creados o internos.
 * ATENCIÓN: Hay que tener especial cuidado al modificar el objeto Prototype, ya que cambiará todos los objetos que se creen a partir de esta expresión.
 * Especial cuidado en los objetos internos de Javascript, como Array, String y otros...
 * Una vez modificado el objeto prototype, todos los objetos instanciados tendrán los atributos y los métodos que hayan sido insertados
 */

/* Métodos incorporados a través del objeto prototype */
TelefonoES5.prototype.showModel = function() {
  alert('Modelo ' + this.modelo + ' desde ES5')
}

/* Forma moderna (ES6, internamente escribe una función como clase) */
class TelefonoES6 {
  constructor(precio, ram, almacenamiento, modelo, tieneCamara) {
    this.precio = precio
    this.ram = ram
    this.almacenamiento = almacenamiento
    this.modelo = modelo
    this.tieneCamara = tieneCamara
    this.version = 'ES6'
  }

  hacerLlamada() {
    alert('ring... desde ' + this.version)
  }

  colgarLlamada() {
    alert('end... desde ' + this.version)
  }

}

TelefonoES6.prototype.showModel = function() {
  alert('Modelo ' + this.modelo + ' desde ES6')
}

// La modificación del objeto prototype se realiza ANTES de crear cualquier objeto para que tenga sentido.
const lenovo = new TelefonoES5(100, 4, 64, 'Lenovo', true)
const iphone = new TelefonoES6(1200, 8, 256, 'Apple', true)

/* IGNORAR ESTA PARTE: SOLO ESTILOS Y ELEMENTOS PARA ILUSTRAR EL DOM */
/* Las clases y estilos mostrados acá pertenecen al framework TailwindCSS */
const phoneStyle = 'border-black border-2 m-4 w-36 h-64 rounded-2xl bg-gray-50'

const telefono1 = create(phoneStyle)
const block1 = create('text-4xl font-bold p-2')
const title1 = create('text-bold text-2xl')
setContent(title1, 'ES5')
const call1 = create('bg-green-500 hover:bg-green-400 text-base text-white w-12 py-1 rounded-md mr-4', 'button')
setContent(call1, 'Call')
const end1 = create('bg-red-500 hover:bg-red-400 text-base text-white w-12 py-1 rounded-md', 'button')
setContent(end1, 'End')
const show1 = create('py-1 px-4 w-32 rounded-md text-base text-white bg-indigo-500', 'button')
setContent(show1, 'Show Model')

const telefono2 = create(phoneStyle)
const block2 = create('text-4xl font-bold p-2')
const title2 = create('text-bold text-2xl')
setContent(title2, 'ES6')
const call2 = create('bg-green-500 hover:bg-green-400 text-base text-white w-12 py-1 rounded-md mr-4', 'button')
setContent(call2, 'Call')
const end2 = create('bg-red-500 hover:bg-red-400 text-base text-white w-12 py-1 rounded-md', 'button')
setContent(end2, 'End')
const show2 = create('py-1 px-4 w-32 rounded-md text-base text-white bg-indigo-500', 'button')
setContent(show2, 'Show Model')
/* FIN DEFINICION EN EL DOM */

/* IMPORTANTE: Los métodos son llamados desde el manejador de eventos */
on('click', () => lenovo.hacerLlamada(), call1)
on('click', () => lenovo.colgarLlamada(), end1)
// Este método pertenece al prototype pero está incluído en el objeto
on('click', () => lenovo.showModel(), show1)

on('click', () => iphone.hacerLlamada(), call2)
on('click', () => iphone.colgarLlamada(), end2)
on('click', () => iphone.showModel(), show2)

const telefonos = create('flex')

append(block1, [title1, call1, end1, show1])
append(block2, [title2, call2, end2, show2])
append(telefono1, [block1])
append(telefono2, [block2])
append(telefonos, [telefono1, telefono2])
append(app, [telefonos])
