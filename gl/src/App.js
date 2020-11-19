import React, { useState}  from "react";

function App() {
  const [number, setNumber] = useState(5);
  const [rows, setRows] = useState([0,0,0,0,0]);
  const [columm, setColumm] = useState([0,0,0,0,0]);
  const []

  const allDeleteRow = () => {
    setRows([0,0,0,0,0]);
    setColumm([ 0,0,0,0,0]);
    setNumber(5);
  };

  const increaseNumber = () => {
    setNumber(number + 1);
    let data = {
      id: rows.length + 1
    };
    setRows([...rows, data]);
    
    let deta = {
      id: columm.length +1
    };
    setColumm([...columm, deta]);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
    let tempRows = rows.filter(row => {
      return row.id !== number ;
    });
    setRows(tempRows);

    let tempColumm = columm.filter(columm =>{
      return columm.id !== number;
    });
    setColumm(tempColumm);
    if( number <6 ){
      alert("dmd dksehl")
      setNumber(5);
    };
  };

  return (
  <body>
        <div>
            <tr>
              <th>{number} X {number}</th>
              <td><button onClick={increaseNumber}>
                +1</button></td>
              <td><button onClick={decreaseNumber}>-1</button></td>
              <tb><button onClick={allDeleteRow}>초기화</button></tb>
            </tr>
          </div>
          <div>
              <table>
                <tbody>
                  {rows.map((d, number) => (
                    <tr key={number}>
                      <td>{columm.map((d, number) => (
                        <td key={number}>
                          <input id type="button"></input>
                        </td>
                      ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
     </body>
  );
}
export default App;