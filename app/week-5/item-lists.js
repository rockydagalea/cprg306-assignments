"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderGroupedItems = () => {
    return Object.keys(groupedItems)
      .sort()
      .map((category) => (
        <div key={category}>
          <h2 className="capitalize font-bold text-xl mt-4">{category}</h2>
          <ul>
            {groupedItems[category]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
          </ul>
        </div>
      ));
  };

  return (
    <div className="p-4">
      <p>Sort: </p>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-white-200"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-white-200"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-white-200"
          }`}
        >
          Group Category
        </button>
      </div>
      {sortBy === "group" ? (
        renderGroupedItems()
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
