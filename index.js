//  const http= require('http')

//  const server = http.createServer((req,res)=>{
//      res.status= 200;
//      res.setHeader('Content-Type','text/plain')
//      res.end('Hello World')
//  })

//  server.listen(5000, ()=>{
//      console.log("Servidor conectado en puerto 5000")
//  })

const express = require('express')
const app = express()
// app.use(express.json())
//Inicio de rutas
// app.get('/', (req,res)=>{
//     res.send('Hola mundo')
// })

// app.get('/about', (req,res)=>{
//     res.send('Hola soy un about')
// })

// app.get('/forms', (req,res)=>{
//     res.send('Hola soy un Form')
// })

// Tipos de rutas
// app.get('/about',(req,res) =>{
//     res.json({
//         username: 'Eltacos',
//         lastname: 'Orozco'
//     })
// })


// app.post('/about',(req,res) =>{
//     console.log(req.body)
//     res.send('Petición recibida')
// })

// app.put('/about', (req,res)=>{
//     res.send('Petición actualizada')
// })

// app.delete('/about', (req,res)=>{
//     res.send('Petición borrada')
// })

//Rutas dinamicas
// app.post('/about/:id', (req,res) =>{
//     console.log(req.body)
//     console.log(req.params)
//     res.send('La petición ha sido recibida')
// })

// app.delete('/about/:id', (req,res) =>{
//     console.log(req.body)
//     res.send(`Usuario ${req.params.id} eliminado`)
// })

// app.put('/about/:id', (req,res) =>{
//     console.log(req.body)
//     res.send(`Usuario ${req.params.id} actualizado`)
// })

//Middleware- Falta por terminar
 function logear(req,res,next){
    console.log('Hola, estoy aqui')
    next()
 }
 
 app.use(logear)
 app.use(express.json())
 app.post('/about/:id', (req,res) =>{
    console.log(req.body)
    console.log(req.params)
    res.send('La petición ha sido recibida')
})

app.delete('/about/:id', (req,res) =>{
    console.log(req.body)
    res.send(`Usuario ${req.params.id} eliminado`)
})

app.put('/about/:id', (req,res) =>{
    console.log(req.body)
    res.send(`Usuario ${req.params.id} actualizado`)
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Conectado al puerto ${PORT}`)
})




