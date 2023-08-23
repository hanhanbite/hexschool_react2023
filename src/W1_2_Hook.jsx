import { useState } from "react";

// w1-2 練習hook useState
function Hook() {
  // let a = 1;
  // [值, 寫入的方法] const [text, setText] = useState('');
  const [a, setA] = useState(1);
  
  const [text, setText] = useState('');

  function handleOnClick() {
    setA(a+1);
    console.log(a);
  }
  
  function handleOnChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
    // React需要很熟事件參數
    // 如果只有value會出錯，需要有事件綁定才可以有value=""
  }
  
  return (<>
    Hooks
    <button onClick={handleOnClick}>{a}</button><br/>

    {text}
    {/* function不用()是因為沒有要立即執行 */}
    <input type="text" onChange={handleOnChange} />
  </>)
}
export default Hook;

