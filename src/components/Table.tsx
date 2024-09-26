import React from 'react';

interface TableProps {
    columns: string[];
    data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <table className="table-auto w-full border border-collapse mt-3">
            <thead>
            <tr className="bg-gray-200">
                {columns.map((col, index) => (
                    <th key={index} className="border px-4 py-2">{col}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((col, colIndex) => (
                        <td key={colIndex} className="border px-4 py-2">{row[col]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
