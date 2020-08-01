const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//const pepsi: [string, boolean, number] = ["brown", true, 40];

// type alias
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
