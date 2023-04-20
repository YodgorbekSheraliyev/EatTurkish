import Dish from "./Components/Dishes/Dish";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu/Menu";
import Testimony from "./Components/Header/Testimony/Testimony";
import News from "./Components/News/News";
import Letter from "./Components/Newsletter/Letter";

function App() {
  return (
    <div className="App">
   <Header/>
   <Dish/>
   <Menu/>
   <Testimony/>
   <News/>
   <Letter/>
   <Footer/>
    </div>
  );
}

export default App;
