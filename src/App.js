import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Header from './Components/Header';
import img1 from './assets/img/password-generator.png';
import img2 from './assets/img/weather-api.png';
import img3 from './assets/img/foodly.png';
import img4 from './assets/img/restaurant-mockup.png';



function App() {
  return (
    <div>
        <Nav />
        <Header />
        <Projects title="Password Generator" img={img1} githubLink="https://github.com/bonomichael98/javascript-password-generator" alt="password generator" type="Javascript" />
        <Projects title="Weather API" img={img2} githubLink="https://bonomichael98.github.io/weather-api/" alt="weather api" type="Javascript" />
        <Projects title="Foodly" img={img3} githubLink="https://foodly2022.herokuapp.com/" alt="foodly recipe sharing app" type="Node" />
        <Projects title="Restaurant Mockup" img={img4} githubLink="https://bonomichael98.github.io/restaurant-project/" alt="restaurant project mockup" type="Javascript" />
        <About />
        <Contact address="Based in Mt.Carmel Ohio" email="bonomichael98@gmail.com" githubLink="https://github.com/bonomichael98" />
    </div>
  );
};

export default App;