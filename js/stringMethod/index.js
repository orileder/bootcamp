// 1. Character Name Capitalization
// Input:
let str = "iron warrior";
let sepWords = str.split(" ");

for (let index = 0; index < sepWords.length; index++) {
    let word = sepWords[index];
   
    word = word.charAt(0).toUpperCase() + word.slice(1);
    sepWords[index] = word;
}
let result = sepWords.join(" ")
console.log(result);

// 2. Item Search
let itemList  =  ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"];
let solution = []
for (let index = 0; index < itemList.length; index++) {
    const element = itemList[index];
    if (element.includes("Iron")) {
      solution.push(element)
    }
}
console.log(solution)

// 3. NPC Name Format
// Input: 
let NPCName = "Goblin, Grunty"

let noPsik = NPCName.replace(",","")
let words = noPsik.split(" ")
let solution2 = words.reverse().join(" ")
console.log(solution2);
// 4. Quest Duration
let firstString = "3h 45min"
let solution3 = firstString.replace(" "," and ").replace("h"," hours").replace("min", " minutes ")
console.log(solution3);

// 5. Game Title Acronym
let gameName = "Epic Fantasy Battle"
let short = ""
let words2 = gameName.split(" ")
for (let index = 0; index < words2.length; index++) {
    const word = words2[index];
    let firstCap = word[0]
    short += firstCap
}
console.log(short)

// 6. Concatenate Character Details
let input = 'Iron Warrior;Warrior;10';
let parts = input.split(';');
let nameOf = parts[0];
let characterClass = parts[1];
let level = parts[2];

let output = nameOf + ', class: ' + characterClass + ', level: ' + level;

console.log(output); 


// 7. Location Slug
let input2 = "Dark Forest"
let corrected = input2.replace(" ","-").toLowerCase()
console.log(corrected);

// 8. Quest Description Trimming
let input3 = "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";
let cutPlace = 50;

for (let index = cutPlace; index >= 0; index--) {
    if (input3[index] === " ") {
        let shorted = input3.substring(0, index);
        console.log(shorted + '...');
        break;
    }
}


// 9. Monster List
 let input4 = "Goblin, Orc, Dragon"
 let noPsiks = input4.replace(",","").replace(",","").split(" ")
 console.log(noPsiks);