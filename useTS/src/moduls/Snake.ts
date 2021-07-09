/*
 * @Author: lu
 * @Date: 2021-07-09 17:04:24
 * @LastEditTime: 2021-07-09 17:18:18
 * @FilePath: \TypeScript\useTS\src\moduls\Snake.ts
 * @Description: 
 */
class Snake {
    element: HTMLElement;
    // 表示蛇的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value: number) {
        this.head.style.left = value + '';
    }
    set Y(value: number) {
        this.head.style.top = value + '';
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake;