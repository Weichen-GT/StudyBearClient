import { useState } from "react";
import "./App.css";
import Transcript from "./components/transcript/Transcript";
import Header from "./components/header/Header";
import VocabPanel from "./components/vocab/VocabPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="mx-auto w-full max-w-300 px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: 8/12 */}
          <div className="lg:col-span-8 space-y-4">
            {/* Make transcript a fixed-height scroll area on laptop */}
            <div className="rounded-2xl">
              <Transcript />
            </div>
          </div>

          {/* RIGHT: 4/12 */}
          <div className="lg:col-span-4">
            <VocabPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
