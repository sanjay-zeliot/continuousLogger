const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello World!!" + i++);
    console.log("Hi Savita and Kumar!!!!");
  }, 2000);
};

startLogging();