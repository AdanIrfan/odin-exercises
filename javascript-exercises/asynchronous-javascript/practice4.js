function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("runs after 3 seconds");
    }, ms);
  });
}
delay(3000).then((res) => {
  alert(res);
});
