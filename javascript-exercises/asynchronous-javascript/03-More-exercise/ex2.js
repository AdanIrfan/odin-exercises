function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted");
    }
    reject("Access denied");
  });
}

checkAge(10)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
