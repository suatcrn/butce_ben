import React, {  useState } from "react";
import Edit from "./Edit";

const ExpenseList = ({expensList,setExpensList}) => {
 const [editedItem, setEditedItem] = useState(
  {id:0,
  expense:'',
  amount:0
}
 )

const handleDelete=(id)=>{
const newArr=expensList.filter((delItem)=>delItem.id !== id)
setExpensList(newArr)
}



  return (
    <div className={expensList.length > 0 ? "row col col-md-8 col-lg-6 d-flex flex-column  gap-3 rounded w-50 mt-4 ps-4 " : "row d-none col col-md-8 col-lg-6 d-flex flex-column  gap-3  rounded mt-5 "}>
     {expensList.map((item,index)=>{
      return <div
            className="col col-md-8 col-lg-6  d-flex justify-content-between w-75 p-2  rounded"
            key={index}
            style={{backgroundColor:"#9feaec"}}
          >
            <p className="h6"> {item.expense} -----&gt; {item.amount}</p>
            <div>
              <i
                data-bs-toggle="modal"
                data-bs-target="#edit"
                onClick={()=>setEditedItem(item)}
                className="fa-solid fa-pen-to-square mx-3"
              ></i>
              <i
                onClick={()=>handleDelete(item.id)}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
     })}
          
  
    <Edit editedItem={editedItem} setEditedItem={setEditedItem} expensList={expensList} setExpensList={setExpensList} />
    </div>
  );
};

export default ExpenseList;
