async function getUser(seed) {
  const user = await fetch(`https://randomuser.me/api/?seed=${seed}`);
  const parsedUser = await user.json();
  return parsedUser;
}
Promise.all([getUser(1), getUser(2), getUser(3)])
  .then((res) => {
    res.forEach((user) => {
      console.log(user.results[0].name.first);
    });
  })
  .catch((err) => {
    console.log(err);
  });
