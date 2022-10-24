function Row(props) {
  const { rowIndex, collumIndex } = props;

  return <div
    id={`row${rowIndex}-collum${collumIndex}`}
    className="row">
  </div>
}

export default Row;
