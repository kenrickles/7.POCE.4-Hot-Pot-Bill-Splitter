/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Form({
  peopleList, sendPeopleList, billId, itemList, sendItemList,
}) {
  if (billId === null) {
    return (
      <div />
    );
  }
  // set items and people base state
  const [person, setPerson] = useState({ name: '', amount: 0 });
  const [item, setItem] = useState({ name: '', price: '', people: [] });

  // handle name change
  const handlePersonNameChange = (e) => {
    const personNameChange = e.target.value;
    setPerson({ ...person, name: personNameChange });
  };
  const handlePersonSubmit = () => {
    sendPeopleList([person, ...peopleList]);
  };
  // handle item name & price change
  const handleItemNameChange = (e) => {
    const itemName = e.target.value;
    setItem({ ...item, name: itemName, people: [] });
  };
  const handleItemPriceChange = (e) => {
    const itemPrice = e.target.value;
    setItem({ ...item, price: itemPrice, people: [] });
  };
  const handleItemSubmit = () => {
    sendItemList([item, ...itemList]);
  };

  return (
    <div>
      <label htmlFor="item-name">
        {'item name to add: '}
        <input id="item-name" type="text" value={item.name} onChange={handleItemNameChange} />
      </label>
      <label htmlFor="item-price">
        {'item price: '}
        <input id="item-price" type="number" step="0.01" value={item.price} onChange={handleItemPriceChange} />
      </label>
      <button type="button" onClick={handleItemSubmit}> add item </button>
      <br />
      <label htmlFor="person-name">
        Name of person:
        <input type="text" value={person.name} onChange={handlePersonNameChange} />
      </label>
      <button type="button" className="btn btn-success" onClick={handlePersonSubmit}>
        Add Person
      </button>
    </div>
  );
}
