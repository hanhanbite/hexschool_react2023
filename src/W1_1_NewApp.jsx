// w1-1 練習建立元件
function NewApp() {
  
  const arr = [1, 2, 3]

  return (<>
    {/* Map可以建立新陣列 */}
    { arr.map((item) => {
      return (<div key={item}>
        {item}
      </div>)
    })}
  </>)
}

export default NewApp;

