import { useState } from "react";

const AddExpenses = ({expensList,setExpensList}) => {
const [expense, setExpense] = useState('')
const [amount, setAmount] = useState('')


const handleAdd=()=>{
  setExpensList([...expensList,(expense.length>0 && amount>0) ? {id:new Date().getTime(),expense:expense,amount: amount}:{...expensList}])
  setAmount('')
  setExpense('')
}

  return (
    <>

<div className={expensList.length < 1 ? "col col-md-8 col-lg-12 d-flex flex-column  gap-3 rounded mx-auto  p-3":
        "col col-md-8 col-lg-6 d-flex flex-column  gap-3 p-3 rounded"}>
        <div className="w-100 text-start h5">
            <label htmlFor="add">Expense Name</label>
            <input className='form-control mt-2 p-1' type="text" id="add"  onChange={(e)=>setExpense(e.target.value)} value={expense}/>
        </div>
        <div className="w-100 text-start h5">
            <label htmlFor="cost">Amount</label>
            <input className='form-control mt-2 p-1' type="text" id="cost"  onChange={(e)=>setAmount(e.target.value)} value={amount}/>
        </div>
        <div className="w-100">
        {(expense && amount ) ? <button className="w-100 btn btn-primary p-1" onClick={handleAdd} >Add</button> : <button className="w-100 btn btn-primary p-1 disabled" onClick={handleAdd} >Add</button>}    
        </div>
    </div>

    </>
  );
};

export default AddExpenses;
