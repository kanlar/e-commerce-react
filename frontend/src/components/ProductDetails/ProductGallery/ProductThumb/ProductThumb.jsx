import "./ProductThumb.css";
function ProductThumb({ itemImg, setActiveImg, activeImg }) {
  return (
    <>
      <li
        className="glide__slide glide__slide--active"
        style={{ width: "88.2px", marginRight: "5px" }}
        onClick={() => setActiveImg(itemImg)}
      >
        <img
          src={` /${itemImg}`}
          alt=""
          className={`img-fluid ${itemImg === activeImg ? "active" : ""}`}
        />
      </li>
    </>
  );
}

export default ProductThumb;
