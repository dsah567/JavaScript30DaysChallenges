//Activity 1 Class Defination
class Person{
    constructor(){
        this.name="Dipu"
        this.age=23
    }

    greeting(){
        return `Hello ${this.name} good morning`
    }

    updateAge(n){
        this.age=n
        console.log(`Your age is ${this.age}`)
    }

    static genericGreeting(){
        console.log("Hello");
    }

    get fullname(){
        return `${this.name}  Sah`
    }

    set nam(na){
        this.name=na
    }

}

let obj = new Person()
// console.log(obj.greeting())
// obj.updateAge(22)

//Activity 2 Class Inheritance 
class Student extends Person{
    static totalStudent=0
    constructor(){
        super()
        this.studentID=1
        Student.totalStudent++
    }
    studID(){
        return this.studentID
    }
    greeting(){
        return `Hello ${this.name} good morning. Your ID is ${this.studentID}`
    }
}
// let obj2 = new Student()
// console.log(obj2.studID());
// console.log(obj2.name);
// console.log(obj2.greeting());

//Activity 4 Static method and properties
// Person.genericGreeting()
// console.log(Student.totalStudent);

//Activity 4 Getter and setter
console.log(obj.fullname)
obj.nam="Kumar"
console.log(obj.fullname)