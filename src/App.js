import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
function App() {
  return (
    <div className="w-full h-[100vh] bg-[#9064FD] flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-[#1F1B4B] flex flex-col">
        <Navbar />
        <Content />
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
