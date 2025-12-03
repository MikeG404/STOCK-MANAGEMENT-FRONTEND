import { PackageMinus, SquarePen } from "lucide-react";
import Button from "../Button";

function TableRow({ article }) {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td>{article.description}</td>
      <td>{article.quantity}</td>
      <td><Button variant="edit"><SquarePen /></Button></td>  
      <td><Button variant="delete"><PackageMinus /></Button></td>  
    </tr>
  );
}

export default TableRow;