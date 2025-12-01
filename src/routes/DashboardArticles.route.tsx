import Table from "../components/table/Table";
import TableRow from "../components/table/TableRow";

const data = [
    { id: 1, title: "First Article", description: "This is the first article.", quantity: 10 },
    { id: 2, title: "Second Article", description: "This is the second article.", quantity: 5 },
    { id: 3, title: "Third Article", description: "This is the third article.", quantity: 8 },
];

const objectKeys = Object.keys(data[0]);

function DashboardArticlesRoute() {
    return (
        <div>
            <Table keys={objectKeys}>
                {data.map((article) => (
                    <TableRow key={article.id} article={article} />
                ))}
            </Table>
        </div>
    );
}

export default DashboardArticlesRoute;