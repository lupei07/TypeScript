/*
 * @Author: lu
 * @Date: 2021-07-09 17:02:25
 * @LastEditTime: 2021-07-09 17:03:09
 * @FilePath: \TypeScript\useTS\src\moduls\Food.ts
 * @Description: 
 */
class Food {
    // 定义一个属性表示实物所对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改位置
    change() {
        // 生成一个随机的位置
        // 位置最小是0，最大是290
        // 移动一次是10像素，所以食物的坐标是10的倍数
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

export default Food;