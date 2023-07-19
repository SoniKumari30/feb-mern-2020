const express = require('express')
const app = express()

//configuration - enable express to parse incoming json data
app.use(express.json())

const port = 3055

/*
syntax - Request Listener
app.httpMethod(url, (req, res) => {

})
*/

app.get('/', (req, res) => {
    res.send('Welcome to the website')
})

//url - /sys_time -> response - 

const users = [ { id:1, name:'jhon'}, { id:2, name:'steve'}]
app.get('/users', (req, res) => {
    res.json(users)

}) 
app.get('/sys_time', (req, res) => {
    const time = new Date()
    res.send(JSON.stringify({value:time}))
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === Number(id) )
    if(user){
        res.json(user)
    }
})


//url - /info
app.get('/info', (req, res) => {
    const httpMethod = req.method
      res.send(`${httpMethod} was received`)
  })
  
  app.post('/info', (req, res) => {
      const httpMethod = req.method
      const data = req.body
      console.log('incoming data', data)
        res.send(`${httpMethod} was received`)
    })
  
    app.put('/info', (req, res) => {
      const httpMethod = req.method
        res.send(`${httpMethod} was received`)
    })
    app.delete('/info', (req, res) => {
      const httpMethod = req.method
        res.send(`${httpMethod} was received`)
    })

    app.post('/profile', (req, res) => {
        const users = [ { position:'developer', prefix:'jr'}]
        const httpMethod = req.method
          res.send(`${httpMethod} was received`)
      })
app.listen(port, () => {
    console.log('server is running on port', port)
})


