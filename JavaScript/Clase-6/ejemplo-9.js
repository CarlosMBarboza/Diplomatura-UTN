const datosUsuarios = [
  {
    nombre: "Juan",
    apellido: "Perez",
    password: "as1234"
  },
  {
    nombre: "Carlos",
    apellido: "rez",
    password: "as3467"
  },
  {
    nombre: "Cintia",
    apellido: "Deter",
    password: "as1098"
  },
  {
    nombre: "pedro",
    apellido: "Pez",
    password: "as5404"
  },
  {
    nombre: "Lujan",
    apellido: "Gonzales",
    password: "as2389"
  },
]

const soloPas = datosUsuarios.map (p => {
  return p.password;
})
console.log(soloPas);