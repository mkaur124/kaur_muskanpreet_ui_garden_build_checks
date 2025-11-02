export interface TableProps {
  headers: string[]; // Table column names
  data: (string | number)[][]; // Each row is an array of cells
  disabled?: boolean;
}
