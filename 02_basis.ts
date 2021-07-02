/*
 * @Author: lu
 * @Date: 2021-07-02 09:54:23
 * @LastEditTime: 2021-07-02 10:55:50
 * @FilePath: \TypeScript\02_basis.ts
 * @Description: 
 */
// 声明一个变量a，同时指定它的类型为Number
let a: number;
// a 的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
// a = 'hello' // 此行代码会报错，以为变量a的类型是number，不能赋值字符串

let b: string;
b = 'hello'

// 声明变量直接赋值
let c: boolean = false;
c = true;

// 如果变量的声明和赋值同时进行的，TS可以自动对变量进行类型检测
let d = false;
// d = 'hello' // 此行报错

function sum(a: number, b: number): number {
    return a + b;
}
sum(123, 456)