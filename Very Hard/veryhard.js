
// Constructs the person container 
function person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

// Person methods established 
person.prototype.exercise = function() {
    console.log("Running is fun ... I guess")
}

person.prototype.fetchjob = function() {
    console.log(`${this.name} is a ${this.job}`);
}

// Programmer inherits the data from the person container 'name job and age' with the .call 
function programmer(name, job, age, languages, busy) {
    person.call(this, name, job, age);
    this.languages = languages || [];
    this.busy = busy !== undefined ? busy : true;
}

// Inherits the person methods 
programmer.prototype = Object.create(person.prototype);
programmer.prototype.constructor = programmer; 


programmer.prototype.completeTask = function() {
    this.busy = false;
}

programmer.prototype.acceptNewTask = function() {
    this.busy = true;
}

programmer.prototype.offerNewTask = function() {
    if (this.busy) {
        console.log(`${this.name} cannot take on any new task currently`);
    } else {
        console.log(`${this.name} is available to take on new tasks`)
    }
}

programmer.prototype.learnLanguages = function() {
    for (let i = 0; i < arguments.length; i++) {
        this.languages.push(arguments[i]);
    }
};

programmer.prototype.listLanguages = function() {
    console.log(`${this.name} knows: ${this.languages.join(", ")}`);
}



// Testing for console logs 
const coder1 = new person("Jordan", "Full Stack", 26)
const c1 = new programmer("Latori", "Master Insructor", 30, ["HTML", "C#", "LUA"]);
const c2 = new programmer("Janaya", "Commander Coder", 27, ["HTML", "SASS”, ”Ruby"]);
const c3 = new programmer("Malika", "Cyber Wizard", 26,[("HTML", "CSS", "JS", "R")]);


c1.learnLanguages("CSS")
c2.learnLanguages("C++")
c3.learnLanguages("JAVA")


// Will list the langues that the programmers knows 
c1.listLanguages(); 
c2.listLanguages();
c3.listLanguages();

// Display availability function 
c1.offerNewTask();
c1.completeTask();
c1.offerNewTask();

coder1.exercise();
coder1.fetchjob();