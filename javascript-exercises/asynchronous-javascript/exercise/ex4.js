function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Logged in");
    }, 2000);
  });
}

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Found");
    }, 3000);
  });
}

function getProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Profile loaded");
    }, 3000);
  });
}

login()
  .then((log) => {
    console.log(log);
    return getUser();
  })
  .then((user) => {
    console.log(user);
    return getProfile();
  })
  .then((profile) => {
    console.log(profile);
  });
