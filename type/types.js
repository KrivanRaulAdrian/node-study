// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favouriteQuote = "I'm not old, I'm only ".concat(age);
// Array
var pets = ["Cat", "Dog"];
var pets2 = ["lion", "dragon", "lizard"];
// Object
var wizard = {
    a: "John",
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any
var whatever = "agk";
whatever = 5;
// void
var sing = function () {
    console.log("lalala");
};
// never
var error = function () {
    throw Error("ooops");
};
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
var firhtRobotArmy2 = function (robots) {
    console.log("Fight!");
};
var dog = {};
dog.count = 8;
dog.type = "mammal";
dog.magic = "highly magical";
// Function
var fightRobotArmy3 = function (robots) {
    console.log("Fight!");
};
var firhtRobotArmy4 = function (robots) {
    console.log("Fight!");
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("roar");
lion.greet();
// Union
var confused = true;
