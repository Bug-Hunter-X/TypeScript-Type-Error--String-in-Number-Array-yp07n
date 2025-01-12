# TypeScript Type Error: String in Number Array

This repository demonstrates a common TypeScript type error that occurs when combining arrays with different types. The `combine` function is designed to work with number arrays, but the `arr2` array contains a string. TypeScript correctly identifies this type mismatch, producing a compilation error.

The solution shows how to address this by either type-guarding the `arr2` array before combining it with `arr1` or by using a union type for the function's second argument that allows both number and string types.

## Bug

The `bug.ts` file contains the original code that throws the TypeScript type error. 

## Solution

The `bugSolution.ts` file provides a solution which involves filtering non-number elements from the `arr2` array.