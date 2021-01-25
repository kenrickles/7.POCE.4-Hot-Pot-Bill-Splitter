import axios from 'axios';
import React, { useState } from 'react';
import PeopleListForm from './AddItemsAndPeople.jsx';

export default function NewBill({
  billName, sendBillName, sendBillId, itemList, sendItemList,
}) {
  const [billStatus, setBillStatus] = useState(false);
  // helper function to remove the form when a new bill is submitted
  const removeBillDisplay = () => {
    // set the bill name input in the form to empty
    sendBillName('');

    // set this as true to remove the form
    setBillStatus(true);
  };
  const handleBillNameChange = (e) => {
    sendBillName(e.target.value);
  };
  // on submit i want to send the bill to the database
  const handleBillSubmit = () => {
    const newBill = {
      name: billName,
    };
    // post to axios to put into database
    axios.post('/newbill', { newBill })
      .then((result) => {
        sendBillId(result.data.bill.id);
      });
    removeBillDisplay();
  };
  if (billStatus === true) {
    return <div />;
  }

  return (
    <div className="container">
      <h2>
        Add new bill
      </h2>
      <div>
        <div>
          <label htmlFor="bill-name">
            Bill Name:
            <input type="text" value={billName} onChange={handleBillNameChange} />
          </label>
          <br />
          <button type="button" className="btn btn-success" onClick={handleBillSubmit}>
            Create Bill
          </button>
        </div>
      </div>
    </div>
  );
}
