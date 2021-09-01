/*
 * @Author: lu
 * @Date: 2021-09-01 16:06:58
 * @LastEditTime: 2021-09-01 17:50:34
 * @FilePath: \TypeScript\04_decorator.ts
 * @Description:
 */
// 1. 普通装饰器
// function logClass(params: any) {
//     // parama 就是当前类
//     console.log(params);
//     params.prototype.apiUrl = '动态扩展的属性';
//     params.prototype.run = function () {
//         console.log('我是一个run方法');
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logClass
// class HttpClient {
//     constructor() {
//     }
//     getDate() { }
// }
// var http: any = new HttpClient();
// http.run()
// 2. 装饰器工厂
// function logClass(params: string) {
//     return function (target: any) {
//         // target 就是当前类
//         console.log('target', target);
//         console.log('parmas', params);
//     }
// }
// @logClass('hello')
// class HttpClient {
//     constructor() {
//     }
//     getDate() { }
// }
// var http: any = new HttpClient();
// 3. 重载构造函数
// function logClass(target: any) {
//     return class extends target {
//         apiUrl = '我是修改后的数据'
//         getData() {
//             console.log('this', this); //class_1 { apiUrl: '我是修改后的数据' }
//             this.apiUrl = this.apiUrl + '----'
//             console.log(this.apiUrl);
//         }
//     }
// }
// @logClass
// class HttpClient {
//     public apiUrl: string
//     constructor() {
//         this.apiUrl = '我是构造函数里面的apiUrl'
//     }
//     getData() {
//         console.log(this.apiUrl);
//     }
// }
// var http: any = new HttpClient();
// http.getData()
// 4. 属性装饰器
// // 类装饰器
// function logClass(params: any) {
//     return function (target) {
//         console.log(params);
//     }
// }
// // 属性装饰器
// function logProperty(params: any) {
//     return function (target: any, attr: any) {
//         console.log(target);
//         console.log(attr);
//         target[attr] = params
//     }
// }
// @logClass('xxxx')
// class HttpClient {
//     @logProperty('http://baidu.com')
//     public url: any
//     constructor() {
//     }
//     getData() {
//         console.log(this.url); //http://baidu.com
//     }
// }
// var http: any = new HttpClient();
// http.getData()
// 5. 方法装饰器
// function get(params: any) {
//     return function (target: any, methodName: any, desc: any) {
//         console.log(target);
//         console.log(methodName); // 
//         console.log(desc.value); // 类中被装饰的方法（getData）
//         target.apiUrl = params
//         target.run = function () {
//             console.log('我是方法装饰器里的run方法');
//         }
//         // 修改方法 把装饰器方法里面传入的所有参数改为string类型
//         // 1. 保存当前的方法
//         var oMethod = desc.value;
//         desc.value = function (...args: any[]) {
//             args = args.map((value) => {
//                 return String(value)
//             })
//             console.log('args', args); // [ '123', 'getdata' ]
//             oMethod.apply(this, args)
//         }
//     }
// }
// class HttpClient {
//     public url: any
//     constructor() {
//     }
//     @get('http://baidu.com')
//     getData(...args: any[]) {
//         console.log('类里面的参数', args); // [ '123', 'getdata' ]
//         console.log('我是getData里面的方法');
//     }
// }
// var http: any = new HttpClient();
// console.log(http.apiUrl); // http://baidu.com
// http.run() // 我是方法装饰器里的run方法
// http.getData(123, 'getdata')
// 5. 方法属性装饰器
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.apiUrl = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams('xxxxx'))
    ], HttpClient.prototype, "getData", null);
    return HttpClient;
}());
var http = new HttpClient();
http.getData(123124);
console.log(http.apiUrl);
