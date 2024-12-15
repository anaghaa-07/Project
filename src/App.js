import Carousel from './Components/Carousel';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from "./Components/Content"
import Products from './Components/Products';
import './App.css';



function App() {
  return (
    <div className="App">
    <Header/>
    <div className='component' style={{margin:'100px'}}></div>
    <Content/>
    
    <Carousel/>
    
    
    <div className='component' style={{margin:'100px'}}></div>
    <h1 style={{fontWeight:"bold",fontFamily:"Lora",fontSize:"50px",color:"brown"}}>Explore by Category!</h1>
    <p style={{fontSize:"30px", fontWeight:"1000"}}>Our bestsellers curated just for you.</p>
      
   
    <Products/>
    <div className='component' style={{margin:'100px'}}></div>
    <Footer/>
    </div>
  );
}

export default App;
