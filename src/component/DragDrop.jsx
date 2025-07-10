// App.js
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drag] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={styles.item}>
      {item.label}
    </div>
  );
};

export default function DragDrop() {
  const [items, setItems] = useState([
    { id: "1", label: "Item 1" },
    { id: "2", label: "Item 2" },
    { id: "3", label: "Item 3" },
    { id: "4", label: "Item 4" },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updated = [...items];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    setItems(updated);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={styles.container}>
        <h3>Reorderable List</h3>
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
}

const styles = {
  container: {
    width: 300,
    margin: "40px auto",
    padding: 10,
    border: "2px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  item: {
    padding: 10,
    margin: "6px 0",
    backgroundColor: "#e0e0e0",
    border: "1px solid #aaa",
    borderRadius: 4,
    cursor: "move",
  },
};
