import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="mx-auto max-w-full overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative Z-10">
        <Navbar />
      </div>

      <div id="home" className="relative text-white">
        <Home />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </main>
  );
}

export default App;
