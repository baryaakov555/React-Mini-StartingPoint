import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {

const [grid, setGrid] = useState([]);

function addRow()
{
  let columns;

  



}










  return (
    <div className="app">
      <table>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
      <button onClick = {addRow}>Add Row</button>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
