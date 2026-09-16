async function fetchUser() {
  try {
    const user = await fetch("https://randomuser.me/api/");
    if (!user.ok) {
      throw new Error("HTTP Request Failed");
    }
    const parsedUser = await user.json();

    const userName = parsedUser.results[0].name.first;
    const userEmail = parsedUser.results[0].email;
    const userCountry = parsedUser.results[0].location.country;

    console.log(`Name: ${userName}
    Email: ${userEmail}
    Country: ${userCountry}`);
  } catch (error) {
    console.log(error);
  }
}

fetchUser();
