import {
  isNumbers,
  isStrings,
  findDuplicates,
  arrayHasDuplicateValues,
  swap,
  create2DArray,
} from "./array";

describe("Check is array of number", () => {
  test("Return true when given an array of numbers", () => {
    const input: number[] = [1, 2, 3, 4];
    const result = isNumbers(input);
    expect(result).toBe(true);
  });

  test("Return false when given an array of string", () => {
    const input: string[] = ["a", "b", "c"];
    const result = isNumbers(input);
    expect(result).toBe(false);
  });

  test("Return false when given an array of object", () => {
    const input: object[] = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = isNumbers(input);
    expect(result).toBe(false);
  });

  test("Return false when given an array of boolean", () => {
    const input: boolean[] = [true, false, true];
    const result = isNumbers(input);
    expect(result).toBe(false);
  });
});
describe("Check is array of string", () => {
  test("Return true when given an array of string", () => {
    const input: string[] = ["a", "b", "c"];
    const result = isStrings(input);
    expect(result).toBe(true);
  });
});

describe("Check is array of number", () => {
  test("Return false when given an array of numbers", () => {
    const input: number[] = [1, 2, 3, 4];
    const result = isStrings(input);
    expect(result).toBe(false);
  });
});

describe("Check is array of object", () => {
  test("Return false when given an array of object", () => {
    const input: object[] = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const result = isStrings(input);
    expect(result).toBe(false);
  });
});

describe("Find duplicate in array", () => {
  test("Return an empty array when given an empty array", () => {
    const input: string[] = [];
    const result = findDuplicates(input);
    expect(result).toEqual([]);
  });

  test("Return an empty array when given an array with no duplicate", () => {
    const input: string[] = ["a", "b", "c"];
    const result = findDuplicates(input);
    expect(result).toEqual([]);
  });

  test("Return an array with duplicate when given an array with duplicate", () => {
    const input: string[] = ["a", "b", "c", "a"];
    const result = findDuplicates(input);
    expect(result).toEqual(["a"]);
  });
});

describe("arrayHasDuplicateValues function", () => {
  test("should return false if array has no duplicate values", () => {
    const result = arrayHasDuplicateValues([1, 2, 3, 4]);
    expect(result).toBe(false);
  });

  test("should return true if array has duplicate values", () => {
    const result = arrayHasDuplicateValues([1, 2, 3, 3]);
    expect(result).toBe(true);
  });

  test("should handle arrays with strings and detect duplicates", () => {
    const result = arrayHasDuplicateValues(["a", "b", "c", "a"]);
    expect(result).toBe(true);
  });

  test("should handle arrays with mixed types and detect duplicates", () => {
    const result = arrayHasDuplicateValues([1, "a", 2, "b", 1]);
    expect(result).toBe(true);
  });

  test("should return false for an empty array", () => {
    const result = arrayHasDuplicateValues([]);
    expect(result).toBe(false);
  });
});

describe("swap function", () => {
  test("should swap two elements in an array correctly", () => {
    const data = [1, 2, 3, 4];
    const dragIndex = 0;
    const hoverIndex = 2;
    const result = swap(dragIndex, hoverIndex, data);
    expect(result).toEqual([3, 2, 1, 4]);
  });

  test("should return the same array if dragIndex equals hoverIndex", () => {
    const data = [1, 2, 3, 4];
    const dragIndex = 1;
    const hoverIndex = 1;
    const result = swap(dragIndex, hoverIndex, data);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle swapping elements at the beginning and end of the array", () => {
    const data = ["a", "b", "c", "d"];
    const dragIndex = 0;
    const hoverIndex = 3;
    const result = swap(dragIndex, hoverIndex, data);
    expect(result).toEqual(["d", "b", "c", "a"]);
  });

  test("should handle swapping elements in arrays with different types", () => {
    const data = [1, "a", { key: "value" }, true];
    const dragIndex = 1;
    const hoverIndex = 3;
    const result = swap(dragIndex, hoverIndex, data);
    expect(result).toEqual([1, true, { key: "value" }, "a"]);
  });
});

describe("create2DArray", () => {
  test("should create a 2D array with constant value", () => {
    const result = create2DArray(2, 3, 1);
    expect(result).toEqual([
      [1, 1, 1],
      [1, 1, 1],
    ]);
  });

  test("should create a 2D array with string value", () => {
    const result = create2DArray(2, 2, "x");
    expect(result).toEqual([
      ["x", "x"],
      ["x", "x"],
    ]);
  });

  test("should create a 2D array with boolean value", () => {
    const result = create2DArray(2, 2, true);
    expect(result).toEqual([
      [true, true],
      [true, true],
    ]);
  });

  test("should create a 2D array with function value", () => {
    const result = create2DArray(3, 3, (rowIdx, colIdx) => rowIdx * colIdx);
    expect(result).toEqual([
      [0, 0, 0],
      [0, 1, 2],
      [0, 2, 4],
    ]);
  });

  test("should create a 2D array with mixed value types", () => {
    const result = create2DArray(2, 2, (rowIdx, colIdx) => {
      if (rowIdx === 0 && colIdx === 0) return "a";
      if (rowIdx === 1 && colIdx === 1) return "b";
      return null;
    });
    expect(result).toEqual([
      ["a", null],
      [null, "b"],
    ]);
  });

  test("should create an empty 2D array when numRow or numCol is 0", () => {
    const result1 = create2DArray(0, 3, 1);
    expect(result1).toEqual([]);

    const result2 = create2DArray(3, 0, 1);
    expect(result2).toEqual([[], [], []]);

    const result3 = create2DArray(0, 0, 1);
    expect(result3).toEqual([]);
  });
});
