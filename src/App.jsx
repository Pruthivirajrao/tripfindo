import './App.css';
import Achievments from './components/Achievments/Achievments';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import {WhyLearn} from './components/WhyLearn/WhyLearn';

function App() {

  return (
    <div className="app">
        <Article></Article>
        <Header/>
        <Hero/>
        <Achievments/>
        <WhyLearn/>
    </div>
  )
}

export default App
