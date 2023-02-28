let hourArray = [];
for (let i = 0; i < 24; i++) {
  hourArray.push(i);
}

let minuteArray = [];
for (let i = 0; i < 60; i++) {
  minuteArray.push(i);
}

let time = { hour: 0, minute: 0 };

let eightIndexJump = 0;
let y = 0;
for (let step = 0; step < 190; step++) {
  eightIndexJump > 23 ? (eightIndexJump = 0) : null;
  step % 60 == 0 ? (y = 0) : y++;
  time.minute = y;
  time.hour = hourArray[eightIndexJump + Math.floor(step / 60)];
  eightIndexJump += 8;
}
