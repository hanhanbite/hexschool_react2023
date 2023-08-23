import { useState } from "react";

const data = [
  {
    id: 1,
    name: '購買雜貨',
    dueDate: '2023-07-30',
    completed: true
  },
  {
    id: 2,
    name: '完成報告',
    dueDate: '2023-07-30',
    completed: false
  },  
  {
    id: 3,
    name: '清理房間',
    dueDate: '2023-07-28',
    completed: true
  }
]

// w1-3 練習hook 物件
function DataTable() {
  const [todo, setTodo] = useState(data)
  return(<>
    <h1>DataTable</h1>

    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {todo.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.dueDate}</td>

              {/* 未展開，是錯誤 */}
              {/* <td><button onClick={() => {
                setTodo(!item.completed)
              }}>{item.completed ? '是' : '否'}</button> </td> */}


              {/* 展開 */}
              <td><button onClick={() => {

                
                {/* 1. 初級寫法 */}
                // const newTodo = [...data]; // 展開 ES6 > 淺拷貝
                // newTodo.forEach((newItem) => {
                //   if(newItem.id === item.id) {
                //     item.completed = !item.completed
                //   }
                // });  
                
                {/* 2. 進階寫法 */}
                // const newTodo = todo.map((newItem) => {
                //   if(newItem.id === item.id) {
                //     newItem.completed = !newItem.completed
                //   }
                //   return newItem
                // });
                
                {/* 3. 高手寫法 */}
                const newTodo = todo.map((newItem) => {
                  return newItem.id === item.id ? {
                    ...newItem,
                    completed: !newItem.completed
                  } : newItem
                });

                setTodo(newTodo);
              }}>{item.completed ? '是' : '否'}</button> </td>



            </tr>
          )
        })}
      </tbody>
    </table>
  </>)
}
export default DataTable;

