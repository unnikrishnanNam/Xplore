import Navbar from "./components/custom/navbar";
import Viewport from "./components/custom/viewport";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-2">
      <Navbar />
      <main className="h-full w-full flex flex-col justify-center items-center gap-4">
        <Viewport />
      </main>
    </div>
  );
}

export default App;
