// CODE here for your Lambda Classes
class Person {
  constructor(lambda) {
    this.name = lambda.name;
    this.age = lambda.age;
    this.location = lambda.location;
  }
  speak() {
    return ` Hello my name is ${this.name}, I am from ${this.location}!`;
  }
}
class Instructor extends Person {
  constructor(lambda) {
    super(lambda);
    this.specialty = lambda.specialty;
    this.favLanguage = lambda.favLanguage;
    this.catchPhrase = lambda.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`;
  }
}
class Student extends Person {
  constructor(lambda) {
    super(lambda);
    this.previousBackground = lambda.previousBackground;
    this.className = lambda.className;
    this.favSubjects = lambda.favSubjects;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}
class ProjectManager extends Instructor {
  constructor(lambda) {
    super(lambda);
    this.GradClassName = lambda.GradClassName;
    this.favInstructor = lambda.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}\'s code on ${subject}`;
  }
}

const brit = new Instructor({
  name: "Brit",
  location: "Canada",
  age: 68,
  favLanguage: "JavaScript",
  specialty: "debugging",
  catchPhrase: "resource"
});
const josh = new Instructor({
  name: "josh",
  location: "utah",
  age: 20,
  favLanguage: "less",
  className: "web25",
  specialty: "talking",
  catchPhrase: "yoWZA"
});
const Andrew = new Student({
  name: "Andrew",
  location: "utah",
  age: 22,
  previousBackground: "work hard",
  className: "web25",
  favSubjects: ["css", "html", "javascript"]
});
const dustin = new Student({
  name: "dustin",
  location: "NewMexico",
  age: 21,
  previousBackground: "drug dealer",
  className: "web22",
  favSubjects: ["react", "cs", "javascript"]
});
const vick = new ProjectManager({
  name: "vick",
  location: "perto rico",
  age: 28,
  favLanguage: "react",
  className: "pt9",
  specialty: "helping",
  catchPhrase: "hola me llamo vick",
  gradClassName: "not a grad yet",
  favInstructor: "karen"
});
const Nick = new ProjectManager({
  name: "Nick",
  location: "utah",
  age: 20,
  favLanguage: "react",
  className: "dont know",
  specialty: "working out",
  catchPhrase: "hi my name is nick",
  gradClassName: "web1",
  favInstructor: "jimmy"
});
console.log("**********Instructor*********");
console.log(brit.demo("math"));
console.log(josh.grade(Andrew, "javascript"));

// console.log("**********Student*********")
dustin.listsSubjects();
console.log(Andrew.PRAssignment("less"));
console.log(dustin.sprintChallenge("javascript"));
// console.log("**********Project Manager*********")
console.log(vick.standUp("vick.web25"));
console.log(Nick.debugsCode(Andrew, "JS"));
