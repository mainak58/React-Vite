import ProfilePic from './assets/safeimagekit-photo_6201780914426593364_y.jpg'

function Card(){
    return (
        <div className="card">
        <img src={ProfilePic} className="card-img-top" alt="Profile pitcure" />
        <h5 className="card-title">Card title</h5>
        <p className="card-text">I am mainak karmakar</p>
         <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
    );
}

export default Card