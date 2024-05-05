const character = {
    name: 'momo',
    class: 'battle-mage',
    level: 10,
    abilities:['ice blast','swipe','summon companion'],
    stats: {
        str: 12,
        dex: 8,
        int:6
    },
    getOverallStrength: function() {
        return (this.stats.dex + this.stats.int + this.stats.str)
    }
}
// console.log(character.getOverallStrength());
const modifiedCharacter = {
    ...character,
    equipment: {
        weapon:'staff of guldan-ra',
        armor:'dragons tailscales',
        accessories: ['ring of frost','elven silk cape']
    }
}
// console.log(character.abilities[0]);
// console.log(character['abilities'][0]);
// console.log(modifiedCharacter.equipment.armor);
// console.log(modifiedCharacter['equipment']['armor']);

character.level = 14
// console.log(character);

character.abilities.push('fireball')
// console.log(character.abilities);
delete character.class
// console.log(character);
modifiedCharacter.equipment.weapon = 'staff of wan-ji-tong'
// console.log(modifiedCharacter);
modifiedCharacter['equipment']['weapon'] = 'wand of elements'
// console.log(modifiedCharacter);
// console.log(character);

const characters = [
    {name: 'Eldrin', attributes: { health: 100, mana: 50}},
    {name: 'Mira', attributes: { health: 85, mana: 60}}
]
// console.log(characters[0]['attributes']['health']);
function findAvarageHealth(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
       sum = sum + element['attributes']['health']
    }
    let avg = sum/array.length
    return avg
}
// console.log(findAvarageHealth(characters));

const mergedCharacters = {
    character1: characters[0],
    character2: characters[1]
};

// console.log(mergedCharacters);

characters.forEach(character => Object.freeze(character));
characters.forEach(character => Object.seal(character));
// console.log(Object.isFrozen(characters[0]));
// console.log(Object.isSealed(characters[1]));

const characterStats = {
    name: 'Eldrin',
    class: 'Mage',
    level: 7,
    health: 100,
    mana: 200
}

function logPropertiesAndValues(obj) {
    Object.keys(obj).forEach(function(key) {
        console.log(key);
    });
    Object.values(obj).forEach(function(value) {
        console.log(value);
    });
}

// logPropertiesAndValues(characterStats);

const gameScores = {
    'Eldrin' : 950,
    'Mira' : 1200,
    'Thorn' : 800
}

function increaseScore(charName) {
    Object.entries(gameScores).forEach(([name, score]) => {
        if (name === charName && score < 1000) {
            gameScores[charName] += 100;
        }
    });
}

increaseScore('Thorn');
increaseScore('Mira');
// console.log(gameScores);

const quests = {
    1: {name: 'Find the Lost Sword', difficulty: 'Easy', reward: '100 gold'},
    2: {name: 'Defeat the Dragon', difficulty: 'Hard', reward: '500 gold'},
    3: {name: 'Escort the Merchant', difficulty: 'Medium', reward: '250 gold'}
};

function filterAndPrintHard(object) {
    Object.entries(object).forEach(([num, obj]) => {
        if (obj.difficulty === 'Hard') {
            obj.isHard = true;
            console.log(obj);
        }
    });
}

// filterAndPrintHard(quests);

const skillLevels = {
    Ranger: [8, 9, 7, 10, 8.5],
    Mage: [8.5, 8, 9, 9.5, 7.5],
    Warrior: [7, 7.5, 8, 8.5, 9]
};

function calculateAvg(object) {
    Object.keys(object).forEach(job => {
        const levels = object[job];
        const sum = levels.reduce((acc, level) => acc + level, 0);
        const avg = sum / levels.length;
        console.log(`${job} average skill level: ${avg}`);
    });
}

calculateAvg(skillLevels);
