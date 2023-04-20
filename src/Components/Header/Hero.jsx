import bgimg from '../../assets/img/bgimg.png';

function Hero() {
  return (
    <div className="hero d-flex justif-content-between container align-items-center">
      <aside className='aside__left'>
        <h4 className="hero__suptitle mb-3">Chase the new Flavour</h4>
        <h1 className="hero__title mb-3 ">The key to Fine dining</h1>
        <p className="hero__text">
          Sit tellus lobortis sed senectus vivamus molestie.<br/> Condimentum
          volutpat morbi facilisis quam scelerisque<br/> sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="hero__btn">Explore Menu</button>
      </aside>
      <aside>
        <img src={bgimg} alt="background" className='hero__img' />
      </aside>
    </div>
  );
}
export default Hero;
