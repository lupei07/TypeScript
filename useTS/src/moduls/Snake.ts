/*
 * @Author: lu
 * @Date: 2021-07-09 17:04:24
 * @LastEditTime: 2021-07-12 11:15:25
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
        // 如果新值和旧值一样就不设置
        if (this.X === value) {
            return;
        }
        // X的范围0-290
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        // 修改水平坐标，在左右移动，在向左移动时，不能向右掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生掉头，让蛇向反方向继续移动
            if (value > this.X) {
                // 如果新值大于旧值X，则说明蛇向右掉头，应该使他继续向左走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }

        }

        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value: number) {
        // 如果新值和旧值一样就不设置
        if (this.Y === value) {
            return;
        }
        // X的范围0-290
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了');
        }
        // 修改垂直方向，在上下移动，在向上移动时，不能向下掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果发生掉头，让蛇向反方向继续移动
            if (value > this.Y) {
                // 如果新值大于旧值X，则说明蛇向右掉头，应该使他继续向左走
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }

        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 添加一个身体移动的方法
    moveBody() {
        /**
         * 将后面的身体设置为前边身体的位置
        */
        // 遍历获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 蛇头是否撞到身体
    checkHeadBody() {
        // 获取所有的身体，检测其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了~~')
            }
        }
    }

}

export default Snake;