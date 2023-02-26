const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.File({ filename: 'crontab.log' })],
});
logger.info('Crontab task started');

// --------------------------
//#region The modular parts of the code
// --------------------------
const theChannel = '1';
const myAuthorization = '1';
//#endregion The modular parts of the code

function sendMessageToChannel(message) {
  const url = `https://discord.com/api/v9/channels/${theChannel}/messages`;
  const data = {
    content: message,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: myAuthorization,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// --------------------------
//#region The commands you will be sending to the server
// --------------------------
const gambling = '1';
const theJob = '1';
//#endregion The commands you will be sending to the server

// Your crontab task code goes here
console.log('Hello from crontab task!');

setTimeout(() => sendMessageToChannel(gambling), 1);
setTimeout(() => sendMessageToChannel(theJob), 523);
logger.info('Crontab task completed');
