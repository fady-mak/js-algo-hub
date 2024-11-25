import { describe, it, expect } from "vitest";
import { bucketSort } from "./bucket-sort";

describe("桶排序", () => {
  it("正确排序一个数组", () => {
    const input = [42, 32, 33, 52, 37, 47, 51];
    const output = [32, 33, 37, 42, 47, 51, 52];
    expect(bucketSort(input)).toEqual(output);
  });

  it("处理已经排序好的数组", () => {
    const input = [1, 2, 3, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(bucketSort(input)).toEqual(output);
  });

  it("处理包含重复元素的数组", () => {
    const input = [5, 3, 3, 1, 4, 4];
    const output = [1, 3, 3, 4, 4, 5];
    expect(bucketSort(input)).toEqual(output);
  });

  it("处理空数组", () => {
    const input: number[] = [];
    const output: number[] = [];
    expect(bucketSort(input)).toEqual(output);
  });

  it("处理仅有一个元素的数组", () => {
    const input = [42];
    const output = [42];
    expect(bucketSort(input)).toEqual(output);
  });

  it("处理范围较大的数组", () => {
    const input = [100, 50, 200, 150, 250];
    const output = [50, 100, 150, 200, 250];
    expect(bucketSort(input)).toEqual(output);
  });
});
