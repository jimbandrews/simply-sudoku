const sampleSudokuAPIResponse = {
  "newboard": {
    "grids": [
      {
        "value": [
          [
            7,
            0,
            0,
            0,
            0,
            0,
            3,
            0,
            0
          ],
          [
            0,
            0,
            6,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          [
            3,
            0,
            9,
            0,
            8,
            0,
            0,
            0,
            2
          ],
          [
            9,
            0,
            0,
            0,
            0,
            5,
            0,
            0,
            6
          ],
          [
            0,
            0,
            0,
            0,
            1,
            0,
            2,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            7
          ],
          [
            5,
            0,
            4,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          [
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            4,
            7,
            6,
            0,
            0,
            0
          ]
        ],
        "solution": [
          [
            7,
            4,
            5,
            6,
            9,
            2,
            3,
            8,
            1
          ],
          [
            2,
            8,
            6,
            5,
            3,
            1,
            7,
            9,
            4
          ],
          [
            3,
            1,
            9,
            7,
            8,
            4,
            5,
            6,
            2
          ],
          [
            9,
            2,
            7,
            8,
            4,
            5,
            1,
            3,
            6
          ],
          [
            4,
            6,
            8,
            3,
            1,
            7,
            2,
            5,
            9
          ],
          [
            1,
            5,
            3,
            2,
            6,
            9,
            8,
            4,
            7
          ],
          [
            5,
            7,
            4,
            9,
            2,
            3,
            6,
            1,
            8
          ],
          [
            6,
            9,
            2,
            1,
            5,
            8,
            4,
            7,
            3
          ],
          [
            8,
            3,
            1,
            4,
            7,
            6,
            9,
            2,
            5
          ]
        ],
        "difficulty": "Hard"
      }
    ],
  }
};

// Converts array of numbers into array of objects of the form:
// { "solution": number, "revealed": boolean }
export function combineValueAndSolutionRow(valueRowArray, solutionRowArray) {
  const valueLength = valueRowArray.length;
  const solutionLength = solutionRowArray.length;

  if ((valueLength !== 9) || (valueLength !== solutionLength)) {
    throw "ERROR: Data from Sudoku API is incorrect. Check that response form has not changed."
  };

  const rowArray = solutionRowArray.map((cellSolution, cellIndex) => {
    let revealed = true;

    if (valueRowArray[cellIndex] === 0) {
      revealed = false;
    }

    const combinedObject = {
      solution: cellSolution,
      revealed,
    }

    return combinedObject;
  });

  return rowArray;
}

const sampleValueArray = sampleSudokuAPIResponse.newboard.value;
const sampleSolutionArray = sampleSudokuAPIResponse.newboard.solution;

// Applies combineValueAndSolutionRow to an array of arrays
export function combinedGrid(valueArray, solutionArray) {
  const combinedPuzzle = sampleSolutionArray.map((solutionRow, rowIndex) => {
    const valueRow = sampleValueArray[rowIndex];
  
    const combinedRowArray = combineValueAndSolution(solutionRow, valueRow);
  
    return combinedRowArray;
  })

  return combinedPuzzle;
}
