import { expect } from "chai"
import { merge } from "../src/merge"

describe("merge", () => {
  it("should merge two arrays of length 1", () => {
    const collection1 = [1];
    const collection2 = [2];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([1, 2]);
  });

  it("should merge two arrays of length 2", () => {
    const collection1 = [1, 3];
    const collection2 = [2, 4];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([1, 2, 3, 4]);
  });

  it("should merge two arrays of different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should merge two empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([]);
  });

  it("should merge an empty array with a non-empty array", () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 3];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});