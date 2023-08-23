import { useState } from "react";
import { useEffect } from 'react';

// 第二週作業
const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60
  }
]

/* 元件 */
function Card({drink}) {
  return(
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{drink.name}</h5><small>${drink.price}</small>
      </div>
      <p class="mb-1">{drink.description}</p>
    </a>
  )
}

function week2() {
  const [storage, setStorage] = useState(data);

  // 處理數量
  const handleNum = (id) => {
    const updateStorage = storage.map((item) => 
      item.id === id ? { ...item, storage: item.storage - 1 } : item
    );
    setStorage(updateStorage);
  };
  
  // 新增

  // 移除
  
  return(
    <div className="container">
      <h1>Week 2 作業</h1>
      <p className="p-mission">
        點餐人員可以將左側的品項加入購物車<br/>
        點餐人員，可以刪除、調整購物車品項數量（Level 2 可不做）<br/>
        點餐人員可加入備註<br/>
        點餐人員可以建立訂單<br/>
      </p>


      <div class="row">
        <div class="col-4">
          <div class="list-group">
            {data.map(item => {
              return <Card key={item.id} drink={item}/>
            })}
          </div>
        </div>
        <div class="col-8">
          <table class="table">
            <thead>
              <tr>
                <th>品名</th>
                <th>敘述</th>
                <th>數量</th>
                <th>單價</th>
                <th>小計</th>
                <th>刪除</th>
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
                      <select>
                        <option value="1">1</option>
                      </select>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
  
    </div>
  )
}
export default week2;

