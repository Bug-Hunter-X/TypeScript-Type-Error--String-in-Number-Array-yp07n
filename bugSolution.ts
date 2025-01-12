function combine(arr1: number[], arr2: (string | number)[]): number[] {
  const numbersOnly = arr2.filter(item => typeof item === 'number');
  return [...arr1, ...numbersOnly as number[]];
}

const arr1: number[] = [1, 2, 3];
const arr2: (string | number)[] = [4, "5", 6];

const result = combine(arr1, arr2); // Correctly compiles and returns [1, 2, 3, 4, 6]