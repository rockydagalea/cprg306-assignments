import ItemList from "./item-lists";
import Item from "./item";

function Page() {
  return (
    <div>
      <h1
        className="text-3xl text-orange-300 font-bold ml-4 my-6 "
        font-bold
        text-red-300
      >
        Shopping Lists
      </h1>
      <Item />
      <ItemList />
    </div>
  );
}

export default Page;
