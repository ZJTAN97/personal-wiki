// help me to create this promiseTest that if i executed the code above it will print out 'hello world' after 5 s example: promiseTest.then((res) => console.log(res)); "

const promiseTest = async () => {
  return await new Promise(() =>
    setTimeout(() => {
      console.log("hello world");
    }, 5000)
  );
};

promiseTest();
