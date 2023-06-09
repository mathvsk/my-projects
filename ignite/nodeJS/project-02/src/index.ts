interface User {
  birthYear: number;
}

function calculateAgeofUser(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

calculateAgeofUser({
  birthYear: 1990
});