/*
 * @Author: lu
 * @Date: 2021-07-02 13:58:01
 * @LastEditTime: 2021-07-02 18:03:31
 * @FilePath: \TypeScript\03_types.ts
 * @Description:
 */
// 可以直接使用字面量进行类型声明
var a;
a = 10;
// a = 11; // 此行报错
// 可以使用 | 来链接多个类型（联合类型）
var b;
b = 'male';
b = 'female';
// b = 'hee' // 此行好搓
// any 表示任意类型，一个变量设置类型any后相当于对该变量关闭了TS的类型检测
var c;
c = 'hello';
c = 10;
c = true;
var d; // 隐式any
d = 'h';
// unknown 表示未知类型的值
var e;
e = 10;
e = 'hello';
var s;
s = c; // any类型可污染其他变量类型
// unknown 实际上就是一个类型安全的any
// nuknown 类型的变量，不能直接赋值给其他变量
if (typeof e === "string") {
    s = e;
}
// s = e // 报错
// 类型断言 可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *   变量 as 类型
 *   <类型>变量
*/
s = e;
s = e;
// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn() { }
// never 表示永远不会返回结果
function fn2() {
    throw new Error('报错了！');
}
// object表示一个js对象 （不常用）
var f;
f = {};
f = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法： {属性名：属性值，属性名：属性值}
// 在属性后加？，表示属性是可选的
var g;
g = { name: 'lily', age: 10 };
// [propName: string]: any 表示任意类型的属性
var h;
h = { name: 'lucy', age: 19, gender: '女' };
/**
 * 设置函数结构的类型声明：
 *     语法：(形参:类型,形参:类型,...) => 返回值
*/
var k;
k = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组类型申明
 *  类型[]
 *  Arrsy<>
*/
// string[] 表示字符串数组
var m;
m = ['a', 'b', 'c'];
// number[] 表示数值数组
var n;
n = [1, 2, 3];
var o;
o = [4, 5, 6];
/**
 * 元组：就是固定长度的数组
 *  语法：[类型，类型，类型]
*/
var p;
p = ['hello', 123];
/**
 * enum 枚举
*/
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 0] = "Female";
})(Gender || (Gender = {}));
var q;
q = { name: 'lily', gender: Gender.Female };
console.log(q.gender === Gender.Female);
