import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Grid from "./Grid";

const initialGrid = 
[[" white ", " white ", " white "],
 [" white ", " white ", " white "],
 [" white ", " white ", " white "]];



const App = () => {

  const [grid, setGrid] = useState(initialGrid);
  const [color, setColor] = useState("Blue");
  const [mouseButton, setMouseButton] = useState(false);

  const addRowButton = () => {

  const numberOfCells = grid[0].length;
  const newRow = new Array(numberOfCells).fill(" white ");
  setGrid([...grid, newRow]);
  }

  const addColumnButton = () => {

    const newColumn = grid.map(row => [...row, " white "]);
    setGrid(newColumn);
  }

const removeRowButton = () => {

  const numberOfRows = grid.length;
  const removeRow = grid.slice(0, numberOfRows - 1);

  setGrid(removeRow);
  }

const removeColumnButton = () => {

  const numberOfCells = grid[0].length;
  const removeColumn = grid.map(row => row.slice(0, numberOfCells - 1));

  setGrid(removeColumn);
  }

const selectColor = (event) => {

  const currentColor = event.target.value;
  setColor(currentColor);
}

const colorCell = (rowIndex, cellIndex) => {
  //row index and cell index give us the exact location of a cell
  //this gives access to each individual cell
  //when we click on that individual cell with the specific index it should detect the position
  //of where it was clicked by the row and cell of the two dimentional array
  //
 const newGrid = grid.map((row, rIndex) => {

  if (rowIndex === rIndex)
  {
    const newRow = row.map((cell, cIndex) => {

      if (cellIndex === cIndex)
      {
        return color;
      }
      else
      {
        return cell;
      }
    });
    return newRow;
  }
  else
  {
    return row;
  }
    
    
    });
  setGrid(newGrid);
}

const fillUncolored = () => {

  const fillUncoloredGrid = grid.map((row) => {
    const fillUncoloredCell = row.map((cell) => {
      if (cell === " white ")
      {
        return color;
      }
      else
      {
        return cell;
      }
    });
    return fillUncoloredCell;
  });
setGrid(fillUncoloredGrid);
}

const fillGrid = () => {
  const fillGrid = grid.map((row) => {
    const fillCell = row.map((cell) =>{
      return color;
    });
    return fillCell;
  });
setGrid(fillGrid);
}

const clearGrid = () => {
  const clearGrid = grid.map((row) => {
    const clearCell = row.map((cell) => {
      return " white ";
    });
    return clearCell;
  });
setGrid(clearGrid);
}

const mouseButtonDown = () => {
  setMouseButton(true);
} 

const mouseButtonUp = () => {
  setMouseButton(false);
}

const mouseEnterCell = (rowIndex, cellIndex) => {
  if (mouseButton === true)
  {
  colorCell(rowIndex, cellIndex);
  }
}

//        0           1          2
//  [0[" white ", " white ", " white "],
//   1[" white ", " Blue ", " white "],
//   2[" white ", " white ", " white "]];

  return (
    <div className="app">
      <Grid initialGrid = {grid} color = {colorCell} buttonDown = {mouseButtonDown} buttonUp = {mouseButtonUp}
      mouseEnter = {mouseEnterCell}
      />
      <button onClick={addRowButton}>Add Row</button>
      <button onClick={addColumnButton}>Add Column</button>
      <button onClick={removeRowButton}>Remove Row</button>
      <button onClick={removeColumnButton}>Remove Column</button>
      <button onClick={fillUncolored}>Fill Uncolored Cells</button>
      <button onClick={fillGrid}>Fill Gird</button>
      <button onClick={clearGrid}>Clear Grid</button>
      <select id="Colors"
              name="colors"
              onChange={selectColor}>

      <option value="Blue">Blue</option>
      <option value="Red">Red</option>
      </select>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);