import './List.css';
import { useState } from 'react';

export const ListItemCard = (props) => {
  const [selectedCards, setSelectedCards] = useState({});
  const clickHandler = (item) => {
    const currentSelectedCards = { ...selectedCards };
    console.log(currentSelectedCards, item);
    // const isSelected = currentSelectedCards[item] == true;
    // if (!isSelected) {
    //   // setSelectedCards({ ...selectedCards, item });
    // } else {
    //   console.log('need to delete the card from currentSelectedCards');
    // }
  };

  return (
    <li
      key={props.data.name}
      className={`List__item List__item--${props.data.color}`}
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
