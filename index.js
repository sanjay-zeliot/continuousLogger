require("dotenv").config();
let INTERVAL = parseInt(process.env.INTERVAL || 1);

const startLogging = () => {
  let i = INTERVAL;
  setInterval(() => {
    console.log("Hello" + i);
    i += INTERVAL;
  }, INTERVAL * 1000);
};

startLogging();

// Adding Sample comment
