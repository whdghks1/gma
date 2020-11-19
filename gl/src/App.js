import React, { useState}  from "react";
import styled from "styled-components";

const Td = styled.div`
  width: 30px;
  height: 30px;
  display: inline;
  margin-right:30px
`;

function App() {
  const [number, setNumber] = useState(5);
  const [rows, setRows] = useState([{number}]);
  const [columm, setColumm] = useState([{number}]);
  const [count, setCount] = useState(1);

  const allDeleteRow = () => {
    setRows([0,0,0,0,0]);
    setColumm([ 0,0,0,0,0]);
    setNumber(5);
    setCount(1);
  };

  const increaseNumber = () => {//+클릭시
    setNumber(number + 1);
    let data = {
      id: rows.length + 1
    };
    setRows([...rows, data]);
    
    let deta = {
      id: columm.length +1
    };
    setColumm([...columm, deta]);

    setCount(count +1);
    console.log(count);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
    setCount(count - 1);
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
              <Td><button onClick={increaseNumber}>+1</button></Td>
              <Td><button onClick={decreaseNumber}>-1</button></Td>
              <tb><button onClick={allDeleteRow}>초기화</button></tb>
            </tr>
          </div>
          <div>
              <table>
                <tbody>
                  <tr>{count}*{number}</tr>
                  {/* {[...Array(count)].map((n, number) => {
                      return (
                          <div>
                            <tr>
                              <Td>{rows.map((d, number) => (
                              <Td key={number}>{number+1}</Td>))}</Td>
                            </tr>
                          </div>
                      )
                  })} */}
                  <tr>
                    <Td>{columm.map((d, number) => (
                      <Td key={number}>{number+1}</Td>))}</Td>
                    </tr>
                    <tr>
                      <Td>{rows.map((d, number)=> (
                      <Td key={number}>{count +number}</Td>))}</Td>
                    </tr>
                </tbody>
              </table>
          </div>
     </body>
  );
}
export default App;