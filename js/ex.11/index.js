
const currentDate = new Date();

const options = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'long'
  };
  
  const formattedDate = currentDate.toLocaleString('en-US', options);
  console.log(formattedDate);
  


const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
const weekday = currentDate.getUTCDay()
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();



const formattedDateTime2 = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${weekday}`;

console.log(formattedDateTime2);