import basededatos from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {string} nombreAlumno el id del alumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  //console.log(basededatos.alumnos);
  let retorno = [];
  // Primera resolución
  // basededatos.alumnos.forEach( alumno => {
  //   if(alumno.nombre === nombreAlumno)
  //     {
  //       //console.log(alumno);
  //       basededatos.calificaciones.forEach( calificacion => {
  //         if ((calificacion.alumno === alumno.id) && (calificacion.nota >= 4))
  //            {
  //              //console.log(calificacion)
  //              basededatos.materias.forEach( materia => {
  //                if (materia.id === calificacion.materia) 
  //                 //console.log(materia);
  //                 retorno.push(materia)
  //               });
  //            }
  //       });
  //     }
  // });
  // return retorno;
  // Segunda resolución
  const alumno = basededatos.alumnos.filter( alumno => alumno.nombre === nombreAlumno );
  //console.log(alumno);
  const calificaciones = basededatos.calificaciones.filter( calificacion => (calificacion.alumno === alumno[0].id) && (calificacion.nota >= 4) );
  // console.log(calificaciones);
  calificaciones.forEach( calificacion => {
    retorno.push ( basededatos.materias.find( materia => materia.id === calificacion.materia ) );
  });
  // console.log(retorno);
  return retorno;
};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
    * @param {string} nombreUniversidad
    */

export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
  let resultado = {};
  //resultado.id = 1

  basededatos.universidades.forEach( universidad => {
    if (universidad.nombre === nombreUniversidad) {
      resultado = {...universidad}
    };
    
    resultado = {
      ...resultado,
      materias: basededatos.materias.filter( (materia) => {
        if (materia.universidad === resultado.id) {
          materia.profesores = [];
          return materia;
        }
      }),
      profesores: basededatos.profesores.filter((profesores) =>{
        if(profesores.id === 1){
          return profesores;
        }
      })
    }
    
   
  }); 
 
  //     basededatos.materias.forEach( materia => {
  //       if (materia.universidad === universidad.id) {
  //         //console.log(materia);
  //         // resultado.materias.push(materia)
  //       }
  //     })
  // console.log(resultado);
  
  return resultado;
};

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
// export const promedioDeEdad = () => {
//   return [];
// };

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
// export const alumnosConPromedioMayorA = (promedio) => {
//   return [];
// };

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
// export const materiasSinAlumnosAnotados = () => {
//   return [];
// };

// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
// export const promedioDeEdadByUniversidadId = (universidadId) => {
//   return [];
// };
