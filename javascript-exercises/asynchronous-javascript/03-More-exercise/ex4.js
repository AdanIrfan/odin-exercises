// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Logged in");
//     }, 2000);
//   });
// }

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User Found");
//     }, 3000);
//   });
// }

// function getProfile() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Profile loaded");
//     }, 3000);
//   });
// }

// login()
//   .then((log) => {
//     console.log(log);
//     return getUser();
//   })
//   .then((user) => {
//     console.log(user);
//     return getProfile();
//   })
//   .then((profile) => {
//     console.log(profile);
//   });

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

async function findPofile() {
  const log = await login();
  console.log(log);
  const user = await getUser();
  console.log(user);
  const profile = await getProfile();
  console.log(profile);
}

findPofile();
