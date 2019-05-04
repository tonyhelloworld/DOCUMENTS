var obj = new Object();
var obj2 = obj;
console.log(obj===obj2)
obj2.name = 'nico';
console.log(obj2.name)
console.log(obj)