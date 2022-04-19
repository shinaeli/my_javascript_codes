// Initializing a function with a function expression
const x = function() {}

// Initializing a class with a class expression
const y = class {}

Object.getPrototypeOf(x); //ƒ () { [native code] }

Object.getPrototypeOf(y); //ƒ () { [native code] }

const x = function() {}

// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction); 

//x {}
//constructor: ƒ ()

const y = class {}

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);

// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Initializing a class definition
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
}

function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	// Adding a method to the constructor
	greet() {
		return `${this.name} says hello.`;
    }
}

const hero1 = new Hero('Varg', 1);

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}

const hero2 = new Mage('Lejon', 2, 'Magic Missile');

// Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}

const hero2 = new Mage('Lejon', 2, 'Magic Missile');

function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);

	this.spell = spell;
}

// Initializing a class
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}

	// Adding a method to the constructor
	greet() {
		return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}

