import "./StuffedAnimals.css";
import ToysCard from "../ToysCard/ToysCard"


const StuffedAnimals = () => {
    return <div className="stuffed-animals container">
        <div className="stuffed-animals__intro">
            <h1 className="stuffed-animals__title">
                Stuffed Animals
            </h1>
            <button className="stuffed-animals__see-more">See All Toys</button>
        </div>
        <div className="stuffed-animals__cards">
            <ToysCard/>
            <ToysCard/>
            <ToysCard/>
            <ToysCard/>
        </div>
    </div>
}

export default StuffedAnimals;