import { describe, it, expect } from "vitest";
import { radixSort } from "./radix-sort";

describe("基数排序", () => {
  it("正确排序一个正整数数组", () => {
    const input = [170, 45, 75, 90, 802, 24, 2, 66];
    const output = [2, 24, 45, 66, 75, 90, 170, 802];
    expect(radixSort(input)).toEqual(output);
  });

  it("处理已经排序好的数组", () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(radixSort(input)).toEqual(output);
  });

  it("处理包含重复元素的数组", () => {
    const input = [5, 3, 3, 1, 4, 4];
    const output = [1, 3, 3, 4, 4, 5];
    expect(radixSort(input)).toEqual(output);
  });

  it("处理空数组", () => {
    const input: number[] = [];
    const output: number[] = [];
    expect(radixSort(input)).toEqual(output);
  });

  it("处理仅有一个元素的数组", () => {
    const input = [42];
    const output = [42];
    expect(radixSort(input)).toEqual(output);
  });

  it("处理数据范围较大的数组", () => {
    const input = [1000, 10, 100, 1, 10000];
    const output = [1, 10, 100, 1000, 10000];
    expect(radixSort(input)).toEqual(output);
  });
});
