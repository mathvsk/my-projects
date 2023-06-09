function calculateAgeofUser(user) {
    return new Date().getFullYear() - user.birthYear;
}
calculateAgeofUser({
    birthYear: 1990
});
