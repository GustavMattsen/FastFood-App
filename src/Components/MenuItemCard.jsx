function MenuItemCard({ imageUrl, title, description, price, onAdd }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />

      <div className="card-body">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">SEK {price.toFixed(2)}</p>

        <button onClick={onAdd} className="btn-add">
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
