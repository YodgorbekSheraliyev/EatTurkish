// import "./news.css";
import newsImg from "../../assets/img/newsImg.png"

function NewsCard() {
  return (
    <div className="card d-inline-block pb-4">
      <img src={newsImg} alt="" className="card-img-top" />
      <div className="card-body position-relative text-start ">
        <h5 className="card-title">Tips for prepping and caring for your grill</h5>
        <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.
        </p>
        <span className="float-start text-danger fw-bolder">Read More</span>
        <span className="float-end">16 Apr 2021</span>
      </div>
    </div>
  );
}
export default NewsCard;
