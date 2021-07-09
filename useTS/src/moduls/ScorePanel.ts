/*
 * @Author: lu
 * @Date: 2021-07-09 17:02:43
 * @LastEditTime: 2021-07-09 17:03:01
 * @FilePath: \TypeScript\useTS\src\moduls\ScorePanel.ts
 * @Description: 
 */

// 记分牌
class ScorePanel {
    score: number = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置加分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数多少
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 升级方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }

    }
}

export default ScorePanel;