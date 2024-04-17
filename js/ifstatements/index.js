var playerHealth = 52
if (playerHealth>10) {
    console.log ('player is strong')
}
else {
    console.log ('player is weak')
}
var playerGold = 89
if (playerGold >= 1 && playerGold <= 100) {
    console.log ('player is rich')
}
else {
    console.log ('player is poor')
}

var weather = 'good'
var typeOfDay = 'bright'

if (weather !== 'bad' && typeOfDay !== 'stormy') {
    console.log (`its a ${typeOfDay} day and the weather is ${weather}, therefore our hero should continue his adventure!`)
}
const age = 24
if (age <= 19 && age >= 13) {
 console.log ('player is between 13 and 19')}
else { console.log ('player is not between 13 and 19')}

const score = 120

score >= 50 ? console.log ('high score') : console.log ('low score')

const numOfEnemies = 12 

numOfEnemies%2 === 0 ? console.log ('number of enemies is even') : console.log ('number of enemies is odd')

const characterAge = 24

characterAge <= 12 ? console.log ('youngling') : 19 > characterAge && characterAge > 13 ? console.log ('adolecent') : console.log('adult')

const battleSkill = 88 

battleSkill > 70 ? console.log ('skilled warrior') : console.log ('train harder')

const sessionDuration =  60

if (sessionDuration < 90) {
    console.log ('short session')
}
else if (sessionDuration > 90 && sessionDuration < 150) {
    console.log ('moderate session')
}
else (
    console.log ('marathon')
)
const totalPotions = 13
const usedPotions = 4
const availablePotions = totalPotions - usedPotions
if (availablePotions !== 0) {
    console.log (`there are ${availablePotions} available potions`)
} 
else {
    console.log ('there are no available potions')
}
 const questAgestriction = 18
 if (age > questAgestriction) {
    console.log ('you are allowed to participate in the quest')
 }
 else {
    console.log ('you cannot join the quest due to age restrictions')
 }
 const currentDate = new Date();
 const dayOfTheWeek = currentDate.getUTCDay()
 if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log ('special event!')
 }
 else {
    console.log ('regular gameplay')
 }
 const gameSettingYear = 1200
 if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
    console.log ('medival era settings')
 }
 else {
    console.log ('other era settings')
 }
 const characterClass = 'warrior'
 const characterLevel = 13

 if (characterClass === 'warrior' && characterLevel >= 10) {
    console.log ('character is a powerful warrior')
 }
 else {
    console.log ('avarage character')
 }
  
  const enemyCount = 2
   if (playerHealth >= 50 && enemyCount <=3) {
    console.log ('ready for battle!')
   }
   else {
    console.log ('proceed with caution')
   }
   const questProgress = 35
   const questDifficulty = 6
   if (questDifficulty <= 5 && questProgress === 100) {
    console.log ('quest complete!')
   }
   else {
    console.log ('quest is not complete')
   }
   const inventorySize = 21
   if (inventorySize >= 90) {
    console.log ('inventory almost full')
   }
   else {
    console.log ('plenty of room in the inventory')
   }