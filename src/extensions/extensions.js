// 1. To help Phil keep track of his baking time, create a function named
// timerStatus that accepts one parameter:
// - the remaining minutes left on a timer
// The function must return "Phil's cake is ready!" if the remaining minutes is 0,
// "The cake is still baking!" if there are any remaining minutes left,
// or "You didn't set a timer!" if no value is provided to the parameter

function timerStatus(rTime) {
  if (rTime === 0) {
    return "Phil's cake is ready!"
  } else if (rTime > 0) {
    return 'The cake is still baking!'
  } else {
    return "You didn't set a timer!"
  }
}

console.log(timerStatus(20))

// 2. To help Phil prepare ahead of time, create a function named estimatePrepTime
// that accepts two parameters:
// - an array of ingredients (e.g. ["sugar", "milk", "flour", "eggs"])
// - the prep time per ingredient in minutes
// The function must return the total prep time the cake will require based on the
// number of ingredients provided and the prep time per ingredient.
// If no prep time per ingredient is provided, the function should assume each ingredient
// takes 2 minutes to prepare

function estimatePrepTime(array, prepPerItem) {
  let ingTime = 2

  if (prepPerItem !== undefined) {
    ingTime = prepPerItem
  }

  const prepTime = array.length * ingTime
  return prepTime
}

console.log(estimatePrepTime(['eggs', 'grass', 'mud'], 5))

// 3. Phil needs to know the quantity of milk and eggs to use! Create a function
// named calculateQuantities which accepts two parameters:
// - a list of ingredients
// - how many layers the cake has
// The cake will need 100g of sugar per layer and 2 eggs per layer, if those ingredients are present.
// The function should always return an object with two keys: sugar, eggs
// The values of the keys should be the total amount of sugar and eggs needed for the cake.
// If sugar or eggs are not present in the list of ingredients, the value for the key should be 0
//
// Example:
// calculateQuantities(["sugar", "milk", "eggs"], 2)
// returns: { sugar: 200, eggs: 4 }
//
// calculateQuantities(["milk", "eggs"], 3)
// returns: { sugar: 0, eggs: 6 }

function calculateQuantities(list, layers) {
  const ingredientsNeeded = { sugar: 0, eggs: 0 }

  if (list.indexOf('sugar') !== -1) {
    ingredientsNeeded.sugar = 100 * layers
  }
  if (list.indexOf('eggs') !== -1) {
    ingredientsNeeded.eggs = 2 * layers
  }

  return ingredientsNeeded
}

console.log(calculateQuantities(['eggs', 'sugar'], 5))

// 4. Phil's cake is pretty small and only provides 1 portion. He wants to make a bigger one!
// Create a function named improveRecipe that accepts two parameters:
// - an object where the keys are ingredients and the values are quantities
//      e.g. { eggs: 2, milk: 100, sugar: 250, flour: 160 }
// - the number of portions the cake should provide
//
// The function should return a new object with the same keys as the recipe provided,
// but the values should have updated amounts to make sure the cake provides enough portions.
//
// Example:
// improveRecipe({ eggs: 2, milk: 100, sugar: 200 }, 3)
// returns: { eggs: 6, milk: 300, sugar: 600 }

function improveRecipe(obj, portions) {
  const keyArray = Object.keys(obj)
  const quantities = {}

  for (let i = 0; i < keyArray.length; i++) {
    const key = keyArray[i]
    // use key to update value * portions
    const currentValue = obj[key]
    quantities[key] = currentValue * portions
  }

  return quantities
}

console.log('Q4: ', improveRecipe({ eggs: 2, milk: 100, sugar: 200 }, 3))

// practice
// const test = {health: 10, mana: 5, potions: 3, javalins: 2}

// const keyArray = Object.keys(test)
// console.log(Object.keys(test))

// for (let i = 0; i < keyArray.length; i++) {
//   console.log(keyArray[i])
//   console.log(test[keyArray[i]])
// }

// Don't change the code below this line
module.exports = {
  timerStatus /* eslint-disable-line no-undef */,
  estimatePrepTime /* eslint-disable-line no-undef */,
  calculateQuantities /* eslint-disable-line no-undef */,
  improveRecipe /* eslint-disable-line no-undef */
}
