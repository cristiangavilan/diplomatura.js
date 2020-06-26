console.clear();
console.log('******************************************************************');
console.log('index.js');
console.log('******************************************************************');


// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';
// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
console.log('2) Implementar una función que obtenga una universidad por Id:');
console.log('');
const findUniversidadById = (id) => {
    return database.universidades.find(u => u.id === id);
}
console.log('findUniversidadById(1):',findUniversidadById(1));
console.log('findUniversidadById(2):',findUniversidadById(2));
console.log('******************************************************************');

// 3) Implementar una función que obtenga un profesor por Id
console.log('3) Implementar una función que obtenga un profesor por Id');
console.log('');
const findProfesorById = (id) => {
    return database.profesores.find(p => p.id === id);
}
console.log('findProfesorById(1):', findProfesorById(1));
console.log('findProfesorById(2):', findProfesorById(2));
console.log('******************************************************************');
// 4) Implementar una función que obtenga una materia por Id
console.log('4) Implementar una función que obtenga un profesor por Id');
console.log('');
const findMateriaById = (id) => {
    return database.materias.find(m => m.id === id);
}
console.log('findMateriaById(1):', findMateriaById(1));
console.log('findMateriaById(2):', findMateriaById(2));
console.log('******************************************************************');

// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
