import { describe, it, expect } from "vitest";
import { countingSort } from "./counting-sort";

describe("计数排序", () => {
  it("正确排序一个正整数数组", () => {
    const input = [4, 2, 2, 8, 3, 3, 1];
    const output = [1, 2, 2, 3, 3, 4, 8];
    expect(countingSort(input)).toEqual(output);
  });

  it("处理已经排序好的数组", () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(countingSort(input)).toEqual(output);
  });

  it("处理包含重复元素的数组", () => {
    const input = [5, 3, 3, 1, 4, 4];
    const output = [1, 3, 3, 4, 4, 5];
    expect(countingSort(input)).toEqual(output);
  });

  it("处理空数组", () => {
    const input: number[] = [];
    const output: number[] = [];
    expect(countingSort(input)).toEqual(output);
  });

  it("处理仅有一个元素的数组", () => {
    const input = [42];
    const output = [42];
    expect(countingSort(input)).toEqual(output);
  });

  it("处理数据范围较大的数组", () => {
    const input = [100, 200, 150, 100, 250];
    const output = [100, 100, 150, 200, 250];
    expect(countingSort(input)).toEqual(output);
  });
});
