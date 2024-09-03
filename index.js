const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello World!!" + i++);
    console.log("Heelo brad from Condense ......!!!!");
  }, 2000);
};

startLogging();