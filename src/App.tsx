import Header from "@/components/layout/Header";
import Pattern from "@/components/layout/Pattern";
import Monitor from "@/components/layout/Monitor";
import BallCaller from "@/components/layout/BallCaller";
import CalledBalls from "@/components/layout/CalledBalls";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="grid min-h-screen grid-cols-3 grid-rows-3 gap-4 overflow-auto bg-slate-800 p-4 text-white">
        <div className="row-span-2">
          <Pattern />
        </div>
        <div className="col-span-2 row-span-2">
          <Monitor />
        </div>
        <div className="row-start-3">
          <BallCaller />
        </div>
        <div className="col-span-2 sm:row-start-3">
          <CalledBalls />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
