<!--
 * @Author: lu
 * @Date: 2021-07-01 17:42:11
 * @LastEditTime: 2021-07-07 15:21:04
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