import Table from "react-bootstrap/Table";
import Cell from "./Cell";
import { samplePuzzle } from "../assets/constants";

function SudokuTable() {
  function buildRow(sudokuRow) {
    const rowCells = sudokuRow.map((cell) => {
      return (
        <td>
          <Cell solution={ cell.solution } />
        </td>
      );
    });

    return rowCells;
  }

  const rowsArray = samplePuzzle.map((rowData) => {
    const rowCellsArray = buildRow(rowData);

    return (
      <tr>
        { rowCellsArray }
      </tr>
    );
  });

  return (
    <Table>
      <tbody>
        { rowsArray }
      </tbody>
    </Table>
  )
};

export default SudokuTable;