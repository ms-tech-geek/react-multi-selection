import './List.css';
import { useState } from 'react';

export const ListItemCard = (props) => {
  const [selectedCards, setSelectedCards] = useState({});

  const clickHandler = (item) => {
    setSelectedCards((currentSelectedCards) => {
      const isSelected = !!currentSelectedCards[item.name];
      if (isSelected) {
        const { [item.name]: value, ...rest } = currentSelectedCards;
        return rest;
      } else {
        return { ...currentSelectedCards, [item.name]: true };
      }
    });
  };

  return (
    <li
      key={props.data.name}
      className={`List__item List__item--${props.data.color} ${
        selectedCards[props.data.name] ? 'List__item--active' : ''
      }`}
      onClick={() => clickHandler(props.data)}
    >
      {props.data.name}
    </li>
  );
};

const List = ({ items }) => {
  return (
    <ul className="List">
      {items.map((item, index) => (
        <ListItemCard key={index} data={item} />
      ))}
    </ul>
  );
};

export default List;
