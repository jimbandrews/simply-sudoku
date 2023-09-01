import Cell from "./Cell";
import styles from "./Row.module.css"

function Row() {
  return (
    <div className={ styles.row }>
      <Cell 
        solution="1"
        className="flex-grow"
      />
      <Cell 
        solution="2"
        className="flex-grow"
      />
      <Cell 
        solution="3"
        className="flex-grow"
      />
      <Cell 
        solution="4"
        className="flex-grow"
      />
      <Cell 
        solution="5"
        className="flex-grow"
      />
      <Cell 
        solution="6"
        className="flex-grow"
      />
      <Cell 
        solution="7"
        className="flex-grow"
      />
      <Cell 
        solution="8"
        className="flex-grow"
      />
      <Cell 
        solution="9"
        className="flex-grow"
      />
    </div>
  );
};

export default Row;