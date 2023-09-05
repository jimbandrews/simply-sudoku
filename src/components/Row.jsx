import Cell from "./Cell";

function Row({ sudokuRow, rowKey }) {
  const rowCells = sudokuRow.map((cell, cellIndex) => {
    return (
      <Cell
        solution={ cell.solution }
        revealed={ cell.revealed }
        cellKey={ cellIndex }
      />
    );
  });


  return (
    <tr
      key={ rowKey }
    >
      { rowCells }
    </tr>
  );
};

export default Row;