import kebab from "../../assets/img/kebab.png"
import starFull from "../../assets/img/Star-full.svg";
import star from "../../assets/img/Star.svg";
import "./dish.css";
function DishBox(){
    return(
             <div className="card text-center" >
             <img src={kebab} alt="kebab" className="card-img-top dish__img" />
             <div className="card-body">
              <p className="card-text">Barbecue Shish kebab Shashlik Skewer</p>
              <span>
                <img src={starFull} alt="star" />
                <img src={starFull} alt="star" />
                <img src={starFull} alt="star" />
                <img src={starFull} alt="star" />
                <img src={star} alt="star" />
                </span><br/>
                <span className="dish__price">$12.00</span>
              </div>
       </div>
    )
}
export default DishBox