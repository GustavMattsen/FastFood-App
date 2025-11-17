function OrderItem({ item, onIncrease, onDecrease }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <button onClick={onDecrease}>-</button>
        <span className="qty">{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </td>
      <td>SEK {(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
}

export default OrderItem;
