const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello World!!" + i++);
    console.log("Hi John this is Cndense!!!!");
  }, 2000);
};

startLogging();