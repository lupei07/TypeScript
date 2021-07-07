/*
 * @Author: lu
 * @Date: 2021-07-06 18:20:28
 * @LastEditTime: 2021-07-07 13:39:49
 * @FilePath: \TypeScript\webpackTS\src\index.ts
 * @Description: 
 */
import { hi } from './m1'

function sum(a: number, b: number): number {
    return a + b;
}

console.log('求和', sum(111, 333));
hi()