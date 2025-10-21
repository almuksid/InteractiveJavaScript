const language = {
    frontend : 'react.js',
    backend : 'django',
    mobile : 'reactNative',
    database : 'postgresql',
    list : ['Ecommerce', 'Social Media', 'News'],
    // Anonymous function
    eSite : function(){     
        console.log(`We are using ${this.frontend} for frontend & ${this.backend} for backend`);
    },
    sMedia : function(){
        this.list.forEach(el =>{
            console.log(this.frontend +' frontend for ' + el);
        })
    }
}
// Access object
console.log(language.frontend);
console.log(language['backend']);
language.eSite();
language.sMedia();

// Object Counter
const counter = {
    count : 0,
    increment (){
        return this.count ++
    },
    decrement (){
        return this.count --
    }
}
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);

// Calculator 
const count = {
    add (a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    }, 
    multi:(a, b) =>{
        return a * b;
    }
    ,
    devi:function(a, b){
        return a / b;
    }
}
console.log(count.multi(5, 6));

// Computed Property
const contact = "almuksid1@outlook.com";
const contact_key = 'email';

const person = {
    name : 'Al Muksid',
    [contact_key] : contact
}
console.log(person.email);

// Nested Object
const engineer = {
    elec : 'Circut Design',
    soft : {
        webDev : ['React.js', 'django'],
        mobile : 'kotlin'
    }
}

console.log(engineer.soft.webDev);

// Destructuring 
const email1 = 'web.almuksid@gmail.com';
const sayBio = 'bio';
const sayBio1 = 'bio1';
const person1 = {
    name : 'Al Muksid',
    age : 25,
    skill : ['Web Developer', 'Programmer'],
    email1,
    [sayBio] : function(){
        this.skill.forEach((el) =>{
            console.log(`Hi, this is ${this.name}, age ${this.age} and skill is ${el}`);
        })
    },
    [sayBio1] : function(){
        this.skill.forEach(function(el){
            console.log(`Hi, this is ${this.name}, age ${this.age} and skill is ${el}`);
        }, this)
    }

}
const {name, age, email1: email} = person1;
console.log(name, age, email1 );
console.log(person1.email1);
person1.bio();
person1.bio1();

// obj Method
const student = {
    id: '1111101',
    name: 'Al Muksid',
    age: 25,
    skills: ['React.js', 'JavaScript'],
    city: 'Magura'
}

const key = Object.keys(student);
Object.assign(student, {gpa:5});
console.log(key);
console.log(Object.values(student));
console.log(Object.entries(student));
Object.freeze(student);
student.name = "Lemon";
console.log(Object.values(student));


