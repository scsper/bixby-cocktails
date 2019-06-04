module.exports = function (drink) {
    var ingredientsArr = []
    var measurementsArr = []
    
    for (var i = 1; i < 16; i++) {
      ingredientsArr.push(drink['strIngredient' + i])
      measurementsArr.push(drink['strMeasure' + i])
    }
    
    ingredientsArr = ingredientsArr.filter(function (ingredient) {
      return !!ingredient
    })
    
    measurementsArr = measurementsArr.filter(function (measurement) {
      return !!measurement
    })
    
    var ingredients = []
    
    for (var i = 0; i < ingredientsArr.length; i++) {
      var fullIngredientDescription = ingredientsArr[i]

      if (measurementsArr[i]) {
        fullIngredientDescription = measurementsArr[i] + ' ' + ingredientsArr[i]
      } 
      
      ingredients.push({
        ingredient: ingredientsArr[i],
        measurement: measurementsArr[i],
        fullIngredientDescription: fullIngredientDescription
      })
    }
    
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      instructions: drink.strInstructions,
      thumbnail: drink.strDrinkThumb,
      ingredients: ingredients
    }
  }