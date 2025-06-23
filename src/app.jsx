import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentColor, setCurrentColor] = useState("Red");

  function addRow() {
    const tempGrid = [...grid];
    tempGrid.push([]);
    for (let i = 0; i < tempGrid[0].length; i++) {
      tempGrid[tempGrid.length - 1].push("");
    }
    setGrid(tempGrid);
  }

  function addColumn() {
    const tempGrid = [...grid];
    for (let i = 0; i < tempGrid.length; i++) {
      tempGrid[i].push("");
    }
    setGrid(tempGrid);
  }

  function removeRow() {
    const tempGrid = [...grid];
    tempGrid.pop();
    setGrid(tempGrid);
  }

  function removeColumn() {
    const tempGrid = [...grid];
    for (let i = 0; i < tempGrid.length; i++) {
      tempGrid[i].pop();
    }
    setGrid(tempGrid);
  }

  function chooseColor(event) {
    setCurrentColor(event.target.value);
  }

  return (
    <div className="app">
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr>
              {row.map((color, columnIndex) => (
                <td
                  style={{ backgroundColor: color }}
                  onClick={(event) => {
                    console.log(`ROW: ${rowIndex}\nCOLUMN:${columnIndex}`);
                    const tempGrid = [...grid];
                    tempGrid[rowIndex][columnIndex] = currentColor;
                    setGrid(tempGrid);
                  }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addColumn}>Add Column</button>
      <button onClick={removeRow}>remove Row</button>
      <button onClick={removeColumn}>remove Column</button>
      <select onChange={chooseColor}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
