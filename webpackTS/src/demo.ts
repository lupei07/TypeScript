/*
 * @Author: lu
 * @Date: 2021-08-18 15:42:35
 * @LastEditTime: 2021-08-18 17:13:22
 * @FilePath: \TypeScript\webpackTS\src\demo.ts
 * @Description: 
 */
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;