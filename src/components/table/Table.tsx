
function Table({ keys, children }) {
    
    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    {keys.map((key) => (
                        <th scope="col" className="text-left text-sm py-4 font-semibold" key={key}>{key}</th>
                    ))}
                    <th scope="col" className="text-left text-sm py-4">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                { children }
            </tbody>
        </table>    
    );
}

export default Table;