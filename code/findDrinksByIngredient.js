module.exports.function = function findDrinksByIngredient (drinkIngredient) {
  drinkIngredient = drinkIngredient.toLowerCase()
  var http = require('http')
  var console = require('console')
  var mungeDrinks = require('./lib/mungeDrinks')
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=' + drinkIngredient, {
    format: 'json'
  })

  var drinks = response.drinks
  
  return drinks.slice(0, 10).map(function (drink) {
    var fullDrinkResponse = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/lookup.php?i=' + drink.idDrink, {
      format: 'json'
    })

    return mungeDrinks(fullDrinkResponse.drinks[0])
  })
}