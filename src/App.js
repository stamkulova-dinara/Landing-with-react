import './App.css';
import Block1 from './Components/Block1/Block1';
import Block2 from './Components/Block2/Block2';
import Block6 from './Components/Block6/Block6';
import Block7 from './Components/Block7/Block7';
import Card from './Components/Card/Card';
import Cards from './Components/Cards/Cards';
import Cards1 from './Components/Cards1/Cards1';
import Cards2 from './Components/Cards2/Cards2';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Block1/>
      <Block2/>
      <Card/>
      <Cards/>
      <Cards1/>
      <Block6/>
      <Block7/>
      <Cards2/>
      <Footer/>

    </div>
  );
}

export default App;
