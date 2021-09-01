"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: lu
 * @Date: 2021-07-09 17:19:09
 * @LastEditTime: 2021-07-12 10:31:38
 * @FilePath: \TypeScript\useTS\src\moduls\GameControl.ts
 * @Description:
 */
var Food_1 = require("./Food");
var ScorePanel_1 = require("./ScorePanel");
var Snake_1 = require("./Snake");
var GameControl = /** @class */ (function () {
    function GameControl() {
        // 创建一个属性来存储按键的方向
        this.direction = '';
        // 创建一个属性用来记录游戏是否结束
        this.isLive = true;
        this.snake = new Snake_1.default();
        this.food = new Food_1.default();
        this.scorePanel = new ScorePanel_1.default();
        this.init();
    }
    // 游戏初始化方法，调用后游戏即开始
    GameControl.prototype.init = function () {
        // 绑定键盘按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    };
    // 创建一个键盘按下的响应函数
    GameControl.prototype.keydownHandler = function (event) {
        //ArrowDown/Down,ArrowUp/Up,ArrowLeft/Left,ArrowRight/Right
        this.direction = event.key;
    };
    // 创建一个控制移动的方法
    GameControl.prototype.run = function () {
        // 获取当前的坐标
        var X = this.snake.X;
        var Y = this.snake.Y;
        // 是否吃到食物
        this.checkEat(X, Y);
        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }
        // 修改X  Y的值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }
        // 开启一个定时器
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    };
    // 定义一个方法，用来检查是否吃到食物
    GameControl.prototype.checkEat = function (X, Y) {
        if (X == this.food.X && Y == this.food.Y) {
            // 食物位置进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇增加一节
            this.snake.addBody();
        }
        ;
    };
    return GameControl;
}());
exports.default = GameControl;
