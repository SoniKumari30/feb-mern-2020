const user =
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  function details(user){
     // const username = user.username, email = user.email, city = user.address.city, lat = user.address.geo.lat, lng = user.address.geo.lng, company =user.company.name
      //return `${username} - ${email} - ${city} (${lat}, ${lng}) - ${user.company.name}`

//          }
      return `${user.username} - ${user.email} - ${user.address.city} (${user.address.geo.lat}, ${user.address.geo.lng}) - {user.company.name}`
  }
          
      console.log(details(user)) //'Bret - Sincere@april.biz - Gwenborough (-37.3159, 81.1496) - Romaguera-Crona'
