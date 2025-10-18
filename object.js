// This keyword
// Method -> this == obj
// Function -> this == window/ globall obj

function thisNm(){
    console.log(this)
}
thisNm()

// console.log(this)

let person = {
    name : 'Al Muksid',
    sayName : function(){
        console.log('Hello ' + this.name)
    },
    inteerest : ['Graphic Design', 'Development', 'Tree Plantation'],
    showInt : function() {
        this.inteerest.forEach(function(el){
            console.log(this.name + ' is interested in ' + el);
            
        }, this)
    }
}
person.showInt();

let person1 = {
    name : 'Al Muksid',
    sayName : function(){
        console.log('Hello ' + this.name);
    },
    inteerest : ['Graphic Design', 'Development', 'Tree Plantation'],
    showInt : function() {
        this.inteerest.forEach(el => {
            console.log(this.name + ' is interested in ' + el);
        })
    }
}
person1.showInt();