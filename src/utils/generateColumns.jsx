// utils/generateColumns.js
export function generateExcelColumnsAndNumbers() {
  const columns = [];
  const numbers = [];

  // Generate Excel columns from A to XFD
  let column = "";
  for (let i = 0; i < 16384; i++) {
    column = "";
    let temp = i;
    while (temp >= 0) {
      column = String.fromCharCode((temp % 26) + 65) + column;
      temp = Math.floor(temp / 26) - 1;
    }
    columns.push(column);
    if (column === "XFD") break;
  }

  // Generate numbers from 1 to 1000
  for (let i = 1; i <= 1000; i++) {
    numbers.push(i.toString());
  }

  return { columns, numbers };
}