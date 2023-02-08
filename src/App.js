import{Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Main/>}/>
    

     </Routes>
    </div>
  );
}

export default App;
