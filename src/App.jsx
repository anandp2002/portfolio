import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

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

        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 id="about" className="m-5 p-10 text-3xl">
          Hello
        </h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
        <h1 className="m-5 p-10 text-3xl">Hello</h1>
      </div>
    </main>
  );
}

export default App;
