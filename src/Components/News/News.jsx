import NewsCard from "./NewsCard";
import "./news.css"
function News(){
    return(
        <div className="news  py-5">
            <div className="container  text-center">
            <h5 className="fw-bold">News</h5>
            <h3 className="dish__title pb-5">Gerícht updates</h3>
            <main className="newsCard__wrapper d-flex gap-3">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            </main>
            <button className="news__btn my-5">View More</button>
        </div>
        </div>
    )
}
export default News;