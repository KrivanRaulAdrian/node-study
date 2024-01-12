// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ["Cat", "Dog"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 4,
}
let sizeName: string = Size[2];

// Any
let whatever: any = "agk";
whatever = 5;

// void
let sing = (): void => {
  console.log("lalala");
};

// never
let error = (): never => {
  throw Error("ooops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
};
let firhtRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("Fight!");
};

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count = 8;
dog.type = "mammal";
dog.magic = "highly magical";

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("Fight!");
};

let firhtRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("Fight!");
  return 5;
};

// Class
class Animal {
  public sing: string = "lalala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("roar");
lion.greet();

// Union
let confused: string | number | boolean = true;
