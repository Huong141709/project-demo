export function isStrings(array: unknown): array is string[] {
  return Array.isArray(array) && array.every((e) => typeof e === "string");
}

export const arrayHasDuplicateValues = (array: unknown[]) =>
  new Set(array).size !== array.length;

export function swap<T>(dragIndex: number, hoverIndex: number, data: T[]) {
  [data[dragIndex], data[hoverIndex]] = [data[hoverIndex], data[dragIndex]];
  return [...data];
}

export const findDuplicates = (array: string[]) => {
  const uniqueValues = new Set();
  return array.filter((item) => {
    if (uniqueValues.has(item)) {
      return true;
    }
    uniqueValues.add(item);
    return false;
  });
};

export const create2DArray = <
  T extends
    | object
    | null
    | undefined
    | string
    | number
    | boolean
    | symbol
    | bigint
>(
  numRow: number,
  numCol: number,
  value: T | ((rowIdx: number, colIdx: number) => T)
): T[][] => {
  const getValue = typeof value === "function" ? value : () => value;

  const result: T[][] = [];
  for (let rowIdx = 0; rowIdx < numRow; rowIdx++) {
    const row: T[] = [];
    for (let colIdx = 0; colIdx < numCol; colIdx++) {
      row.push(getValue(rowIdx, colIdx));
    }
    result.push(row);
  }

  return result;
};
