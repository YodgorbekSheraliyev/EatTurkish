import calendar from "../../../assets/img/calendar.svg";
import clock from "../../../assets/img/clock.svg";
import eye from "../../../assets/img/eye.svg";
import "./card.css"


function Card(){
    return(
        <div className="card mx-3" >
          <div className="card-body">
             <h5 className="card-title">Maria</h5>
             <p className="card-text">Я всегда был  самым худым и щуплым ребенком среди своих сверстников. Я всегда мечтал стать как мой кумир и иметь интерес...</p>
             <span className="px-3"><img src={calendar} alt="calendar"  /> 06/02/2022 </span>
             <span className="px-3"> <img src={clock} alt="calendar" /> 11:15</span>
             <span> <img src={eye} alt="calendar" /> 222</span>
           </div>
        </div>
    )
}
export default Card;