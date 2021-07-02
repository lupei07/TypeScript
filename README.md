<!--
 * @Author: lu
 * @Date: 2021-07-01 17:42:11
 * @LastEditTime: 2021-07-02 18:48:11
 * @FilePath: \TypeScript\README.md
 * @Description: 
-->
# TypeScript
### TypeScript是什么？
    - 以JavaScript为基础构造的语言，一个JavaScript的超集，可以在任何支持JavaScript的平台中执行，TypeScript扩展了JavaScript，并添加了类型，但是不能被JS解析器直接执行，需要编程成js在访问

### TypeScript 开发环境搭建
    1. 使用npm全局安装typescript  `npm i -g typescript`
    2. 创建一个ts文件
    3. 使用tsc对ts文件进行编译  `tsc xxx.ts`
    
### 基本类型
|类型|例子|描述|
|:-|:-:|-:|
|number|1, -33, 2.5|任意数字|
|string|'hello', 'hi'|任意字符串|
|boolean|true, false|布尔值true或false|
|字面量|其本身|限制变量的值就是字面量的值|
|any|*|任意类型|
|unknown|*|类型安全的any|
|void|空值(undefined)|没有值(或undefined)|
|never|没有值|不能是任何值|
|object|{name:"张三"}|任意的JS对象|
|array|[1,2,3]|任意JS数组|
|tuple|[4,5]|元素，TS新增类型，固定长度数组|
|enum|enum(A,B)|枚举，TS中新增类型|

- number
    - ```js
        let decimal:number = 6;
        let hex:number = 0xf00d;
        ```
- boolen
    - ```js
        let isDone: boolean = true;
        ```
- string
    - ```js
        let color: string = 'blue';
        color = 'red';
        ```
- 字面量
    - 也可以使用字面量去指定变量的类型，通过字面量也可以确定变量的取值范围
    - ```js
        let a: 10;
        a = 10;
        // a = 11; // 此行报错
        // 可以使用 | 来链接多个类型（联合类型）
        let b: 'male' | 'female';
        b = 'male';
        b = 'female';
        // b = 'hee' // 此行报错
        ``` 
- any (不建议使用)
    - 表示任意类型，一个变量设置类型any后相当于对该变量关闭了TS的类型检测
    - ```js
        let d: any = 4;
        d: = 'hello';
        let d; // 隐式any
        d = 'h';
        ```
    - any类型可污染其他变量类型
    - ```js
        let s: string;
        s = d; // 此时s也变成any类型 
        ```
- unknown
    - ```js
        let e: unknown;
        e = 10;
        e = 'hello'
        ```
    - nuknown 类型的变量，不能直接赋值给其他变量
    - ```js
        if (typeof e === "string") {
            s = e
        }
        // 类型断言 可以用来告诉解析器变量的实际类型
        /**
        * 语法：
        *   变量 as 类型
        *   <类型>变量
        */
        s = e as string;
        s = <string>e;
        ```
- void
    - 用来表示空，以函数为例，就表示没有返回值的函数
    - `function fn(): void { }`
- never
    - 表示永远不会返回结果
    - ```js
        function fn2(message:string): never {
            throw new Error(message)
        }
        ```
- object
    - ```js
        // (不常用)
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

        ```
- array
    - ```js 
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
        ```
- tuple
    - ```js
        /**
         * 元组：就是固定长度的数组
        *  语法：[类型，类型，类型]
        */
        let p: [string, number];
        p = ['hello', 123];
        ```
- enum 
    - ```js
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
        ```
- 类型断言
    - 有些情况下，变量的类型对于我们来说是很明确的，但是TS编译器并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：
    - 第一种
        - ```js
            s = e as string;
            ```
    - 第二种
        - ```js
            s = <string>e;
            ```