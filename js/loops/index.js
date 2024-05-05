// 1. Calculate Total Player Experience
const experiencePoints1 = [100, 150, 75];
var addition = 0
for (let index = 0; index < experiencePoints1.length; index++) {
    const element = experiencePoints1[index];
    addition += element
}
console.log (addition)

// 2. Locate Quest by Title
const questTitles2 = [
  'Quest 1',
  'Quest 2',
  'Quest 3',
];
for (let index = 0; index < questTitles2.length; index++) {
    const element = questTitles2[index];
    if (element === 'Quest 2'){
        console.log(element);
        break;
    }
    
}

// 3. List Enemies Above Health Threshold
const enemyHealths3 = [80, 120, 65];
for (let index = 0; index < enemyHealths3.length; index++) {
    const element = enemyHealths3[index];
    if (element >= 100) {
        console.log ('enemy ' + (index+1) + ' has more hp than 100')
        break;
    }
    
}

// 4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];

for (let index = 0; index < questRewards4.length; index++) {
    questRewards4[index] += 20;
}

console.log(questRewards4); 


// 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
var counter5 = 0
for (let index = 0; index < questRewards5.length; index++) {
    const element = questRewards5[index];
    if (element === specificReward5) {
        counter5 ++
    }
}
console.log ('the specific reward appears ' + counter5 + ' times')

// 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 75];
var checker = true
for (let index = 0; index < questChallenges6.length; index++) {
    const element = questChallenges6[index];
    if (element < 100) {
        checker = false
    }
}
console.log(checker)

// 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75, 150];
var highestReward = 0
for (let index = 0; index < questRewards7.length; index++) {
    const element = questRewards7[index];
    if (element > highestReward) {
        highestReward = element
    }
}
console.log ('the highest reward is ' + highestReward)

// 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];
const totalAssaultValues = []
for (let index = 0; index < enemyPowers8.length; index++) {
    const element = enemyPowers8[index];
    totalAssaultValues[index] = enemyHealths8[index] + enemyPowers8[index]
}

for (let index = 0; index < totalAssaultValues.length; index++) {
    console.log ('enemy ' + [index+1] + ' total assault power is ' + totalAssaultValues[index])
}

// 9. Calculate Total Experience from Quest Matrix
const questExperienceMatrix9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
var totalExp = 0
for (let index = 0; index < questExperienceMatrix9.length; index++) {
    const element = questExperienceMatrix9[index];
    for (let index = 0; index < element.length; index++) {
        const exp = element[index];
        totalExp += exp
    }
}
console.log(totalExp)

// 10. Find the Quest with Highest Experience in Each Category
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
highestExpLeft = 0
highestExpRight = 0
for (let index = 0; index < questExperienceMatrix10.length; index++) {
    const element = questExperienceMatrix10[index];
    for (let index = 0; index < element.length; index++) {
        const item = element[index];
        if (item > highestExpLeft && index === 0)
        highestExpLeft = item
        else if (item > highestExpRight && index === 1)
        highestExpRight = item
    }
}
console.log ('highest exp left column is ' + highestExpLeft +', and highest exp right column is ' + highestExpRight)



// 11. Count High-Difficulty Quests in Each Category
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];
var questDifficultyCounter = [0,0,0]
for (let index = 0; index < questDifficultyMatrix11.length; index++) {
    const element = questDifficultyMatrix11[index];
    for (let i = 0; i < element.length; i++) {
        const counter = element[i];
        if (counter >= 7){
        questDifficultyCounter[index] ++
        }
    }
}
for (let index = 0; index < questDifficultyCounter.length; index++) {
    console.log ('in category ' + [index+1] + ' there are ' + questDifficultyCounter[index] + ' quests above level 7')
}

// 12. Sum of Rewards for High-Reward Quests by Category
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];
var rewardSum = []

for (let index = 0; index < questRewardsMatrix12.length; index++) {
    const element = questRewardsMatrix12[index];
    var specificRewardSum = 0
    for (let i = 0; i < element.length; i++) {
        const reward = element[i];
        specificRewardSum += reward
        if (specificRewardSum > 250){
            rewardSum[index] = specificRewardSum
        }
        else {
            rewardSum[index] = 0
        }
    }
}
console.log (rewardSum)
// 13. Average Health of Enemies by Type
const enemyHealthMatrix13 = [
  [80, 120],
  [60, 90],
  [200, 150],
];
var avarageEnemyHealth = [0,0,0]
for (let index = 0; index < enemyHealthMatrix13.length; index++) {
    const element = enemyHealthMatrix13[index];
    for (let i = 0; i < element.length; i++) {
        const enemy = element[i];
        avarageEnemyHealth[index] += (enemy / element.length)
    }
}
console.log (avarageEnemyHealth)