module.exports.function = function findDrinks (drinkName) {
  drinkName = drinkName.toLowerCase()
  var http = require('http')
  var console = require('console')
  var mungeDrinks = require('./lib/mungeDrinks')
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=' + drinkName, {
    format: 'json'
  })

  return response.drinks.map(mungeDrinks)
}
