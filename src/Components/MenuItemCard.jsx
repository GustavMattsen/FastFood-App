function MenuItemCard({ imageUrl, title, description, price, onAdd }) {
  return (
    <div className="card h-100 shadow-sm text-center" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={title}
        style={{
          objectFit: "contain",
          maxHeight: "220px",
          width: "100%",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted small">{description}</p>
          <p className="fw-bold text-dark">SEK {price.toFixed(2)}</p>
        </div>
        <button onClick={onAdd} className="btn btn-secondary mt-2 w-100">
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;