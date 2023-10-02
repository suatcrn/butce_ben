import React from "react";



const Edit = ({editedItem,setEditedItem,expensList,setExpensList}) => {
 



 const handleEdit=(id)=>{
  let newlist = expensList.map((item)=> {
    if(item.id === id){
      item = editedItem
      return item
    }
    else{
      return item
    }
  })

setExpensList(newlist)
 } 

  return (
    
    <div>
      <div className="modal fade" id="edit" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{backgroundColor:"#c9c7c7"}}>
            <div className="modal-header">
              <h5 className="modal-title text-danger h4" id="exampleModalLongTitle">
                Edit Your Expense List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body w-100">
              <div>
                <label className="h5" htmlFor="expensename">Edit Expense Name</label><br/>
                <input
                  className="w-100 form-control"
                  type="text"
                  onChange={(e)=>setEditedItem({...editedItem,expense:e.target.value})}
                  id="expensename"
                  name="expenseName"
                  value={editedItem.expense}
                />
              </div>
              <div className="mt-4">
                <label className="h5" htmlFor="expensecost">Edit Amount</label><br/>

                <input
                className="w-100 form-control"
                  type="text"
                  name="expenseCost"
                  onChange={(e)=>setEditedItem({...editedItem,amount:e.target.value})}
                  id="expensecost"
                 value={editedItem.amount}

                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={()=>handleEdit(editedItem.id)}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
