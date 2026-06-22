nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));

function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let lowerSort = simpleList.map(function(fruit){
    return fruit.toLowerCase();
}).sort();


let searchTerm = "an";
let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}

console.log(filterFruit);


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

function compareObj(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}

let productSort = products.sort(compareObj);
console.log(productSort);


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let query = "dog";
let filterereerdList = animals.filter(searchList);

function searchList(thingymabobber){
    return thingymabobber.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filterereerdList);

let queryTrait = "cuddly";

let filterereerdTraits = animals.filter(function(bbbbruh){
    return bbbbruh.traits.find((trait)=>
        trait.toLowerCase().includes(queryTrait.toLowerCase()))
})

console.log(filterereerdTraits);