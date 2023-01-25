const express = require('express')
const app = express()
const PORT = 8000

const rappers ={

   '21 savage':{ 
        'age': 29,
        'birthname':'sheya bin abraham-joseph',
        'birthlocation': 'UK'
    },

    'eminem':{ 
        'age': 40,
        'birthname':'marshall mathers',
        'birthlocation': 'USA'
    },

   
    'dylan':{ 
        'age': 40,
        'birthname':'none',
        'birthlocation': 'india'
    },





}



app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:rapperName',(request,response)=>{
   const x = request.params.rapperName.toLowerCase()

    if(rappers[x]){
        response.json(rappers[x])

    }else{
        response.json(rappers['dylan'])
    }



    
})
app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}'! you better catch it`)
})