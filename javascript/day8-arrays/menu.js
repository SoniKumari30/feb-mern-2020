const menu = [
    {id:1, name:'chilly chiken', veg:false },
    {id:2, name:'chilly panner', veg:true },
    {id:3, name:'chiken biryani', veg:false },
    {id:4, name:'mushroom biryani', veg:true }
]
function filterVeg(menu){
    const result = menu.filter(function(item){
        return item.veg

    })
    return result
}
console.log(filterVeg(menu))

function search(menu, term){
    const result = menu.filter(function(item){
        return item.name.includes(term)

    })
    return result
}
console.log(search(menu,'ch'))