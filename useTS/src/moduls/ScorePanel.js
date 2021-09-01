"use strict";
/*
 * @Author: lu
 * @Date: 2021-07-09 17:02:43
 * @LastEditTime: 2021-07-09 17:03:01
 * @FilePath: \TypeScript\useTS\src\moduls\ScorePanel.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 记分牌
var ScorePanel = /** @class */ (function () {
    function ScorePanel(maxLevel, upScore) {
        if (maxLevel === void 0) { maxLevel = 10; }
        if (upScore === void 0) { upScore = 10; }
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置加分方法
    ScorePanel.prototype.addScore = function () {
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数多少
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    };
    // 升级方法
    ScorePanel.prototype.levelUp = function () {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    };
    return ScorePanel;
}());
exports.default = ScorePanel;
