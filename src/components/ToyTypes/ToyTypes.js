import "./ToyTypes.css";
import ToyTypesCard from "../ToyTypeCard/ToyTypeCard";
import toy1 from "../../assets/stuffed-toy.png";
import toy2 from "../../assets/wooden-toy.png";

const ToyTypes = () => {
  return (
    <div className="toyTypes">
      <ToyTypesCard
        title={"Stuffed Animals"}
        img={toy1}
        color={"#FFC12C"}
        side={"left"}
      />
      <ToyTypesCard
        title={"Wooden Toys"}
        img={toy2}
        color={"#FB416B"}
        side={"right"}
      />
    </div>
  );
};

export default ToyTypes;