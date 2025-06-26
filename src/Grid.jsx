import React from "react";

const Grid = ({ initialGrid, color, buttonDown, buttonUp, mouseEnter}) => {

  return (
    <div>
      <table>
        <tbody>
          {initialGrid.map((rows, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((cells, cellIndex) => (
                <td
                  key={cellIndex}
                  style={{
                    backgroundColor: cells,
                    width: 30,
                    height: 30,
                    border: "1px solid black"
                  }}
                  onClick = {() => color(rowIndex, cellIndex)}
                  onMouseDown={() => {buttonDown(rowIndex, cellIndex);
                    color(rowIndex, cellIndex);
                  }}
                  onMouseUp={buttonUp}
                  onMouseEnter={() => mouseEnter(rowIndex, cellIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;

// [[" white ", " white ", " white "],
//  [" white ", " white ", " white "],
//  [" white ", " white ", " white "]];
