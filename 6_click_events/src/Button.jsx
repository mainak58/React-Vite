import './index.css'

function Button() {

    const clickBtn = (e) => {
        e.target.textContent = "Hello, you have clicked"
        console.log("hello world")
    }

    return (
        <button className="btn" onClick={clickBtn}>Hello Click me</button>
    );

}

export default Button

