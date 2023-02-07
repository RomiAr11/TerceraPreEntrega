//Condicional para saber si es estudiante de este colegio 
let preguntaColegio = prompt("Usted asiste al IDFS. Responda si o no ")
console.log(preguntaColegio)
if (preguntaColegio == "si") [
    console.log("Bienvenido a la pagina, usted es estudiante")
]
if(preguntaColegio == "no") [
    console.log("Usted no es alumno")
]

let preguntaNombre = prompt("Ingrese su nombre y apellido")
let nombre = preguntaNombre
function saludarAlumno (saludarAlumno){
    console.log(`Hola alumno/a ${nombre}`)
}


const arrayNombres = ["Juana", "Pepita", "Juan", "Aimara"]
console.log(arrayNombres)

class materia {
    constructor(Nombre, Profesor, Dia, Promedio) {
        this.Nombre = Nombre,
            this.Profesor = Profesor,
            this.Dia = Dia,
            this.Promedio = Promedio
    }

    mostrarInfoMateria() {
        console.log(`El nombre de la materia es ${this.Nombre}, el profesor es ${this.Profesor}, la cursas el dia ${this.Dia} y el promedio es ${this.Promedio}`)
    }
}

const materia1 = new materia("Matematica", "Juana", "Martes", 10)

const materia2 = new materia("Plastica", "Pepito", "Jueves", 5)

const libreta = [materia1, materia2]
console.log(libreta)



function Promedio(){let CantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))
let total = 0 
for(let i = 1; i <=CantidadNotas; i++){
    let nota = parseInt(prompt("ingrese nota"))
    total = total + nota 
    console.log(`el total es ${total}`)
}
let promedio = total / CantidadNotas
console.log(`el promedio es ${promedio}`)

}




function materias() {
    let PreguntaMateria = prompt("Ingrese nombre de la materia")
    let PreguntaProfesor = prompt("Ingrese nombre del/la profesor/a")
    let PreguntaDiaCursada = prompt("Que dias la cursas")
    let PreguntaPromedio = parseInt(prompt("Ingrese promedio"))
    console.log(`La materia ingresada es ${PreguntaMateria} dictada por el/la profesor/a ${PreguntaProfesor}, la cursas el dia ${PreguntaDiaCursada} y el promedio es ${PreguntaPromedio}`)

    console.log(`La materia es ${PreguntaMateria}, el profesor es ${PreguntaProfesor}, la cursas el dia ${PreguntaDiaCursada} y el promedio es ${PreguntaPromedio}`)

    const MateriaNueva = new materia( PreguntaMateria, PreguntaProfesor, PreguntaDiaCursada, PreguntaPromedio)


//Agregarlo a la estanteria
    libreta.push(MateriaNueva)
    MateriaNueva.mostrarInfoMateria()
    console.log(libreta)
}


Promedio()
materias()
saludarAlumno(nombre)

//Find

function ProfesorBuscado(){
    prompt ("Ingrese nombre del profesor")
let ProfesorEncontrado = libreta.find((Profesor)=> Profesor.Profesor == ProfesorBuscado)

if (ProfesorEncontrado == undefined){
    console.log(`No tenes clases con ${ProfesorBuscado}`)
}
else{
    console.log(ProfesorEncontrado)
}
} 



//Buscar

let TituloDOM = document.getElementById("Titulo")
console.log(TituloDOM)

function MateriaBuscada () {prompt(`Ingrese el nombre de la materia buscada`)
let buscarMateria = libreta.filter((materia)=> materia.Nombre.toLowerCase() == MateriaBuscada.toLocaleLowerCase())
console.log(buscarMateria) }

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar materia
           2 - Buscar profesores
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                materias(libreta)
            break
            case 2:
                
                ProfesorBuscado(libreta)
            break
            case 0:
                console.log("gracias por utilizar nuestra app")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}




let botonsemantico = document.getElementById ("Semantico")
botonsemantico.onclick = menu

localStorage.setItem("Buenos dias", "Tutor")

localStorage.setItem("Libreria", JSON.stringify(libreta))
console.log(libreta)





