import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Header from './Components/Header';
import img1 from './assets/img/password-generator.png';

function App() {
  return (
    <div>
        <Nav />
        <Header />
        <Projects title="Password Generator" img={img1} githubLink="https://github.com/bonomichael98/javascript-password-generator" alt="password generator" type="Javascript" />
        <Projects title="Password Generator" img={img1} githubLink="https://github.com/bonomichael98/javascript-password-generator" alt="password generator" type="Javascript" />
        <Projects title="Password Generator" img={img1} githubLink="https://github.com/bonomichael98/javascript-password-generator" alt="password generator" type="Javascript" />
        <Projects title="Password Generator" img={img1} githubLink="https://github.com/bonomichael98/javascript-password-generator" alt="password generator" type="Javascript" />
        <About />
        <Contact address="Based in Mt.Carmel Ohio" email="bonomichael98@gmail.com" githubLink="https://github.com/bonomichael98" />
    </div>
  );
}

export default App;
// address,
//         email,
//         githubLink
// img,
//     title,
//     link,
//     type,
//     alt