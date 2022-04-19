const mapped = new Map();
mapped.set('title', "Yetty Price");
mapped.set('spouse', 'Teddy Agga');
mapped.set('has_kids', false);
mapped.set(3, 'houses');
console.log(mapped); 

console.log(mapped.get('title')); //Yetty Price
console.log(mapped.get('spouse')); //Teddy Agga
console.log(mapped.get('has_kids')); //false
console.log(mapped.get('3')); //undefined
console.log(mapped.get(3)); //houses
console.log(mapped.get(false)); //undefined