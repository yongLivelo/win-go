import Header from "@/components/layout/Header";
import Pattern from "@/components/layout/Pattern";
import Monitor from "@/components/layout/Monitor";
import BallCaller from "@/components/layout/BallCaller";
import CalledBalls from "@/components/layout/CalledBalls";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <div className="w-full bg-red-200 bg-cover text-white">
        <Header />
        <div className="grid h-screen grid-rows-4 gap-4 bg-slate-800 p-4 text-white md:grid-cols-3 md:grid-rows-3">
          <div className="md:row-span-2">
            <Pattern />
          </div>
          <div className="md:col-span-2 md:row-span-2">
            <Monitor />
          </div>
          <div className="md:row-start-3">
            <BallCaller />
          </div>
          <div className="md:col-span-2 md:row-start-3">
            <CalledBalls />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
