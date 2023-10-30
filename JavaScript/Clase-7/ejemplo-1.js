function getDiasForMes(mes){

  if(Number.isNaN(mes)) return false;
  if(mes < 1 || mes > 12) return false;

  mes--
  const data = [
    {
      nombre: 'Enero',
      dias: 31,
    },
    {
      nombre: 'Febrero',
      dias:28
    },
    {
      nombre: 'Marzo',
      dias: 31,
    },
      {
      nombre: 'Abril',
      dias: 30,
    },
    {
      nombre: 'Mayo',
      dias:28
    },
    {
      nombre: 'junio',
      dias: 31,
    },
      {
      nombre: 'Julio',
      dias: 30,
    },
    {
      nombre: 'Agosto',
      dias:28
    },
    {
      nombre: 'Septiembre',
      dias: 31,
    },
      {
      nombre: 'Octubre',
      dias: 30,
    },
    {
      nombre: 'Noviembre',
      dias:28
    },
    {
      nombre: 'Diciembre',
      dias: 31,
    },
  ]
  return data[mes];
    
}

const numMes = parseInt(prompt('Ingresar mes'))