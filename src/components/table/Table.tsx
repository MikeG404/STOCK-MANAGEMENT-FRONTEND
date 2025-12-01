
function Table({ keys, children }) {
    
    return (
        <table>
            <thead>
                <tr>
                    {keys.map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>    
    );
}

export default Table;