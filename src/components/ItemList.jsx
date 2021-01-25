/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function ItemsList({
  billId, itemList, sendItemList, peopleList, sendPeopleList,
}) {
  // using billId to decide display or no display
  if (billId === null) {
    return (
      <div />
    );
  }
  // create a list of people to be selected from the added people list for the dropdown list
  const peopleListJSX = peopleList.map((person) => (
    <option key={person.name} value={person.name}>{person.name}</option>
  ));
  // functional component for selected a name
  function NameSelector({ itemIndex }) {
    const [selectedName, setSelectedName] = useState('select');
    // handle when a person is selected
    const handleSelectedNameChange = (e) => {
      setSelectedName(e.target.value);
    };
    // when user clicks on add [erson ]
    const onSubmit = () => {
      // update itemlist with person name
      itemList[itemIndex].people.push(selectedName);
      sendItemList([...itemList]);
      // finding the index of submitted person in peopleList array
      const submittedName = (person) => person.name === selectedName;
      const indexOfName = peopleList.findIndex(submittedName);
      // use the index of the name to find the amount that needs to be paid
      peopleList[indexOfName].amount += Number(itemList[itemIndex].price);
      // update the peopleList
      sendPeopleList([...peopleList]);

      // reset select value
      setSelectedName('select');
    };

    return (
      <div className="row" id="person-selection">
        <div className="col-6">
          <select
            className="person-name"
            value={selectedName}
            onChange={handleSelectedNameChange}
          >
            <option key="select" value="select" hidden>select</option>
            {peopleListJSX}
          </select>
        </div>
        <div className="col-6">
          <button type="button" onClick={onSubmit}>
            Add Person
          </button>
        </div>
      </div>
    );
  }
  // display a list of people who is required to pay for the item
  function NameList({ item }) {
    const { people } = item;
    const peopleNamesJsx = people.map((personName) => (
      <li key={personName}>
        {personName}
      </li>
    ));

    return (
      <div className="row">
        <div className="col-12">
          <h4>Bill Splitters</h4>
          <ul>
            {peopleNamesJsx}
          </ul>
        </div>
      </div>
    );
  }
  // array for item element
  const itemsJsx = itemList.map((item, index) => (
    <div key={index} className="container item-container">
      <div className="row" id="item-detail">
        <div className="col-6">
          item name:
          {item.name}
        </div>
        <div className="col-6">
          item price:
          {item.price}
        </div>
      </div>
      <NameSelector itemIndex={index} />
      <NameList item={item} />
    </div>
  ));

  return (
    <div>
      <h3> Item List</h3>
      {itemsJsx}
    </div>
  );
}
