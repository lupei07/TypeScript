"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: lu
 * @Date: 2021-07-09 17:02:25
 * @LastEditTime: 2021-08-16 16:08:47
 * @FilePath: \TypeScript\useTS\src\moduls\Food.ts
 * @Description:
 */
var Food = /** @class */ (function () {
    function Food() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById("food");
    }
    Object.defineProperty(Food.prototype, "X", {
        // 定义个获取食物X轴坐标的方法
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "Y", {
        // 定义一个获取食物Y轴坐标的方法
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    // 修改位置
    Food.prototype.change = function () {
        // 生成一个随机的位置
        // 位置最小是0，最大是290
        // 移动一次是10像素，所以食物的坐标是10的倍数
        var top = Math.round(Math.random() * 29) * 10;
        var left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    };
    return Food;
}());
exports.default = Food;
