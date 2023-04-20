import "./letter.css";

function Letter(){
    return(
        <form className="letter container text-center py-5">
            <h5 className="letter__title py-3 fw-bold">Newsletter </h5>
            <h3 className="letter__subtitle pb-3">Subscribe to Our Newsletter</h3>
            <p className="pb-4">And never miss latest Updates!</p>
            <input type='email' placeholder="Email Address" className="letter__input"/><button type="submit" className="letter__btn">Subscribe</button>
        </form>
    )
}
export default Letter;