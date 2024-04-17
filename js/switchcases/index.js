const currentDate = new Date();
const dayOfTheWeek = currentDate.getUTCDay() + 1;
switch (dayOfTheWeek) {
  case 1:
    console.log("this is a special quest for sunday!");
    break;
  case 2:
    console.log("this is a special quest for monday!");
    break;
  case 3:
    console.log("this is a special quest for tuesday!");
    break;
  case 4:
    console.log("this is a special quest for wednesday!");
    break;
  case 5:
    console.log("this is a special quest for thursday!");
    break;
  case 6:
    console.log("this is a special quest for friday!");
    break;
  case 7:
    console.log("this is a special quest for saturday!");
    break;
}

const themeColor = "dark";
switch (themeColor) {
  case "light":
    console.log("the background is bright blue");
    break;
  case "dark":
    console.log("the theme color is gray");
    break;
  case "dungeon":
    console.log("the background color is red");
    break;
  default:
    console.log("unsupported color theme");
}

const questStatus = "";
switch (questStatus) {
  case "new":
    {
      console.log("you have a new quest");
    }
    break;
  case "unread":
    {
      console.log("you have an unread quest");
    }
    break;
  case "unopened":
    {
      console.log("you have an unopened quest");
    }
    break;
  default:
    console.log("all quests completed");
    break;
}

const playerLevel = "";
switch (playerLevel) {
  case "begginer":
    {
      console.log("hello begginer, you will start with the easy quest");
    }
    break;
  case "intermediate":
    {
      console.log(
        "hello intermediate, we will go a little harder on you this time"
      );
    }
    break;
  case "advanced":
    {
      console.log("hello advanced player, we will show you no mercy");
    }
    break;
  case "expert":
    {
      console.log("hello expert, prepare to die");
    }
    break;
  case "master":
    {
      console.log("hello master, none came back from your quest alive");
    }
    break;
}

const inventoryItem = "sword";

switch (inventoryItem) {
  case "potion":
    console.log("player has a potion in his inventory");
  case "sword":
    console.log("player has a sword in his inventory");
  case "shield":
    console.log("player has a shield in his inventory");
}

const playerScore = 92;
switch (true) {
  case playerScore > 90:
    console.log("legend");
    break;
  case playerScore >= 70 && playerScore <= 89:
    console.log("champion");
    break;
  default:
    console.log("rookie");
}
const currentMonth = currentDate.getMonth() + 1;
switch (currentMonth) {
  case 1:
    console.log("ice kingdom adventure");
    break;
  case 2:
    console.log("valentines day special");
    break;
  case 3:
    console.log("spring blossom hunt");
    break;
  case 4:
    console.log("easter egg hunt");
    break;
  case 5:
    console.log("flower festival celebration");
    break;
  case 6:
    console.log("summer solstice quest");
    break;
  case 7:
    console.log("beach party bonanza");
    break;
  case 8:
    console.log("underwater expedition");
    break;
  case 9:
    console.log("harvest festival quest");
    break;
  case 10:
    console.log("haunted mansion mystery");
    break;
  case 11:
    console.log("turkey trot adventure");
    break;
  case 12:
    console.log("frosty festives");
    break;
}

const userInput = 42;

switch (true) {
  case typeof userInput === "string":
    console.log("User input is a string");
    break;
  case typeof userInput === "number":
    console.log("User input is a number");
    break;
  case typeof userInput === "boolean":
    console.log("User input is a boolean");
    break;
}

const updateMonth = 11;
switch (updateMonth) {
  case 1:
  case 2:
  case 3:
    console.log("1Q");
    break;
  case 4:
  case 5:
  case 6:
    console.log("2Q");
    break;
  case 7:
  case 8:
  case 9:
    console.log("3Q");
    break;
  case 10:
  case 11:
  case 12:
    console.log("4Q");
    break;
}
