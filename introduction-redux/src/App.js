import "./App.css";
import Child1 from "./redux/slice/Component/Child1";
import Child2 from "./redux/slice/Component/Child2";

function App() {
  return (
    <div className="App">
      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;
