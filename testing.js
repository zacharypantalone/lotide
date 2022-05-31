

let planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (let planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}