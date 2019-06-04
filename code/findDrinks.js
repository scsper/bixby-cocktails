module.exports.function = function findDrinks (drinkName) {
  var http = require('http')
  var console = require('console')
  var response = http.getUrl('https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=' + drinkName, {
    format: 'json'
  })

  var drinks = response.drinks
  
  return drinks.map(function (drink) {
    var ingredientsArr = []
    var measurementsArr = []
    
    for (var i = 1; i < 16; i++) {
      ingredientsArr.push(drink['strIngredient' + i])
      measurementsArr.push(drink['strMeasure' + i])
    }
    
    ingredientsArr = ingredientsArr.filter(function (ingredient) {
      return ingredient !== ''
    })
    
    measurementsArr = measurementsArr.filter(function (measurement) {
      return measurement !== ''
    })
    
    var ingredients = []
    
    for (var i = 0; i < ingredientsArr.length; i++) {
      ingredients.push({
        ingredient: ingredientsArr[i],
        measurement: measurementsArr[i]
      })
    }
    
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      instructions: drink.strInstructions,
      thumbnail: drink.strDrinkThumb,
      ingredients: ingredients
    }
  })
}
