// import logo from './logo.svg';
import './App.css';
import DisplayComponent from "./components/DisplayComponent";


function App() {
  return (
    <div className="App">
      <DisplayComponent firstName = "John" lastName = "Smith" age = {33}/>
      <DisplayComponent firstName = "Mary" lastName = "Doe" age = {44}/>
    </div>
  );
}

export default App;
