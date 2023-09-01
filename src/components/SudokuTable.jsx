import Table from "react-bootstrap/Table";
import Cell from "./Cell";
import { samplePuzzle } from "../assets/constants";

function SudokuTable() {
  function buildRow(sudokuRow) {
    const rowCells = sudokuRow.map((cell, cellIndex) => {
      return (
        <td key={ cellIndex }>
          <Cell solution={ cell.solution } />
        </td>
      );
    });

    return rowCells;
  }

  const rowsArray = samplePuzzle.map((rowData, rowDataIndex) => {
    const rowCellsArray = buildRow(rowData);

    return (
      <tr key={ rowDataIndex }>
        { rowCellsArray }
      </tr>
    );
  });

  return (
    <Table bordered>
      <tbody>
        { rowsArray }
      </tbody>
    </Table>
  )
};

export default SudokuTable;