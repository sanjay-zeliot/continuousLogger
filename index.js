const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello World!!" + i++);
    console.log("Hello from Oman for Teltonika devices!!");
  }, 2000);
};

startLogging();