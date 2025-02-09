import Navbar from "./components/custom/navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="h-full w-screen flex flex-col justify-between items-center gap-2">
      <Navbar />
      <main className="h-full w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-center text-4xl font-bold">Hello World</h1>
        <Button>It Works</Button>
      </main>
    </div>
  );
}

export default App;
