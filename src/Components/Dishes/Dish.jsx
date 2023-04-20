import DishBox from "./DishBox";

function Dish(){
  return(
   <main className="dish">
     <div className="container py-5">
        <div className="dish__title-wrapper d-flex justify-content-between mb-5">
            <h3 className="dish__title ">Popular Dishes</h3>
            <div className="arrow__wrapper">
                <button className="arrows"><span className="arrow__left"></span></button>
                <button className="arrows"><span className="arrow__right"></span></button>
            </div>
        </div>
        <div className="dish_box-wrapper d-flex gap-2">
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>  
        </div>
    </div>
   </main>
  )
}

export default Dish;