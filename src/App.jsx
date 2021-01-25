import React, { useState } from 'react';
import NewBill from './components/Bill.jsx';
import Form from './components/AddItemsAndPeople.jsx';
import ItemsList from './components/ItemList.jsx';

export default function App() {
  // bill props to be passed
  const [billName, setBillName] = useState('');
  const [billId, setBillId] = useState(null);
  // people props to be passed
  const [peopleList, setPeopleList] = useState([]);
  // items props to be passed
  const [itemList, setItemList] = useState([]);
  return (
    <div>
      <NewBill billName={billName} sendBillName={setBillName} sendBillId={setBillId} />
      <Form
        billId={billId}
        itemList={itemList}
        sendItemList={setItemList}
        peopleList={peopleList}
        sendPeopleList={setPeopleList}
      />
      <ItemsList
        billId={billId}
        itemList={itemList}
        sendItemList={setItemList}
        peopleList={peopleList}
        sendPeopleList={setPeopleList}
      />
    </div>
  );
}
