const startLogging = () => {
  let i = 1;
  setInterval(() => {
    console.log("Hello World!!" + i++);
    console.log("Hi Doug this is COndense!!!!");
  }, 2000);
};

startLogging();