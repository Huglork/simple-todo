import "./ToyTypeCard.css";

const ToyTypesCard = ({ title, color, img, side }) => {
  return (
    <div className={`toyTypeCard`} style={{ backgroundColor: color }}>
      <div
        className={`toyTypeCard__inner ${
          side === "left" ? "leftSide" : "rightSide"
        }`}
      >
        {img ? (
          <div className="toyTypeCard__image">
            <img src={img} alt="toy"/>
          </div>
        ) : null}

        <div className="toyTypeCard__text">
          {title && <h3>{title}</h3>}
          <button>Shop now </button>
        </div>
      </div>
    </div>
  );
};

export default ToyTypesCard;