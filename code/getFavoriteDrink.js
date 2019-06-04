module.exports.function = function getFavoriteDrink (personName) {
  var http = require('http')
  var console = require('console')
  var mungeDrinks = require('./lib/mungeDrinks')

  personName = personName.toLowerCase()
  
  // if the person's name starts with something
  // do a specific query
  if (personName.startsWith('julien')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17196', {
      format: 'json',
      cacheTime: 0
    })
    
    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('scott')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001', {
      format: 'json',
      cacheTime: 0
    })
    
    return response.drinks.map(mungeDrinks)
  }
  
  // otherwise, do a random drink
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
    format: 'json',
    cacheTime: 0
  })

  return response.drinks.map(mungeDrinks)
}
