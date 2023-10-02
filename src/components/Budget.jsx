import React, { useState } from "react";



const Budget = ({expensList,setExpensList}) => {
  
const [budget, setBudget] = useState('')
const [toggle, setToggle] = useState(true)


const total=expensList.reduce((a,b)=>a+Number(b.amount),0)

const handleChange=(e)=>{
  setBudget(e.target.value)
}

const handleClick=()=>{
  setToggle(!toggle)
}
  return (
    <>
      <h1 className="text-center my-4" style={{color:"#004e92"}}>My Budget Planner</h1>
      <div className="row d-flex justify-content-between  m-0 p-0 gap-4 gap-lg-0">
        <div className=" col-sm-12 col-lg-4  d-flex justify-content-between gap-2 gap-md-4 ps-2 pe-3 py-2 rounded " style={{color:"#0d511d", backgroundColor:"#9feaec"}}>
          <input
            className="form-control w-75 p-1"
            disabled={!toggle} // burası dinamik olacak, bütçe girilip kaydedildiğinde true olması lazım
            type="number"
            onChange={handleChange}
            value={budget}
            placeholder="Type your budget here !"
          />
          <button className="btn btn-primary w-25" onClick={handleClick}>
            {toggle ? "Save" : "Edit"}
          </button>
        </div>
        <div className=" col-sm-12 col-lg-3 rounded ps-2 pt-1" style={{color:"#0d511d", backgroundColor:"#adfabf"}}>
          <p className="h5"> Remaining:{budget-total}  </p>
        </div>
        <div className="col-sm-12 col-lg-4 rounded ps-2 pt-1" style={{color:"#b00f3f",backgroundColor:"#ffa4b7" }}>
          <p className="h5"> Total spent so far: {total} </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Budget;
