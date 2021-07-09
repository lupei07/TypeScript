/*
 * @Author: lu
 * @Date: 2021-07-09 17:19:09
 * @LastEditTime: 2021-07-09 18:49:41
 * @FilePath: \TypeScript\useTS\src\moduls\GameControl.ts
 * @Description: 
 */
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性来存储按键的方向
    direction: string = '';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }

    // 游戏初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        //ArrowDown/Down,ArrowUp/Up,ArrowLeft/Left,ArrowRight/Right
        this.direction = event.key;
    }

    // 创建一个控制移动的方法
    run() {

    }

}

export default GameControl;