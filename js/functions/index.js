let characterStats = [];

function initializeCharacterStats(name, strength) {
    characterStats.push([name, strength]);
}

initializeCharacterStats('wilhelm', 9);
console.log(characterStats); 





// Pure Functions

// 1. Determine the Average Rating of Games
// Input: 
let values1 = [8.5, 7.9, 6.3, 9.2, 8.1]
function calculateAvarage(valueList) {
    let sum = 0
    for (let index = 0; index < valueList.length; index++) {
        const element = valueList[index];
        sum += element/valueList.length
    }
    console.log('the avarage is ' + sum);
}
calculateAvarage(values1)
// 2. Extract Developer Names from Game Titles
// Input Example:
let gameNames = ['The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo', 'Final Fantasy VII (1997) - Developed by Square Enix', 'Halo: Combat Evolved (2001) - Developed by Bungie'];
function extractDeveloperNames(list) {
    let creatorList = [];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        let splitTitle = element.split(" - Developed by ");
        if (splitTitle.length === 2) {
            creatorList.push(splitTitle[1]);
        }
    }
    return creatorList;
}
console.log(extractDeveloperNames(gameNames));

// 3. Check if a Game Title Contains a Specific Word
// Input: 
function containsWordInTitle(gameName,wordToCheck) {
    let checkMark = false
    let separated = gameName.split(" ")
    for (let index = 0; index < separated.length; index++) {
        const element = separated[index];
        if (element === wordToCheck) {
            checkMark = true;
            break;
        }
    }
    return (checkMark)
}
console.log(containsWordInTitle('Final Fantasy VII','Fantasy')); 

// 4. Check if All Game Titles Start with the Same Letter
// Input: ['Assassin's Creed', 'Age of Empires', 'Animal Crossing']
function checkFirstLetters(listOfNames) {
    let arrayOfFirstLetters = []
    let trueFalse = false
    for (let index = 0; index < listOfNames.length; index++) {
        const element = listOfNames[index];
        if (arrayOfFirstLetters.includes(element[0])) {

        }
        else {
            arrayOfFirstLetters.push(element[0])
        }
    }
    if (arrayOfFirstLetters.length === 1) {
        return trueFalse = true
    }
    else {
        return trueFalse
}
}
console.log(checkFirstLetters (["Assassin's Creed", "Age of Empires", "Animal Crossing"])); 
// 5. Concatenate All Game Genres into a Single String
// Input: ['RPG', 'Action', 'Adventure']

function concatGamesToString(arrayOfGameGanres) {
    let stringOfGanres = ""
    for (let index = 0; index < arrayOfGameGanres.length; index++) {
         stringOfGanres += arrayOfGameGanres[index]
         if (index !== arrayOfGameGanres.length - 1) {
            stringOfGanres += ', ';
        }

    }
    return stringOfGanres
}
console.log(concatGamesToString(['RPG', 'Action', 'Adventure']));


// 6. Count Battles in XP Range
// Input: ([50, 75, 100, 30, 20, 100], 75, 100)
function checkXpRange(battles,lowerBar,upperBar) {
    let counter = 0
    for (let index = 0; index < battles.length; index++) {
        const element = battles[index];
        if (element >= lowerBar && element <= upperBar) {
            counter ++
        }
    }
    return counter
}
console.log(checkXpRange([50, 75, 100, 30, 20, 100], 75, 100));

// 7. Find Games Developed by a Specific Developer
// Input Example: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'
function findMatchingDeveloper(gameArray,developerArray,developerToLookFor) {
    for (let index = 0; index < developerArray.length; index++) {
        const element = developerArray[index];
        if (element === developerToLookFor) {
            return gameArray[index]
        }
    }
}
console.log(findMatchingDeveloper(['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved'], ['Nintendo', 'Square Enix', 'Bungie'], 'Nintendo'));
// 8. Capitalize the First Letter of Each Game Title
// Input: ['the legend of zelda', 'final fantasy', 'halo: combat evolved']
let item1 = ['the legend of zelda', 'final fantasy', 'halo: combat evolved']
function capitalizeFirstLetter(arrayOfGames) {
    let box = []
    for (let index = 0; index < arrayOfGames.length; index++) {
        const element = arrayOfGames[index];
        let capitalized = element.charAt(0).toUpperCase()
        box.push(capitalized + element.slice(1))
    }
    return box
}
console.log(capitalizeFirstLetter(item1));
console.log(item1);

// 9. Filter Unique XP Values
// Input: [100, 50, 75, 50, 100, 75, 100]
let rewardList = [100, 50, 75, 50, 100, 75, 100]
function uniquenessCheck(arrayOfRewards) {
    let uniqueBank = []
    for (let index = 0; index < arrayOfRewards.length; index++) {
        const element = arrayOfRewards[index];
        if (uniqueBank.includes(element)) {}
        else {
            uniqueBank.push(element)
        }
    }
    return uniqueBank
}
console.log(uniquenessCheck(rewardList));

// 10. Sort Game Titles Alphabetically
// Input: ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']
let arr = ['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']
function sortAlphabetically(array) {
    let sortedArray = array.sort()
    return sortedArray
}
console.log(sortAlphabetically(['The Legend of Zelda', 'Final Fantasy', 'Halo: Combat Evolved']));
console.log(arr);

// 11. Filter XP by Multiple Criteria
// Input: ([10, 20, 30, 40, 50], greaterThan=20, lessThan=50)
function sortExpByCriteria(expList, greaterThan, lessThan) {
    let list = []
    for (let index = 0; index < expList.length; index++) {
        const element = expList[index];
        if (element > greaterThan && element < lessThan) {
            list.push(element)
        }
    }
    return list
}
console.log(sortExpByCriteria([10, 20, 30, 40, 50], greaterThan=20, lessThan=50));

// Bonus Exercises

// 1. Sort Experience Points
// Input: [100, 50, 75, 25, 10]

// 2. Average XP of Top N Battles
// Input: ([50, 10, 100, 75, 25], 3)

// 3. Normalize Experience Points
// Input: ([0, 25, 50, 75, 100], 0, 10)

