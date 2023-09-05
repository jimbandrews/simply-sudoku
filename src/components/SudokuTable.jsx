import Table from "react-bootstrap/Table";
import Row from "./Row";
import { samplePuzzle } from "../assets/constants";

function SudokuTable() {
  const rowsArray = samplePuzzle.map((rowData, rowDataIndex) => {

    return (
      <Row
        sudokuRow={ rowData }
        rowKey={ rowDataIndex}
      />
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