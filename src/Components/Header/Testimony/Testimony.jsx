import  Card  from "./CardT";
// import 

function Testimony(){
    return(
        <div className="testimony text-center">
            <div className="container py-5">
                <h4 className="testimony__title">
                Testimony
                </h4>
                <h3 className="testimony__tex py-4">Happy customers</h3>
                <div className="card__wrapper d-flex justify-content-center">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="btn__wrapper py-5">
                    <button className="testimony__btn mx-3">Prev</button>
                    <button className="testimony__btn mx-3">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Testimony;