getUser()
  .then((user) => {
    return user.id;
  })
  .then((id) => {
    return getPosts(id);
  })
  .then((post) => {
    console.log(post.title);
  });
