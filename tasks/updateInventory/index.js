const { log } = require("console");


function updateInventory(arr1, arr2) {
  const inventoryMap = new Map(arr1.map(([quantity, name]) => [name, quantity]));

  arr2.forEach(([count, name]) => {
    inventoryMap.set(name, (inventoryMap.get(name) || 0) + count);
  });

  const result = [...inventoryMap.entries()].map(([name, quantity]) => [quantity, name]);

  return result.sort((a, b) => {
    let stra = a[1].toLowerCase();
    let strb = b[1].toLowerCase();
    if (stra < strb) {
      return -1
    }
    if (stra > strb) {
      return 1
    }
    return a[0] - b[0]
  })
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

// updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return an array with a length of 6.