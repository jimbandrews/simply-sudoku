import styles from './Cell.module.css';

function Cell({ solution, revealed, cellKey }) {
  const contents = revealed ? solution : '';

  return (
    <td key={ cellKey }>
      <div className={ styles.cell }>
        <p
          className={ styles.number }
        >{ contents }</p>
      </div>
    </td>
  )

};

export default Cell;