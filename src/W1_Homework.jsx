import { useState } from "react";

// 第一週作業
const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    brief: '香濃奶茶搭配QQ珍珠',
    price: 50,
    storage: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    brief: '清新冬瓜配上新鮮檸檬',
    price: 45,
    storage: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    brief: '綠茶與檸檬的完美結合',
    price: 55,
    storage: 34
  },
  {
    id: 4,
    name: '四季春茶',
    brief: '香醇四季春茶，回甘無比',
    price: 45,
    storage: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    brief: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    storage: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    brief: '檸檬與冰茶的清新組合',
    price: 45,
    storage: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    brief: '芒果與綠茶的獨特風味',
    price: 55,
    storage: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    brief: '抹茶與鮮奶的絕配',
    price: 60,
    storage: 20
  }
];


function DataTable_drinks() {
  const [storage, setStorage] = useState(data);
  
  const handleDecrement = (id) => {
    const updateStorage = storage.map((item) => 
      item.id === id ? { ...item, storage: item.storage - 1 } : item
    );
    setStorage(updateStorage);
  };

  const handleIncrement = (id) => {
    const updateStorage = storage.map((item) =>
      item.id === id ? { ...item, storage: item.storage + 1 } : item
    );
    setStorage(updateStorage);
  };

  
  return(<div className="container">
    <h1>Week 1 作業</h1>
    <table className="table-mission">
      <tbody>
        <tr><td></td><td>（原版）LV1	將菜單轉為資料格式</td></tr>
        <tr><td>✔️</td><td>（原版）LV2	可以重新設定菜單的庫存數量</td></tr>
        <tr><td></td><td>（原版挑戰）LV3	還能再去設定品項名稱</td></tr>
        <tr><td></td><td>（同學挑戰）LV3.5	增加庫存判斷</td></tr>
        <tr><td></td><td>（同學挑戰＋）LV4	其他、輸入框的更多客製化＋</td></tr>
      </tbody>
    </table>


    <table>
      <thead>
        <tr>
          <th>品名</th>
          <th>敘述</th>
          <th>價格</th>
          <th>庫存</th>
        </tr>
      </thead>
      <tbody>
        {storage.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><small>{item.brief}</small></td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                  {item.storage}
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>)
}
export default DataTable_drinks;

