import styles from './Cell.module.css';

function Cell({ solution }) {
  return (
    <div className={ styles.cell }>
      <p className={ styles.number }>{ solution }</p>
    </div>
  )

};

export default Cell;