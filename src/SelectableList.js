import React, { useState } from 'react';

const SelectableList = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectableList;