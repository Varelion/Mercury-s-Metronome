// --------------------------
//#region The modular parts of the code
// --------------------------
const theChannel = '907451784656736346';
const myAuthorization =
  'MzYzMjcxNDU0MjM1ODIwMDMz.GEnh6c.3ReSRXSDUrXNn3qfkpvNt8JBVWLDaPOxTW9AoM';
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
const gambling = '!gamble 1000';
const theJob = '!job performance';
//#endregion The commands you will be sending to the server

setTimeout(() => sendMessageToChannel(gambling), 1);

setTimeout(() => sendMessageToChannel(theJob), 523);
