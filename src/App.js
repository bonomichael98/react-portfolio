import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';



function App() {
  return (
    <div>
        <Nav />
        <Header />
        <Projects />
        <About />
    </div>
  );
}

export default App;
