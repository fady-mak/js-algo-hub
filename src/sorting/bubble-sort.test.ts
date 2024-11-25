import { describe, it, expect } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("冒泡排序 (bubbleSort)", () => {
  it("应该将数组按升序排序", () => {
    const arr = [5, 3, 8, 4, 2];
    const sortedArr = bubbleSort(arr);
    console.log(sortedArr);
    expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
  });

  it("应该处理已经排序好的数组", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it("应该处理包含相同元素的数组", () => {
    const arr = [5, 5, 5, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([5, 5, 5, 5]);
  });

  it("应该处理空数组", () => {
    const arr: number[] = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it("应该处理单个元素的数组", () => {
    const arr = [42];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([42]);
  });

  it("应该处理包含负数的数组", () => {
    const arr = [-5, -3, -8, -2];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([-8, -5, -3, -2]);
  });
});
