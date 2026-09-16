function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms / 1000} seconds passed`);
    }, ms);
  });
}

delay(3000).then((res) => {
  console.log(res);
});
