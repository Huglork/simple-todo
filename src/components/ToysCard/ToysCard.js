import "./ToysCard.css"
import Image from "../../assets/stuffed-toy.png"

const StuffedAnimalsCard = () => {
    return <div className="toys__card">
        <div className="card__image"><img src={Image}/></div>
        <h5 className="card__title">Teddy Bear</h5>
        <button className="card__price">$ 30.00 USD</button>
    </div>
}

export default StuffedAnimalsCard;