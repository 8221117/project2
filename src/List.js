import LineItem from "./ListItem.js";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem key={item.id} item={item}></LineItem>
      ))}
    </ul>
  );
};

export default List;
