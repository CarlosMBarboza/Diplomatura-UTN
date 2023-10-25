const alumnos = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 2
  },
  {
    nombre: "Carlos",
    apellido: "rez",
    edad: 6
  },
  {
    nombre: "Cintia",
    apellido: "Deter",
    edad: 8
  },
  {
    nombre: "pedro",
    apellido: "Pez",
    edad: 4
  },
  {
    nombre: "Lujan",
    apellido: "Gonzales",
    edad: 9
  },
]

const alum = alumnos.filter(alumno =>alumno.edad >= 4 )
console.log(alum)

for(let i = 0 ; i < alum.length ; i++){
  document.write(`<li>Niño : ${alum[i].nombre}, cuya edad es ${alum[i].edad} </li>`)
}


