import { ReactNode } from "react";

interface Column {
  header: string;
  key: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, ReactNode>[];
}

export function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className="overflow-x-auto my-6 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left px-5 py-4 font-semibold text-muted-foreground whitespace-nowrap text-xs uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border/30 last:border-b-0 hover:bg-card/50 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-5 py-4">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
