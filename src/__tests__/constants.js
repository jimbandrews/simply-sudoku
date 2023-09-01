import { combineValueAndSolution } from "../assets/constants";

const valueRow = [
  7,
  0,
  0,
  0,
  0,
  0,
  3,
  0,
  0
];

const solutionRow = [
  7,
  4,
  5,
  6,
  9,
  2,
  3,
  8,
  1
];

const expectedArray = [
  {
    solution: 7,
    revealed: true,
  },
  {
    solution: 4,
    revealed: false,
  },
  {
    solution: 5,
    revealed: false,
  },
  {
    solution: 6,
    revealed: false,
  },
  {
    solution: 9,
    revealed: false,
  },
  {
    solution: 2,
    revealed: false,
  },
  {
    solution: 3,
    revealed: true,
  },
  {
    solution: 8,
    revealed: false,
  },
  {
    solution: 1,
    revealed: false,
  },
];

const actualArray = combineValueAndSolution(valueRow, solutionRow);

test('combineValueAndSolution has correct output', () => {
  actualArray.forEach((rowElement, rowIndex) => {
    const expectedElement = expectedArray[rowIndex];

    expect(rowElement.revealed).toBe(expectedElement.revealed);
  });
})