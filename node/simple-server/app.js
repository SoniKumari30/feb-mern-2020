//require - import
//node - common js module loader, react - es6 module loader
//const varName = require('packageName')

const http = require('http')
const port = 3033
const server = http.createServer(function(request,  response){
  if(request.url ==='/'){
      response.end('welcome to the website')
  } else if(request.url === '/about'){
      response.end('about us page')
  } else if(request.url === '/users'){
      const users =[
          { id:1, name:'soni'},
          { id:2, name:'kusum'},
          { id:3, name:'sonam'}
      ]
    response.end(JSON.stringify(users))
} else if(request.url === '/sys_time'){
    const time = new Date()
    response.end(JSON.stringify({value:time}))
} else{
    response.end('page you are looking for not found')
}
})
server.listen(port, function(){
    console.log('server is running on port', port)
})