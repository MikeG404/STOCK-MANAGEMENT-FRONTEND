import Button from "../Button";

function TableRow({ article }) {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td>{article.description}</td>
      <td>{article.quantity}</td>
      <td><Button variant="edit">Edit</Button></td>  
      <td><Button variant="delete">Delete</Button></td>  
    </tr>
  );
}

export default TableRow;