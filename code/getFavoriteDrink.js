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
  
  if (personName.startsWith('scott') || personName.startsWith('andy') || personName.startsWith('joe')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001', {
      format: 'json',
      cacheTime: 0
    })
    
    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('kelly')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13621', {
      format: 'json',
      cacheTime: 0
    })
    
    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('adonis')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000', {
      format: 'json',
      cacheTime: 0
    })
    
    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('bruce')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17266', {
      format: 'json',
      cacheTime: 0
    })

    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('jennifer')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11403', {
      format: 'json',
      cacheTime: 0
    })

    return response.drinks.map(mungeDrinks)
  }
  
  if (personName.startsWith('brian')) {
    var response = http.getUrl('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11009', {
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
