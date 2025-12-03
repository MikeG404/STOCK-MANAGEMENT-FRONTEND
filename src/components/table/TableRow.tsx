import { PackageMinus, SquarePen } from "lucide-react";
import Button from "../Button";

function TableRow({ article }) {
  return (
    <tr>
      <td className="text-gray-900 font-semibold py-3">{article.id}</td>
      <td className="text-gray-900 font-semibold">{article.title}</td>
      <td className="text-gray-500">{article.description}</td>
      <td className="text-gray-500">{article.quantity}</td>
      <td className="flex gap-2 py-3">
        <Button variant="edit"><SquarePen size={18}/></Button>
        <Button variant="delete"><PackageMinus size={18} /></Button>
      </td>  
    </tr>
  );
}

export default TableRow;