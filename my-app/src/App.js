// import logo from './logo.svg';
// import './App.css';

import Infromcard from "./Components/Infromcard";

function App() {
  const infromcardstyle = {
    border: " 4px solid black",
    boxshadow: " 2px 2px 3px",
    padding: "8px",
    display: "grid",
    gridtemplatecolumns: "repeat(2,auto)",
  };

  return (
    <div className>
      <Infromcard
        name="ravi"
        surname="sahani"
        address="Khar danda , rajiv nagar , s.v. patil road , scruz-west , mumbai-400054"
        image="https://via.placeholder.com/200"
      />
      <Infromcard
        name="rajiv"
        surname="sahani"
        address="Vihar Hotel , rajiv nagar , s.v. patil road , scruz-west , mumbai-400054"
        image="https://via.placeholder.com/200"
      />
    </div>
  );
}

export default App;
