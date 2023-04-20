import DishBox from "../../Dishes/DishBox";

function Menu(){
    return(
        <main className="menu container">
            <h3 className="dish__title pt-3 pb-4">Our Regular Menu Pack</h3>
            <div className="menu__btn-wrapper d-flex justify-content-between ">
                <button className="menu__btn">All</button>
                <button className="menu__btn">Shawarma</button>
                <button className="menu__btn">Turk Kebab</button>
                <button className="menu__btn">Hamburger Kebab</button>
                <button className="menu__btn">Doner kebab</button>
                <button className="menu__btn">Shish kebab</button>
                <button className="menu__btn">French fries Pizza</button>
                <button className="menu__btn">Desserts</button>
            </div>
            <div className="menu__card-wrapper d-flex py-5 flex-wrap gap-3">
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>
            <DishBox/>

            </div>
        </main>
    )
}

export default Menu;