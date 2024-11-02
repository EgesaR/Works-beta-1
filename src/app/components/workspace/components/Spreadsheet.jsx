import { useState, useCallback } from "react";
import styles from "./styles/styles.module.css";
import { generateExcelColumnsAndNumbers } from "@/utils/generateColumns";

const Spreadsheet = ({ rows = 10, cols = 10 }) => {
  const [data, setData] = useState(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        value: "",
        computed: "",
        isCalculated: false,
      }))
    )
  );

  const { columns } = generateExcelColumnsAndNumbers();
  const [focusedCell, setFocusedCell] = useState({ row: null, col: null });

  const getCellLabel = (row, col) => columns[col] + (row + 1);

  const getCellValue = useCallback(
    (label) => {
      const col = columns.indexOf(label.charAt(0));
      const row = parseInt(label.slice(1), 10) - 1;
      return data[row] && data[row][col]
        ? parseFloat(data[row][col].computed) || 0
        : 0;
    },
    [data, columns]
  );

  const evaluateFormula = useCallback(
    (formula) => {
      if (formula.startsWith("=")) {
        const expression = formula.slice(1).trim();

        // Handle SUM function
        if (expression.startsWith("SUM(") && expression.endsWith(")")) {
          const range = expression.slice(4, -1).split(":"); // Extract range within parentheses
          if (range.length === 2) {
            const [start, end] = range;
            const startCol = columns.indexOf(start.charAt(0));
            const startRow = parseInt(start.slice(1), 10) - 1;
            const endCol = columns.indexOf(end.charAt(0));
            const endRow = parseInt(end.slice(1), 10) - 1;

            // Calculate sum over the range
            let sum = 0;
            for (let row = startRow; row <= endRow; row++) {
              for (let col = startCol; col <= endCol; col++) {
                sum += getCellValue(getCellLabel(row, col));
              }
            }
            return sum;
          }
        }

        // If no specific function, evaluate as a regular expression with cell references
        const parsedExpression = expression.replace(/[A-Z][0-9]+/g, (match) =>
          getCellValue(match)
        );
        try {
          return eval(parsedExpression);
        } catch {
          return "ERROR";
        }
      }

      return formula; // Return plain value if not a formula
    },
    [getCellValue, columns]
  );

  const handleChange = (rowIndex, colIndex, value) => {
    const isFormula = value.startsWith("=");
    const computed = isFormula ? evaluateFormula(value) : value;

    setData((prevData) =>
      prevData.map((row, r) =>
        row.map((cell, c) =>
          r === rowIndex && c === colIndex
            ? { value, computed, isCalculated: isFormula }
            : cell
        )
      )
    );
  };

  const handleKeyDown = (rowIndex, colIndex, e) => {
    if (e.key === "Enter") {
      const cell = data[rowIndex][colIndex];
      const isFormula = cell.value.startsWith("=");
      const computed = isFormula ? evaluateFormula(cell.value) : cell.value;

      setData((prevData) =>
        prevData.map((row, r) =>
          row.map((cell, c) =>
            r === rowIndex && c === colIndex
              ? { ...cell, computed, isCalculated: isFormula }
              : cell
          )
        )
      );

      // Move focus to the next cell on Enter
      if (colIndex < cols - 1) {
        setFocusedCell({ row: rowIndex, col: colIndex + 1 });
      } else if (rowIndex < rows - 1) {
        setFocusedCell({ row: rowIndex + 1, col: 0 });
      }
    }
  };

  const handleFocus = (rowIndex, colIndex) => {
    setFocusedCell({ row: rowIndex, col: colIndex });
  };

  const handleBlur = () => {
    setFocusedCell({ row: null, col: null });
  };

  return (
    <div className={`${styles.spreadsheet} py-[10px]`}>
      <div className={`text-gray-600 text-sm ${styles.headerRow}`}>
        <div className={styles.emptyCell}></div>
        {columns.slice(0, cols).map((col, index) => (
          <div
            key={index}
            className={`border-x-1 border-top-0 ${styles.headerCell} ${
              index === focusedCell.col
                ? `${styles.highlight} border-b-green-700 border-b-2`
                : ""
            }`}
          >
            {col}
          </div>
        ))}
      </div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          <div
            className={`text-gray-600 text-sm w-[40px] h-[30px] bg-[#f5f5f5] flex items-center justify-center font-medium border border-[#ddd] ${
              rowIndex === focusedCell.row
                ? `${styles.highlight} border-r-green-700 border-r-2`
                : ""
            }`}
          >
            {rowIndex + 1}
          </div>
          {row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              value={
                rowIndex === focusedCell.row && colIndex === focusedCell.col
                  ? cell.value // Show formula/value if the cell is focused
                  : cell.isCalculated
                  ? cell.computed // Show computed value if formula was calculated
                  : cell.value
              }
              placeholder={cell.computed ? cell.computed.toString() : ""}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              onKeyDown={(e) => handleKeyDown(rowIndex, colIndex, e)}
              onFocus={() => handleFocus(rowIndex, colIndex)}
              onBlur={handleBlur}
              className={`border border-[#ddd] ${styles.cell} ${
                cell.isCalculated ? styles.calculated : ""
              } ${
                rowIndex === focusedCell.row && colIndex === focusedCell.col
                  ? styles.highlight
                  : ""
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Spreadsheet;
