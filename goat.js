var goat = {name:"Bingo", legs:4, eye:2, horn:2}; 
undefined
goat.horn
2
goat["blind eye"] = [1, 0]
(2) [1, 0]
console.log(goat);
VM327:1 {name: "Bingo", legs: 4, eye: 2, horn: 2, blind eye: Array(2)}
undefined
delete goat["blind eye"];
true
console.log(goat);
VM430:1 {name: "Bingo", legs: 4, eye: 2, horn: 2}
undefined
Object.keys(goat);
(4) ["name", "legs", "eye", "horn"]
goat.stubborn = function() {return "A mad goat named $(this.name) knocks people with its $(this.horn) horns."};
console.log(goat);
                            
VM897:2 {name: "Bingo", legs: 4, eye: 2, horn: 1.5, stubborn: ƒ}
undefined
goat.stubborn();
"A mad goat named $(this.name) knocks people with its $(this.horn) horns."
console.log(goat.stubborn());
VM1022:1 A mad goat named $(this.name) knocks people with its $(this.horn) horns.
undefined