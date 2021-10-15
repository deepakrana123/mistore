
import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Silder from './components/Silder';
import data from "./data/data.json";
import Offer from './components/Offer';
import HeaderIng from './components/HeaderIng';
import StarProducts from './components/StarProducts';
import HotAccesories from './components/HotAccesories';
import Hot from './components/Hot';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';

console.log(data.hotAccessories.music)
function App() {
  return (
    <Router>
        
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Silder start={data.banner.start}/>
      <Offer end={data.offer}/>
      <HeaderIng Text="STAR PRODUCTS"/>
      <StarProducts starproduct={data.starProduct}/>
      <HeaderIng Text="HOT ACCESSOIRES"/>
      <HotAccesories/>

      <Route exact path="/music">
      <Hot music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route>

      <Route exact path="/smartDevice">
       <Hot smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

       <Route exact path="/home">
       <Hot home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <Hot lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>

       <Route exact path="/mobileAccessories">
       <Hot mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>
      
      <HeaderIng Text="ProductReviews"/>
      <ProductReviews productReviews={data.productReviews}/>

      <HeaderIng Text="Videos"/>
      <Videos videos={data.videos}/>

      <HeaderIng Text="In The Prress"/>
      <Banner   banner={data.banner}/>
      <Footer footer={data.footer}/>


    </Router>
  );
}

export default App;
