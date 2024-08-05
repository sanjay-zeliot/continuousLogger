const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello" + i++);
  }, 2000);
};

startLogging();

// Hello
