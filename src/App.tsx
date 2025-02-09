import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-200 flex flex-col justify-center items-center gap-2">
      <h1 className="text-center text-4xl font-bold">Hello World</h1>
      <Button>It Works</Button>
    </div>
  );
}

export default App;
