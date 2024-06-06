function Item(props) {
  return (
    <div className="p-2 m-4 bg-slate-900 max-w-sm " font-bold text-red-300>
      {props.name}
      {props.quantity}
      {props.category}
    </div>
  );
}

export default Item;
