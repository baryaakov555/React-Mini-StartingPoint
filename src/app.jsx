import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {

  const [row, setRow] = useState([1, 2, 3]);
  const [column, setColumn] = useState([1, 2, 3]);
  const [currentColor, setCurrentColor] = useState();
  
  function addRow() {
    setRow([...row, 1]);
  }

  function addColumn() {
    setColumn([...column, 1]);
  }
  
  function removeRow(){
    const tempArr = [...row];
    tempArr.pop()
    setRow(tempArr);
  }

  function removeColumn(){
    const tempArr = [...column];
    tempArr.pop()
    setColumn(tempArr);
  }

  function chooseColor(event){
  setCurrentColor(event.target.value);
  }



  return (
    <div className="app">
      <table>
        <tbody>
          {row.map(() => (
            <tr>
              {column.map(() => (
                <td style={{backgroundColor:currentColor}}></td>
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
        
      <option value = "Red">Red</option>
      <option value = "Blue">Blue</option>
      
      </select>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
