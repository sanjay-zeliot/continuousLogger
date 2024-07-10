const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello" + i++);
  }, 1000);
};

startLogging();

// Hello
