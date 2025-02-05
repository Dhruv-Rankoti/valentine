import react, { useState } from "react";

function MyComponent() {
    const [img, setImg] = useState('manja');
    const [text, setText] = useState('Will You be my Valentine? 🤗');
    const [count, setCount] = useState(0);
    const [showNoButton, setShowNoButton] = useState(true);

    let imgUrl = `/assets/${img}.gif`;

    function yes(e) {
        setImg('kiss');
        setText('Hehehehe, I knew it! 😘');
        setCount(0);
        setShowNoButton(false);
    }
    
    function no(e) {
        setCount(count => count + 1);
        switch(count) {
            case 0:
                setImg('no1');
                setText('Soch le ache se! 🙄');
                break;
            case 1:
                setImg("no2");
                setText('Ek aur baar soch le! 😣')
                break;
            default:
                setImg("no3");
                setText('Manja na! Kitna bhav khaegi 😭')
        }
        moveElement(e.currentTarget);
    }

    function moveElement(e) {
        if (count <= 2) return;
        e.style.position = "absolute";
        e.style.top = `${Math.floor(Math.random() * 90 + 5)}%`;
        e.style.left = `${Math.floor(Math.random() * 90 + 5)}%`;
    }

    return (
        <div className="container">
            <img className="my-image" src={imgUrl} alt="manja na" />
            <h1>{text}</h1>
            <div className="my-button">
                {showNoButton && <button onClick={yes}>Yes</button>}
                {showNoButton && <button onClick={no} onMouseEnter={(e) => moveElement(e.currentTarget)}>No</button>}
            </div>
        </div>
    );
}

export default MyComponent;