// 父子类使用原型继承

function Parent(){
    this.name = 'me';
    this.sex=['male','female']
}

Parent.prototype.say = function (){
    console.log('hi')
}

function Child(){
    this.age = '12'
}

Child.prototype = new Parent()
console.log('gouzao:',Child.prototype.constructor)

Child.prototype.constructor = Child;
var childObj = new Child();
console.log('childObj:',childObj)