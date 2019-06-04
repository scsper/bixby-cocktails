module.exports.function = function getPopularDrink () {
  var http = require('http')
  var console = require('console')
  var mungeDrinks = require('./lib/mungeDrinks')
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/popular.php', {
    format: 'json',
    cacheTime: 0
  })

  return response.drinks.map(mungeDrinks)
}
