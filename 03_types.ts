/*
 * @Author: lu
 * @Date: 2021-07-02 13:58:01
 * @LastEditTime: 2021-07-02 18:40:32
 * @FilePath: \TypeScript\03_types.ts
 * @Description:
 */
// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;
// a = 11; // 此行报错

// 可以使用 | 来链接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';
// b = 'hee' // 此行报错

// any 表示任意类型，一个变量设置类型any后相当于对该变量关闭了TS的类型检测
let c: any;
c = 'hello';
c = 10;
c = true;

let d; // 隐式any
d = 'h';

// unknown 表示未知类型的值
let e: unknown;
e = 10;
e = 'hello'

let s: string;
s = c; // any类型可污染其他变量类型
// unknown 实际上就是一个类型安全的any
// nuknown 类型的变量，不能直接赋值给其他变量
if (typeof e === "string") {
    s = e
}
// s = e // 报错
// 类型断言 可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *   变量 as 类型
 *   <类型>变量
*/
s = e as string;
s = <string>e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void { }

// never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错了！')
}

// object表示一个js对象 （不常用）
let f: object;
f = {};
f = function () { }

// {} 用来指定对象中可以包含哪些属性
// 语法： {属性名：属性值，属性名：属性值}
// 在属性后加？，表示属性是可选的
let g: { name: string, age?: number };
g = { name: 'lily', age: 10 }

// [propName: string]: any 表示任意类型的属性
let h: { name: string, [propName: string]: any }
h = { name: 'lucy', age: 19, gender: '女' }

/**
 * 设置函数结构的类型声明：
 *     语法：(形参:类型,形参:类型,...) => 返回值
*/
let k: (a: number, b: number) => number;
k = function (n1, n2): number {
    return n1 + n2
}

/**
 * 数组类型申明
 *  类型[]
 *  Array<> 
*/
// string[] 表示字符串数组
let m: string[];
m = ['a', 'b', 'c'];
// number[] 表示数值数组
let n: number[];
n = [1, 2, 3];
let o: Array<number>;
o = [4, 5, 6]

/**
 * 元组：就是固定长度的数组
 *  语法：[类型，类型，类型]
*/
let p: [string, number];
p = ['hello', 123];

/**
 * enum 枚举
*/
enum Gender {
    Male = 1,
    Female = 0
}

let q: { name: string, gender: Gender }
q = { name: 'lily', gender: Gender.Female }
console.log(q.gender === Gender.Female);


// & 表示同时
let r: { name: string } & { age: number }
r = { name: '123', age: 19 }

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let t: myType;
t = 2