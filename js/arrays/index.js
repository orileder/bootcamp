const weaponInventory = ['sword','bow','magic staff'];
var weaponToCheck = "sword"
if (weaponInventory.includes(weaponToCheck)) {
    console.log ('the weapon inventory contains the item')
}
else {
    console.log ('the inventory does not include the item')
}

var questNames = ["dragon's lair", "the lost artifact", "rescue the princess"];
console.log (questNames.reverse())
console.log (questNames.reverse())
const monsterTypes = ['dragon' , 'goblin' , 'orc']
console.log (monsterTypes.toString())
const monsterToCheck = 'orc'
if (monsterTypes.includes(monsterToCheck)) {
    console.log ('monster types includes orc')}
    else {
        console.log ('monster types does not include orcs')
    }

const specificQuest = "rescue the princess"
if (questNames.indexOf(specificQuest) !== -1) {
console.log (questNames.indexOf(specificQuest))}
else {
    console.log ('quest not found')
}
var monsterList = ['dragon','orc','goblin']
monsterList.pop()
console.log(monsterList)

var monsterList = ['orc','goblin']
const newMonster = 'dragon'
monsterList.unshift(newMonster)
console.log (monsterList)

var monsterList = ['dragon','orc','goblin']
const firstItem = monsterList.shift()
console.log (monsterList)
console.log (firstItem)

const heroList1 = ['archer', 'mage']
const heroList2 = ['warrior','healer']

const allHeroes = heroList1.concat(heroList2)
console.log (allHeroes)

console.log (questNames.sort())

const spellsString = 'fireball, heal, ice lance'
console.log (spellsString.split())

const n = 2

var questNames = ["dragon's lair", "the lost artifact", "rescue the princess"]
const newQuestLine = questNames.slice(0, n)
console.log (newQuestLine)

var monsterList = ['dragon','orc','goblin']
monsterList.length = 0
console.log (monsterList)

// 14. Equip a New Weapon
const inventory14 = ['Sword', 'Shield'];
const newWeapon14 = 'Bow';
const invent14new = inventory14.concat(newWeapon14)
console.log (invent14new)

// 15. Sell the Last Item
const inventory15 = [
  'Gold',
  'Magic Potion',
  'Shield',
];
const item15 = inventory15.pop()
console.log (item15)

// 16. Insert a New Quest at the Beginning
const quests16 = [
  "Dragon's Lair",
  'Rescue the Princess',
];
const newQuest16 = 'Defeat the Goblin King';
quests16.unshift(newQuest16)
console.log(quests16)

// 17. List All Quests Alphabetically
const quests17 = [
  "Dragon's Lair",
  'Rescue the Princess',
  'Defeat the Goblin King',
];
quests17.sort()
console.log (quests17)

// 18. Check If Quest Exists
const quests18 = [
  "Dragon's Lair",
  'Rescue the Princess',
  'Defeat the Goblin King',
];
const questToCheck18 = 'Rescue the Princess';
if (quests18.includes(questToCheck18)){
    console.log ('the quest exists')
}
else {
    console.log ('the quest does not exist')
}

// 19. Sort Scores
const scores19 = [30, 80, 60, 90];
scores19.sort()
scores19.reverse()
console.log (scores19)