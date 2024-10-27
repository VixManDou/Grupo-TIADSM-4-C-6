//Imprtar modulo de express para el servidor
const express = require('express');
const app = express();

//Comunicacion al puerto
const PORT = 3000;
//Esto sirve para que el sevidor procese todas las peticiones en formato json
app.use(express.json());
/*
//Definicion de ruta como peticion
app.get('/api/greet',(req,rest)=>{
    //Esta es la respuesta a la peticon
    rest.json({message: 'Esta es la primer API'});
})

// Iniciar servidor

app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})
*/

//Creacion de listas en formato de arreglo
app.use (express.json());
let estudiantes=[
    {id:1,nombre:'Juan Perez'},
    {id:2,nombre:'Monica Gomez'},
    {id:3,nombre:'Jose Ruiz'},
];
// GET:Obtener todos los estudiantes

app.get('/estudiantes',(req,rest)=>{
    rest.json(estudiantes);
})

//GET: Obtener un estudiante por ID

app.get('/estudiantes/:id', (req,rest)=>{
    const id = parseInt (req.params.id);
    const estudiante = estudiantes.find(e=>e.id===id);
    
    if (estudiante){
        rest.json(estudiante);
    } else {
        rest.status(404).send('Estudiante no encontrado');
    }
})


//POST: Crear una ruta para crear un nuevo estudiante a nuestro arreglo 
// req es un requerimiento
//res es response
//id es un identificador 
//push es agregar 

app.post('/estudiantes', (req,rest)=>{
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre: req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    rest.status(201).json(nuevoEstudiante);
});

app.put('/estudiantes/:id',(req,rest)=>{
    const id=parseInt(req.params.id);
    const estudiante=estudiantes.find(e=>e.id===id);
    if (estudiantes){
        estudiantes.nombre=req.body.nombre;
        rest.json(estudiantes);
    }else{
        rest.status(404).send('Estudiante no encontrado');
    }
});

// Delete: eliminar un item por id
app.delete ('/estudiantes/:id', (req,res) => {
    const id= parseInt(req.params.id);
    const index= estudiantes.findIndex(e => e.id===id);
    if (estudiantes== -1) {
        estudiantes.splice(estudiantes, 1);
        res.send('Estudiante eliminado');
    } else  
        res.status(404).send('Estudiante no encontrado');
    }
);



app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})