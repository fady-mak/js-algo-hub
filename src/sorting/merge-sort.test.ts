import { describe, it, expect } from "vitest";
import { mergeSort } from "./merge-sort";

describe("归并排序", () => {
  it("正确排序一个数字数组", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const output = [11, 12, 22, 25, 34, 64, 90];
    expect(mergeSort(input)).toEqual(output);
  });

  it("处理已经排序好的数组", () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(mergeSort(input)).toEqual(output);
  });

  it("处理包含重复元素的数组", () => {
    const input = [5, 3, 3, 1, 4];
    const output = [1, 3, 3, 4, 5];
    expect(mergeSort(input)).toEqual(output);
  });

  it("处理空数组", () => {
    const input: number[] = [];
    const output: number[] = [];
    expect(mergeSort(input)).toEqual(output);
  });

  it("处理仅有一个元素的数组", () => {
    const input = [42];
    const output = [42];
    expect(mergeSort(input)).toEqual(output);
  });
});
