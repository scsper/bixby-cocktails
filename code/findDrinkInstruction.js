module.exports.function = function findDrinkInstruction (drinkName) {
  drinkName = drinkName.toLowerCase()
  drinkName = drinkName.replace(/[ ]/g, '_')

  var http = require('http')
  var console = require('console')
  var mungeDrinks = require('./lib/mungeDrinks')
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=' + drinkName, {
    format: 'json'
  })
  
  return response.drinks.map(mungeDrinks)[0].instructions
}
