const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello FleetHD!!" + i++);
    console.log("Hi this is Condense!!!!");
  }, 2000);
};

startLogging();