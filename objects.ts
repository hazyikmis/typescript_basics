const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//const age = profile.age;
//const { age } = profile; // ES2015 destructuring
//const { age, name } = profile; // ES2015 destructuring

//const { age }: { age: number } = profile;  // ES2015 destructuring in Typescript
const { age, name }: { age: number; name: string } = profile; // ES2015 destructuring in Typescript

//const { coords: { lat, lng} } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
