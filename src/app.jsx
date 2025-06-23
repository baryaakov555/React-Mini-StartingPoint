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
  const [isMouseButtonDown, setIsMouseButtonDown] = useState(false);

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

  function fillAll() {
    const tempGrid = [...grid];
    for (let i = 0; i < tempGrid.length; i++) {
      for (let j = 0; j < tempGrid[i].length; j++) {
        tempGrid[i][j] = currentColor;
      }
    }
    setGrid(tempGrid);
  }

  function fillUncolored() {
    const tempGrid = [...grid];
    for (let i = 0; i < tempGrid.length; i++) {
      for (let j = 0; j < tempGrid[i].length; j++) {
        if (tempGrid[i][j] == "") {
          tempGrid[i][j] = currentColor;
        }
      }
    }
    setGrid(tempGrid);
  }

  function clearGrid() {
    const tempGrid = [...grid];
    for (let i = 0; i < tempGrid.length; i++) {
      for (let j = 0; j < tempGrid[i].length; j++) {
        tempGrid[i][j] = "";
      }
    }
    setGrid(tempGrid);
  }
  function updateColor(row, col) {
    const tempGrid = [...grid];
    tempGrid[row][col] = currentColor;
    setGrid(tempGrid);
  }

  return (
    <div className="app">
      <table>
        <tbody draggable={false}>
          {grid.map((row, rowIndex) => (
            <tr>
              {row.map((color, columnIndex) => (
                <td
                  style={{ backgroundColor: color }}
                  onClick={() => updateColor(rowIndex, columnIndex)}
                  onMouseDown={() => {
                    setIsMouseButtonDown(true);
                    updateColor(rowIndex, columnIndex);
                  }}
                  onMouseUp={() => {
                    setIsMouseButtonDown(false);
                  }}
                  onMouseOver={(event) => {
                    if (isMouseButtonDown) {
                      console.log(`ROWS: ${rowIndex}\nCOLUMNS: ${columnIndex}`);
                      updateColor(rowIndex, columnIndex);
                    }
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
      <button onClick={fillAll}>Fill all Colors</button>
      <button onClick={fillUncolored}>Fill Uncolored</button>
      <button onClick={clearGrid}>Clear Grid</button>
      <select onChange={chooseColor}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
