// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
 const express = require ('express');
 const BolosRoute = require ('./routes/BolosRoute')
 const app = express();
 const HOST = '127.0.0.1';
 const PORT = 3000;

 app.use(express.json())
 app.use(BolosRoute)
 
 app.get('/', (req , res) => {
    res.send('Hello world!');
})
app.listen(PORT, HOST, () => {
    console.log(`Servidor escutando em http://${HOST}: ${PORT}`)
})