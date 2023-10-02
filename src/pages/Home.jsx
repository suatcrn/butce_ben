
import {  useState } from "react";
import AddExpenses from "../components/AddExpenses";
import Budget from "../components/Budget";
import ExpenseList from "../components/ExpenseList";
import "./Home.css";


const Home = () => {
  const [expensList, setExpensList] = useState([])
  
  
  
  return (
    <div className="contentAll">
      <div className=' col col-sm-4 col-md-6 col-lg-8 contentWrapper rounded px-3'>
      <Budget  expensList={expensList} setExpensList={setExpensList} />
      <div className='d-flex gap-1 mt-2'>
        <ExpenseList expensList={expensList} setExpensList={setExpensList}/>
        <AddExpenses expensList={expensList} setExpensList={setExpensList}/>
      </div>
    </div>
    </div>
    
  )
}

export default Home