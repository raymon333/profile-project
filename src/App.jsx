import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="bg-black h-auto w-full overflow-hidden">
      <NavBar />
      <Home/>
      <About />
      <Experience/>
      <Project/>
      <Footer />
    </div>
  );
}
