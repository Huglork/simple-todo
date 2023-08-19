import { useState } from "react";
import "./Modal.css";

const Modal = ({ isActive, saveAction }) => {
    const [inputText, setInputText] = useState("");

    const handleClick = () => {
        saveAction(inputText);
        setInputText('');
    };

    return isActive && (
        <div className="modalWrapper">
            <input 
                type="text" 
                value={inputText} 
                onChange={(event) => setInputText(event.target.value)} 
            />
            <button onClick={handleClick}>Save</button>
        </div>
    );
};

export default Modal;