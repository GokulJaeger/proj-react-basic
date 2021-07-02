import './App.css';
import React from "react";
import StyleColor from './components/StyleColor';


function App() {

  const dte = new Date();
  const value = dte.toISOString();
  const users = [
    {fname: "Gokul",lname:"Jaeger"},
  ];
  const lable = "App-Component";
  return (
    <div className="App">
      <div>
        <StyleColor data={users} ts={value} ln={lable} />
      </div>
    </div>
  );
}

export default App;
