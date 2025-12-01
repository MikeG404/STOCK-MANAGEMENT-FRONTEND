function TableRow({ article }) {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td>{article.description}</td>
      <td>{article.quantity}</td>
    </tr>
  );
}

export default TableRow;