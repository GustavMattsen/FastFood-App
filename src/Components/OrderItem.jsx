// src/components/OrderItem.jsx
function OrderItem({ item, onIncrease, onDecrease }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <button onClick={() => onDecrease(item.id)}>-</button>
        {item.quantity}
        <button onClick={() => onIncrease(item.id)}>+</button>
      </td>
      <td>SEK {(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
}

export default OrderItem;