import React, { useState, useEffect } from "react";
import "./App.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  // title 값이 바뀌면 setTitle 을 이용하여
  return setTitle;
};
// 0. 현재 기본 값으로는 loading...이다
// 1. useEffect가 마운트 되면 htmlTitle은 loading...이 된다
// 2. titleUpdater가 불려지면 title이 바뀜
// 3. title이 바꼈기 때문에 useEffect 안에 있는 updateTitle가 다시 불려지게 되고
// 4. 타이틀 제목은 Loading...으로 바뀐다
// 5. 추가로 아래에 setTimeout 함수를 설정하면 5 초 뒤에 타이틀이 Home로 바뀜

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}

export default App;
