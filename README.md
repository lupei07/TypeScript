<!--
 * @Author: lu
 * @Date: 2021-07-01 17:42:11
 * @LastEditTime: 2021-07-14 16:22:03
 * @FilePath: \TypeScript\README.md
 * @Description: 
-->
# TypeScript
## TypeScript是什么？
    > 以JavaScript为基础构造的语言，一个JavaScript的超集，可以在任何支持JavaScript的平台中执行，TypeScript扩展了JavaScript，并添加了类型，但是不能被JS解析器直接执行，需要编程成js在访问

## TypeScript 开发环境搭建
    1. 使用npm全局安装typescript  `npm i -g typescript`
    2. 创建一个ts文件
    3. 使用tsc对ts文件进行编译  `tsc xxx.ts`
    
## 基本类型
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

## 编译选项
- 当前文件自动编译：
    - 编译文件时，使用 `-w` 指令后，TS编译器会自动见识文件的变化，并在文件发生变化时对文件进行重新编译
    - `tsc xxx.ts -w`
- 批量自动编译
    - 如果直接使用`tsc`指令，则可以自动将当前的所有ts文件编译为js文件。
    - 但是能直接使用tsc命令的前提时，要先在目录下创建一个ts的配置文件 `tsconfig.json`
    - tsconfig.json 是一个JSON文件，添加配置文件后，只需tsc命令即可完成对整个项目的编译
    - 配置选项：
        - include
            - 定义希望被编译文件所在的目录
            - 默认值： ["**/*"]
            - 示例：`"include": ["./src/**/*","./tests/**/*"],` 即表示，所有src目录和tests目录下的文件都会被编译
        - exclude
            - 定义需要排除在外的目录
            - 默认值：["node_modules", "bower_components", "jspm_package"]
            - 示例：`"exclude": ["./src/hello/**/*"]`即表示，src目录下的hello目录下的文件都不会被编译
        - extends
            - 定义被继承的配置文件
            - 示例：`"entends": "./config/base"`即表示，当前配置文件中会自动包含config目录下base.json中的所有配置信息
        - files
            - 指定被编译的文件的列表，只有需要编译文件少时才会用到
            - 示例： `"files": ["core.ts", "sys.ts"]`
        - compilerOptions
            - 编译选项是配置文件中非常重要也比较复杂的配置选择
            - target
                - 设置ts代码编译的目标版本
                - 可选值： ES3(默认)、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext
                - 示例： `compilerOptions: {"target": "ES6"}`
            - lib（一般不改）
                - 指定代码运行时所包含的库（宿主环境）
                - 可选值：ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost......
            - module
                - 指定要使用的模块化的规范
                - 可选值：CommonJS、UMD、AMD、System、ES2020、ESNext、None
            - outDir
                - 用来指定编译后文件所在的目录
                - 示例：`outDir: "./dist"`
            - outFile
                - 所有的去怒作用域中的代码会合并到同一个文件中
                - 示例：`outFile: "./dist/app.js"`
            - allowJS
                - 是否对js文件进行编译，默认是false
            - checkJS
                - 是否检查js代码是否符合语法规范，默认是false
            - removeComments
                - 是否移除注释
            - noEmit
                - 不生成编译后的文件
            - sourceMap
                - 是否生成sourceMap，默认是false
            - 严格检查
                - strict
                    - 所以严格检查的总开关，启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
                - noEmitOnError
                    - 当有错误时不生成编译后的文件
                - alwayStrict
                    - 用来设置编译后的文件是否使用严格模式，默认false
                    - 当有引入模块的时候，js会自动进入到严格模式
                - noImplicitAny
                    - 不允许隐私的any类型
                - noImplicitThis
                    - 不允许不明确类型的this
                - strictNullChecks
                    - 严格的检测空值
                    - 示例：`box?.addEventLister('click',function(){})`box可能是个null
            
    - ```json
        {
        "include": [       //配置些TS文件需要被编译，这里是根目录/src/任意目录/任意文件
            "./src/**/*"
        ],
        "exclude": [],     //不包含哪些文件
        "files": [],       //和include很像，只不过include列出路径，files直接一一列出文件
        "compilerOptions":{ //编译器配置选项
            "target": "es5",           //target用来指定ts被编译为ES版本，默认ES3 
            "module": "commonjs",      //module指定模块化的规范
            "lib": [],                                  
            //lib用来指定项目中要使用的库，使用场景一般在非浏览器环境下运行，比如在nodejs下我要使用dom，"lib": ["dom"]
            "outDir": "./",            //outDir指定编译后文件所在的目录 "outDir": "./dist", 存于个目录下dist文件夹
            "outFile":"./dist/app.js", //outFile 将代码合并为一个文件，但其实项目开发更多让打包工具去做这个事
            "allowJs": false,          //是否对js文件进行编译，默认false
            "checkJs": false,          //检查js文件符合语法规范，一般和allowJs配套使用
            "removeComments": false,   //是否移除备注
            "noEmitOnError": false,    //当有错误时不生成编译后的文件
            "strict":false,            //所有严格检查总开关
            "alwaysStrict": true,      //设置编译后JS文件是否使用严格模式，默认false
            "noImplicitAny": false,    //不允许隐式any类型
            "noImplicitThis": false,   //不允许不明确类型this
            "strictNullChecks": false, //严格检查空值（或者可能成为空值的变量）
        }
    }
    ```

## 结合webpack
- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边已webpack为例介绍一下如何结合构建工具使用TS
1. 初始化项目
    - 执行命令 `npm init -y`
    - 作用：创建一个packpage.json文件
2. 下载构建工具
    - 安装开发依赖 `npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin html-webpack-plugin`
    - webpack: 构建工具webpack
    - webpack-cli: webpack的命令行工具
    - html-webpack-plugin: webpack中html插件，用来自动创建html文件
    - webpack-dev-server: webpack的开发服务器
    - typescript: ts编译器
    - ts-loader: 用于webpack的TypeScript加载器
    - clean-webpack-plugin：用于删除/清理您的构建文件夹（webpack中的清除插件，每次构建都会先清除目录）
3. 创建webpack的配置文件
    - 根目录创建 `webpack.config.js`文件
    - ```js
        // 引入一个包
        const path = require(path);

        // webpack中的所有的配置信息都应该写在module.exports中
        module.exports = {
            // 入口文件
            entry: "./src/index.ts",
            // 指定打包文件所在目录
            output: {
                // 指定打包后的目录
                path: path.resolve(__dirname, 'dist'), // 等同 "./dist"
                filename: "bundle.js",
                // 告诉webpack不实用箭头函数
                environment: {
                    arrowFunction: false
                }
            },
            // 指定webpack打包时要使用的模块
            module: {
                // 指定要加载的规则
                rules: [
                    {
                        // test指定的是规则生效的文件-- 用ts-loader去处理以ts结尾的文件
                        test: /\.ts$/,
                        // 要使用的loader
                        // use: 'ts-loader',
                        use: [
                        // 配置babel
                        {
                            // 指定加载器
                            loader: "babel-loader",
                            // 设置babel
                            options: {
                                // 设置预定义的环境
                                presets: [
                                    [
                                        // 指定环境的插件
                                        "@babel/preset-env",
                                        // 配置信息
                                        {
                                            // 要兼容的目标浏览器
                                            "targets": {
                                                "chrome": "58",
                                                "ie": "11"
                                            },
                                            // 指定corejs的版本
                                            "corejs": "3",
                                            // 使用corejs的方式 usage 表示按需加载
                                            "useBuiltIns": "usage"
                                        }
                                    ]
                                ]
                            }
                        },
                        {
                            loader: "ts-loader",

                        }
                    ],
                        exclude: /node_modules/
                    }
                ]
            }

        }
      ```
4. 创建ts的配置文件
    - 根目录创建 `tsconfig.json` 文件
    - ```json
        {
        "compilerOptions": {
            "module": "ES2015",
            "target": "ES2015",
            "strict": true
        }
    }
    ```
5. 修改package.json配置
    - ```json
        {
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack",
            "start": "webpack serve --open chrome.exe"
        },
        }

        ```
6. 自动创建html文件（html-webpack-plugin）
    - ```js
        // 引入html插件
        const HTMLWebpackPlugin = require('html-webpack-plugin');
        // 配置webpack插件
        plugins: [
            new HTMLWebpackPlugin({
                title: '这是一个自定义的title', // 默认html指定title
                template: "./src/index.html" //指定模板
            }),
        ]
        ```
7. webpack的开发服务器
    - 执行命令 `npm i -D webpack-dev-server`
    - 项目改变自动刷新
8. 打包文件
    - 在`package.json`文件中scripts中加入`build："webpack"`
    - 执行命令：`npm run build`
    - 执行`npm start`来启动开发服务器

## Babel
- 经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

1. 安装依赖包：
     - ```npm i -D @babel/core @babel/preset-env babel-loader core-js```
     - 共安装了4个包，分别是：
       - @babel/core
         - babel的核心工具
       - @babel/preset-env
         - babel的预定义环境
       - @babel-loader
         - babel在webpack中的加载器
       - core-js
         - core-js用来使老版本的浏览器支持新版ES语法

  2. 修改webpack.config.js配置文件

     - ```javascript
       ...略...
       module: {
           rules: [
               {
                   test: /\.ts$/,
                   use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式 usage 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",

                    }
                ],
                   exclude: /node_modules/
               }
           ]
       }
       ...略...
       ```

     - 如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。

# 第二章：面向对象

面向对象是程序中一个非常重要的思想，它被很多同学理解成了一个比较难，比较深奥的问题，其实不然。面向对象很简单，简而言之就是程序之中所有的操作都需要通过对象来完成。

- 举例来说：
  - 操作浏览器要使用window对象
  - 操作网页要使用document对象
  - 操作控制台要使用console对象

一切操作都要通过对象，也就是所谓的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。

在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。所以简而言之，在程序中一切皆是对象。

## 1、类（class）

要想面向对象，操作对象，首先便要拥有对象，那么下一个问题就是如何创建对象。要创建对象，必须要先定义类，所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象，举例来说：可以通过Person类来创建人的对象，通过Dog类创建狗的对象，通过Car类来创建汽车的对象，不同的类可以用来创建不同的对象。

- 定义类：

  - ```typescript
        class 类名 {
            属性名: 类型;
            
            constructor(参数: 类型){
                this.属性名 = 参数;
            }
            
            方法名(){
                ....
            }
        
        }
    ```

- 示例：

  - ```typescript
        class Person{
            /**
            * 直接定义的属性是实例属性，需要通过对象的实例去访问：
            *    const per = new Person();
            *    per.name
            *    
            *    static开头的属性是静态属性（累属性），可以直接通过累去调用
            *    Person.age
            *    
            *    readonly开头的属性表示一个只读的属性无法修改    
            *    
            */
            name: string;
            age: number;
            // constructor 被称为构造函数  会在对象创建时调用
            constructor(name: string, age: number){
                // 在实例方法中，this就表示当前的实例
                this.name = name;
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
    ```

- 使用类：

  - ```typescript
    const p = new Person('孙悟空', 18);
    p.sayHello();
    ```
## 2、面向对象的特点

- 封装

  - 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

  - 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

  - 只读属性（readonly）：

    - 如果在声明属性时添加一个readonly，则属性便成了只读属性，修饰后，该属性就不能在外部被随意修改，类中的普通方法也不能修改，但是在构造函数中，可以对readonly属性进行修改
    - 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这只读的成员属性，外部可以访问，但不能修改
    - 构造函数中的阐述可以使用public及privte和protected进行修饰，无论是哪个进行修饰，该类中都会自动的添加这么一个属性成员
    - 示例
    - ```typescript
        // 构造函数中的name参数，一点使用readonly进行修饰后，那么该name参数可以叫参数属性
        // 构造函数中的name参数，一点使用readonly进行修饰后，那么Person中就有了一个name的属性成员
        // 构造函数中的name参数，一点使用public进行修饰后，那么Person中就有了一个公共的name的属性成员
        calss Person{
            // name：string // 可以不写
            constructor(readonly name:string='大朋友'){
                // this.name = name; // 可以不写，也能访问到
            }
        }
        const person:Person = new Person('小朋友')
        console.log(person.name) // 小朋友
        ```



  - TS中属性具有三种修饰符：

    - public（默认值）--- 公共的，可以在类、子类和对象中修改
    - protected --- 受保护的 ，可以在类、子类中修改
    - private --- 私有的 ，可以在类中修改

  - 示例：

    - public

      - ```typescript
            class Person{
                public name: string; // 如果什么都不写都是public
                public age: number;
            
                public constructor(name: string, age: number){
                    this.name = name; // 可以在类中修改
                    this.age = age;
                }
            
                public sayHello(){
                    console.log(`大家好，我是${this.name}`);
                }
            }
            
            class Employee extends Person{
                constructor(name: string, age: number){
                    super(name, age);
                    this.name = name; //子类中可以修改
                }
            }
            
            const p = new Person('孙悟空', 18);
            p.name = '猪八戒';// 可以通过对象修改
        ```

    - protected

      - ```typescript
            class Person{
                protected name: string;
                protected age: number;
            
                constructor(name: string, age: number){
                    this.name = name; // 可以修改
                    this.age = age;
                }
            
                sayHello(){
                    console.log(`大家好，我是${this.name}`);
                }
            }
            
            class Employee extends Person{
            
                constructor(name: string, age: number){
                    super(name, age);
                    this.name = name; //子类中可以修改
                }
            }
            
            const p = new Person('孙悟空', 18);
            p.name = '猪八戒';// 不能修改
        ```

    - private

      - ```typescript
            class Person{
                private name: string;
                private age: number;
            
                constructor(name: string, age: number){
                    this.name = name; // 可以修改
                    this.age = age;
                }
            
                sayHello(){
                    console.log(`大家好，我是${this.name}`);
                }
            }
            
            class Employee extends Person{
            
                constructor(name: string, age: number){
                    super(name, age);
                    this.name = name; //子类中不能修改
                }
            }
            
            const p = new Person('孙悟空', 18);
            p.name = '猪八戒';// 不能修改
        ```

  - 属性存取器

    - 对于一些不希望被任意修改的属性，可以将其设置为private

    - 直接将其设置为private将导致无法再通过对象修改其中的属性

    - 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

    - 读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

    - 示例：

      - ```typescript
            class Person{
                private _name: string;
            
                constructor(name: string){
                    this._name = name;
                }
            
                get name(){
                    return this._name;
                }
            
                set name(name: string){
                    this._name = name;
                }
            
            }
            
            const p1 = new Person('孙悟空');
            console.log(p1.name); // 通过getter读取name属性
            p1.name = '猪八戒'; // 通过setter修改name属性
        ```

  - 静态属性

    - 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用，可读取可设置

    - 静态属性（方法）使用static开头。使用的时候通过类名.的这种语法来调用
    - 构造函数是不能通过static来进行修饰的

    - 示例：

      - ```typescript
            class Tools{
                static PI = 3.1415926;
                // 静态方法
                static sum(num1: number, num2: number){
                    return num1 + num2
                }
            }
            
            console.log(Tools.PI);
            Tools.PI = 3.14
            console.log(Tools.sum(123, 456));
        ```

  - this

    - 在类中，使用this表示当前对象

- 继承

  - 继承时面向对象中的又一个特性

  - 通过继承可以将其他类中的属性和方法引入到当前类中

    - 示例：

      - ```typescript
            /**
             * Dog extends Animal
             *  - 此时，Animal被称为父类（基类/超类），Dog被称为子类
             *  - 使用继承后，子类会拥有父类所有的方法和属性
             *  - 通过继承可以将多个类中共有的代码写在一个父类中
             *      - 这样只需要一次即可让所有的子类都同时拥有父类中的属性和方法 
             *  - 如果在子类中添加了父类的相同的方法，则子类方法会覆盖父类方法
             *      - 这种子类覆盖父类方法的形式，我们称为方法的重写
             *  
             *  
            */
            class Animal{
                name: string;
                age: number;
            
                constructor(name: string, age: number){
                    this.name = name;
                    this.age = age;
                }
            }
            
            class Dog extends Animal{
            
                bark(){
                    console.log(`${this.name}在汪汪叫！`);
                }
            }
            
            const dog = new Dog('旺财', 4);
            dog.bark();
        ```

  - 通过继承可以在不修改类的情况下完成对类的扩展

  - 重写

    - 发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

    - 示例：

      - ```typescript
            class Animal{
                name: string;
                age: number;
            
                constructor(name: string, age: number){
                    this.name = name;
                    this.age = age;
                }
            
                run(){
                    console.log(`父类中的run方法！`);
                }
            }
            
            class Dog extends Animal{
            
                bark(){
                    console.log(`${this.name}在汪汪叫！`);
                }
            
                run(){
                    console.log(`子类中的run方法，会重写父类中的run方法！`);
                }
            }
            
            const dog = new Dog('旺财', 4);
            dog.bark();     
        ```

      - 在子类中可以使用super来完成对父类的引用

- 抽象类（abstract class）

    - 抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例
    - 抽象类就是专门用来被继承的类
    - 抽象类中可以添加抽象方法

    - ```typescript
      abstract class Animal{
          abstract run(): void; // 抽象方法
          bark(){
              console.log('动物在叫~');
          }
      }
      
      class Dog extends Animals{
          // 重新的实现抽象类中的方法，此时这个方法就是当前Dog类的实例方法了
          run(){
              console.log('狗在跑~');
          }
      }

      // 不能实例化抽象类的对象
      const ani:Animal = new Animal() // 报错
      ```

    - 使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现

- 函数及函数类型
    - 封装了一些重复使用的代码，在需要的时候直接调用即可
    - js中的书写方式
    - ```js
        // 函数声明，命名函数
        function add(x,y){
            return x+y;
        }
        // 函数表达式，匿名函数
        const add = function(x,y){
            return x+y;
        }
        ```
    - ts的书写方式
    - ```ts
        // 函数声明，命名函数
        function add(x:string, y:string):string{
            return x+y;
        }
        // 函数表达式，匿名函数
        const add = function(x:number, y:number):number{
            return x+y;
        }
        // 完整形式
        // (x:number, y:number) => number 当前的这个函数的类型
        const add:类型 = function(x:number, y:number){}
        const add:(x:number, y:number) => number = function(x:number, y:number){}
        ```
    - 默认参数和可选参数
        - 可选参数：内部的参数使用了?进行修饰，那么久表示该参数可以传入也可以不用传入，叫可选参数
        - 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数
        - ```ts
            function(firstName:string='东方', lastName?:string):stirng{
                if(lastName){
                    return firstName+'_'+lastName
                }else{
                    return firstName
                }
            }
        ```
    - 剩余参数（rest参数）
        - 剩余参数是放在函数声明的时候所有的参数的最后
        - ```ts
            // ...args:string[] -----> 剩余的参数，放在一个字符串的数组中，args里面
            function showMsg(str:string, ...args:string[]){
                console.log(str)    // a
                console.log(args)   // ['b','c','d','e']
            }
            showMsg('a','b','c','d','e')
        ```

    - 函数重载
        - 函数名字相同，函数的参数及个数不同
        - ```ts
            // 函数重载声明
            function add(x:string, y:string):string
            function add(x:number, y:number):number

            // 函数声明
            function add(x:string|number, y:string|number):string|number{
                if(typeof x === 'string' && typeof y === 'string'){
                    return x+y; // 字符串相加
                }else if(typeof x === 'number' && typeof y === 'number'){
                    return x+y; // 数字相加
                }
            }

            console.log(add('诸葛','孔明'));
            console.log(add(10,20));
            // 如果此时传入非法数据， 如果没有开启函数重载，页面不会飘红报错
            console.log(add('诸葛',10)); 
            console.log(add(10,'孔明'));

        ```

    
    

- 多态
    - 多态：父类型的引用指向了之类型的对象，不同类型的对象对相同的方法，产生了不同的行为
    - 示例：
    - ```typescript
      abstract class Animal{
          // 定义一个属性
          name: string
          constructor(name: string){
              this.name = name
          }
          run(distance: number = 0){
              console.log(`跑了${distance}米这么远的距离`, this.name)
          }
      }
      
      class Dog extends Animals{
          constructor(name: string){
              super(name)
          }
          run(distance: number = 5){
              console.log(`跑了${distance}米这么远的距离`, this.name)
          }
      }
      class pig extends Animals{
          constructor(name: string){
              super(name)
          }
          run(distance: number = 10){
              console.log(`跑了${distance}米这么远的距离`, this.name)
          }
      }

      // 实例化父类对象
      const ani: Animal = new Animal('动物')
      ani.run() // 跑了0米这么远的距离，动物
      // 实例化子类对象
      const dog:Dog = new Dog('大黄')
      dog.run() // 跑了5米这么远的距离，大黄
      const pig:Pig = new Pig('八戒')
      pig.run() // 跑了10米这么远的距离，八戒


      // 父类和子类的关系：父子关系，此时，父类类型创建了之类对象
      const dog1:Animals = new Dog('小黄')
      dog1.run() // 跑了5米这么远的距离，小黄
      const pig1:Animals = new Pig('小猪')
      pig1.run() 

      // 该函数需要的参数是Animal类型的
      function showRun(ani: Animal){
          ani.run()
      }
      showRun(dog1) // 跑了5米这么远的距离，小黄
      showRun(pig1) // 跑了10米这么远的距离，小猪
      ```


## 3、接口（Interface）

接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法。接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。

- 示例（检查对象类型）：

  - ```typescript
        /**
         * 接口可以在定义类的时候去限制类的结构
         *  接口中所有的属性都不能有实际的值
         *  接口只定义对象的结构，而不考虑实际值
         *   在接口中，所有的方法都是抽象方法
         * 
        */
        interface Person{
            name: string;
            sayHello():void;
        }
        
        function fn(per: Person){
            per.sayHello();
        }
        
        fn({name:'孙悟空', sayHello() {console.log(`Hello, 我是 ${this.name}`)}});
    
    ```

- 示例（实现）

  - ```typescript
        /**
         * 定义类时，可以使类去实现一个接口
         *  实现接口就是使类满足接口的要求
         *  类可以实现多个接口，一个类同事也可以被多个接口进行约束 
         *  class Person2 implements Person,Person2{}
        */
        interface Person{
            name: string;
            sayHello():void;
        }
        interface IFly{
            fly()
        }
        interface ISwim{
            swim()
        }
        
        class Student implements Person{
            constructor(public name: string) {
            }
        
            sayHello() {
                console.log('大家好，我是'+this.name);
            }
        }
        // 总结：类可以通过接口的方式，来定义当前这个类的类型
        // 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现

        interface IMyFlyAndSwim extends IFly,ISwim{}
        class Person3 implements IMyFlyAndSwim{
            fly(){
                console.log(123)
            }
            swim(){
                console.log(345)
            }
        }
        const person3 = new Person3()
        person3.fly();
        person3.swim();

        // 总结：接口和接口之间叫继承(使用的是extends关键字)，类和接口之间的叫实现（使用的是implements）
    ```

  - 



## 4、泛型（Generic）

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

- 举个例子：
    - ```ts
        function test(arg: any): any{
            return arg;
        }
    ```
    - 上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型
    
    - 使用泛型：

    - ```ts
        function test<T>(arg: T): T{
            return arg;
        }  
        cosnt arr1 = test<string>()
    ```

    - 这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。

    - 那么如何使用上边的函数呢？

        - 方式一（直接使用）：

        - ```typescript
                test(10)
            ```

        - 使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式

        - 方式二（指定类型）：

        - ```typescript
                test<number>(10)
            ```

        - 也可以在函数后手动指定泛型

    - 可以同时指定多个泛型，泛型间使用逗号隔开：

        - ```typescript
        function test<T, K>(a: T, b: K): K{
            return b;
        }
        
        test<number, string>(10, "hello");
        ```

        - 使用泛型时，完全可以将泛型当成是一个普通的类去使用

    - 类中同样可以使用泛型：

        - ```typescript
            class MyClass<T>{
                prop: T;
            
                constructor(prop: T){
                    this.prop = prop;
                }
            }

            const m1:MyClass<number> = new MyClass<number>
        ```

  - 除此之外，也可以对泛型的范围进行约束

    - ```typescript
        interface MyInter{
            length: number;
        }
      
        function test<T extends MyInter>(arg: T): number{
            return arg.length;
        }
      
        // 定义第一个泛型接口
        interface IBaseCRUD<T>{
            data: Array<T>
            add: (t:T) => T
            getUserId: (id:number) => T
        }
        // 定义个用户信息表
        class User{
            id?: number
            name: string
            age: number
            constructor(name:string, age:number){
                this.name = name;
                this.age = age
            }
        }

        class UserCRUD implements IBaseCRUD<User>{
            // 用来保存多个User类型的用户信息对象
            data: Array<User>
            // 方法用来存储用户信息对象的
            add(user:User):User{
                user.id = Data.now() + Math.random();
                this.data.push(user);
                return user
            }
            // 方法根据id查询指定的用户信息对象
            getUserId(id:number):User{
                return this.data.find(user => user.id == id)
            }
        }

        // 实例化添加用户信息对象的类UserCRUD
        const userCRUD: UserCRUD = new UserCRUD();
        userCRUD.add(new User('jack', 20));
        userCRUD.add(new User('tom', 21));
        console.log(userCRUD.data)
      ```

    - 使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。

## 练习
- 样式的处理和配置
    - ```npm i -D less less-loader css-loader style-loader```
- 样式兼容
    - ```npm i -D postcss postcss-loader postcss-preset-env```
    - ```json
        // 设置less文件的处理
        {
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                // 引入postcss
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: 'last 2 versions'
                                    }
                                ]

                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }
    ```

