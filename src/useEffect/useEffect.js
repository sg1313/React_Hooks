import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const sayHello = () => console.log("hello1");
  // useEffect
  // 첫번째 인자 effect : 함수로서의 effect
  // 두번째 인자 deps : deps리스트에 있는 값일 때만 값이 변화함
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  // [number] : number가 변할때만 sayhello함수 작동
  // [] : 한번만 hello1 뜨고 sayHello 함수 작동 안함
  // [0] : 한번만 hello1 뜨고 숫자 올라가도 작동 안함
  return (
    <div className="App">
      <div>hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
