// 1. Simple Arrow Function Conversion
const player1 = {
    name: "Alice"
};
function getPlayerName(player) {
    return player.name;
  }
const getPlayerName2 = player => player.name
console.log(getPlayerName(player1));
console.log(getPlayerName2(player1));
  
  // 2. Control Flow in Arrow Functions
  function getPlayerHealth(health) {
    if (health > 70) {
      return "High";
    } else if (health > 40) {
      return "Medium";
    } else {
      return "Low";
    }
  }
  const getPlayerHealth2 = health => {
    if (health > 70) {
        return "High";
      } else if (health > 40) {
        return "Medium";
      } else {
        return "Low";
      }
  }
  console.log(getPlayerHealth(60));
  console.log(getPlayerHealth2(60));
  
  // 3. Arrow Functions with Multiple Operations
  const items = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 20 },
    { name: 'Item 3', value: 30 }
];
  function getTotalInventoryValue(items) {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += items[i].value;
    }
    return 'Total inventory value is ' + totalValue;
  }
  const getTotalInventoryValue2 = item => {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += items[i].value;
    }
    return 'Total inventory value is ' + totalValue;
  }
  console.log(getTotalInventoryValue(items));
  console.log(getTotalInventoryValue2(items));
  
//   // 4. Arrow Functions as Callbacks
const items2 = [
    { name: 'Item 1', value: 30 },
    { name: 'Item 2', value: 20 },
    { name: 'Item 3', value: 40 }
];

  const sortedItems = items => items.sort((a, b) => b.value - a.value);
  ;

  console.log(sortedItems(items2));
  
//   // 5. Implicit Return with Arrow Functions
//   function getItemNames(items) {
//     return items.map(function(item) {
//       return item.name;
//     });
//   }